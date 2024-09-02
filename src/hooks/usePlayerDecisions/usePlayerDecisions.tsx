import { useAudioFXContext } from 'context/AudioFXContext/AudioFXController'
import { defineDesicions, getVal, isTimeForDesicion, smoothRef } from 'engine/video/utils'
import { APP_PATH, GenericObject } from 'models'
import { DecisionType } from 'models/video'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type UseDecisionsProps = {
    decisions: any[]
    player: any
    videoRef: React.RefObject<HTMLVideoElement | null>
    tooglePlay: (action?: 'stop' | 'play') => void
    videoHasEnded?: boolean
    isPlaying?: boolean
}

export const usePlayerDecisions = ({
    decisions,
    player,
    videoRef,
    videoHasEnded,
    isPlaying,
    tooglePlay,
}: UseDecisionsProps) => {
    const { audioBackgroundRef } = useAudioFXContext()
    const activeDecisions = useMemo(() => defineDesicions(decisions), [decisions])
    const shunt = useRef(true)
    const isResumable = useRef(false)

    const [timeLineVal, setTimeLineVal] = useState(videoRef.current?.currentTime ?? 0)
    const [playerVolume] = useState(videoRef.current?.volume ?? 1)
    const [stopForDecision, setStopForDecision] = useState(false)
    const [currentDecision, setCurrentDecision] = useState({} as DecisionType)

    const [pausedTime, setPausedTime] = useState(0)
    const [intData, setIntData] = useState<GenericObject>({})
    const [playRate, setPlayRate] = useState(1)
    const [currentID, setCurrentID] = useState('')

    const timeUpdaterFunc = useRef<NodeJS.Timeout>()
    const monitorPause = useRef<NodeJS.Timeout>()

    const timeUpdate = () => {
        const val = Math.floor(parseFloat((videoRef.current!.currentTime ?? 0).toFixed(2)) * 1000)
        setTimeLineVal(val)
    }

    const animatedFunction = useCallback((fn: CallableFunction, options: GenericObject) => {
        return new Promise<void>((resolve) => {
            let t = 0
            const { max } = options
            function loop() {
                if (t === max) {
                    cancelAnimationFrame(options.__i)
                    return resolve()
                }
                if (fn(options.params)) {
                    cancelAnimationFrame(options.__i)
                    return resolve()
                }

                t++
                options.__i = requestAnimationFrame(loop)
            }
            options.__i = requestAnimationFrame(loop)
        })
    }, [])

    const backSoundIn = useCallback(
        (cap: number = 0.6) => {
            audioBackgroundRef.current!.muted = false
            audioBackgroundRef.current!.play()
            animatedFunction(
                (p: any) => {
                    p.increment()
                    audioBackgroundRef.current!.volume = p.value > cap ? cap : p.value
                },
                { params: smoothRef(0, 0.01), max: 100 }
            )
        },
        [smoothRef, audioBackgroundRef.current]
    )

    const backSoundOut = useCallback(
        (cap: number = 0.6) => {
            animatedFunction(
                (p: any) => {
                    p.increment()
                    audioBackgroundRef.current!.volume = p.value <= 0 ? 0 : p.value
                },
                { params: smoothRef(cap, -0.01), max: 100 }
            ).then(() => {
                audioBackgroundRef.current!.muted = true
                audioBackgroundRef.current!.pause()
            })
        },
        [smoothRef, audioBackgroundRef.current]
    )

    const slowDown = useCallback(
        (n: number) => {
            const expectedMax = Math.floor((n * 1000) / 16.66)
            animatedFunction(
                (p: any) => {
                    p.increment()
                    const { limited, round } = getVal(p.value)
                    if (round != playRate) {
                        setPlayRate(round)
                    }
                    player.volume(p.value2 <= 0 ? 0 : parseFloat(p.value2.toFixed(2)))
                    return limited <= 0.1
                },
                { params: smoothRef(1, -(1 / expectedMax), -0.05, playerVolume), max: expectedMax }
            ).then(() => {
                videoRef.current!.controls = false
            })
        },
        [player, playerVolume, playRate]
    )

    const restorePlayerVolume = useCallback(
        (n: number) => {
            const expectedMax = Math.floor((n * 1000) / 16.66)
            animatedFunction(
                (p: any) => {
                    p.increment()
                    const { raw } = getVal(p.value)
                    player.volume(raw < 0.05 ? 0.05 : raw > playerVolume ? playerVolume : raw)
                    return raw > 1.1
                },
                { params: smoothRef(0.1, 0.02), max: expectedMax }
            ).then(() => {
                setPlayRate(1)
            })
        },
        [player, playerVolume, playRate]
    )

    const evalDecisionTime = useCallback(() => {
        setPausedTime((prev) => prev + 1)
    }, [setPausedTime])

    const setForDecision = useCallback(
        (b: boolean, id: string) => {
            if (b) {
                monitorPause.current = setInterval(evalDecisionTime, 1000)
                setCurrentID(id)
            } else {
                clearInterval(monitorPause.current)
                monitorPause.current = undefined
                setCurrentID('')
            }

            setPausedTime(0)
            setStopForDecision(b)
        },
        [currentID, monitorPause, setStopForDecision, setCurrentID, setPausedTime]
    )

    /* 
    Loop evaluations from video time line
    */
    const decisionEffect = useCallback(
        async ({ duration, start, end }: DecisionType) => {
            backSoundIn()
            slowDown(2)
            const limitPoint = end - start

            let stopingLimit: NodeJS.Timeout | undefined

            if (limitPoint < duration * 1000) {
                stopingLimit = setTimeout(() => {
                    tooglePlay('stop')
                    clearInterval(stopingLimit)
                }, limitPoint)
            }
            return new Promise<NodeJS.Timeout>((resolve) => {
                const wait = setTimeout(() => {
                    resolve(wait)
                }, duration * 1000 - 100)
            }).then((wait) => {
                shunt.current = true
                clearTimeout(wait)
                backSoundOut()
                setForDecision(false, '')
                setCurrentDecision({} as DecisionType)
                restorePlayerVolume(1)
                tooglePlay('play')
            })
        },
        [
            setForDecision,
            backSoundIn,
            backSoundOut,
            slowDown,
            restorePlayerVolume,
            tooglePlay,
            setCurrentDecision,
        ]
    )
    const endDecisionEffect = useCallback(
        async ({ duration, decisionAction }: DecisionType) => {
            backSoundIn()

            return new Promise<NodeJS.Timeout>((resolve) => {
                const wait = setTimeout(() => {
                    resolve(wait)
                }, duration * 1000 - 100)
            }).then((wait) => {
                shunt.current = true
                clearTimeout(wait)
                backSoundOut()
                setForDecision(false, '')
                setCurrentDecision({} as DecisionType)
                restorePlayerVolume(1)
                if (decisionAction) {
                    const [action, url] = decisionAction.split('|')
                    if (action === 'nav') {
                        window.location.assign(url)
                    }
                }
            })
        },
        [
            setForDecision,
            backSoundIn,
            backSoundOut,
            slowDown,
            restorePlayerVolume,
            tooglePlay,
            setCurrentDecision,
        ]
    )

    const resumePlay = useCallback(async () => {
        shunt.current = true
        return new Promise<{
            resume: boolean
            decisionAction: string
        }>((resolve) => {
            backSoundOut()
            setForDecision(false, '')
            setCurrentDecision({} as DecisionType)
            restorePlayerVolume(1)

            resolve({
                resume: isResumable.current,
                decisionAction: currentDecision.decisionAction ?? '',
            })
        }).then(({ resume, decisionAction }) => {
            if (resume) {
                tooglePlay('play')
                setPlayRate(1)
            } else {
                if (decisionAction) {
                    const [action, url] = decisionAction.split('|')
                    if (action === 'nav') {
                        window.location.assign(url)
                    }
                } else {
                    window.location.href = APP_PATH.ROOT
                }
            }
        })
    }, [
        setForDecision,
        backSoundOut,
        restorePlayerVolume,
        tooglePlay,
        setCurrentDecision,
        shunt,
        player,
        isResumable.current,
    ])

    useEffect(() => {
        if (stopForDecision || !shunt.current) {
            return
        }

        const { assigned, triggerDecision } = isTimeForDesicion(
            activeDecisions.stopSteps,
            timeLineVal
        )
        setIntData({ assigned, triggerDecision })

        if (triggerDecision && shunt.current) {
            shunt.current = false
            const currDesc = activeDecisions.decisions[assigned]
            setCurrentDecision(currDesc)
            setForDecision(true, currDesc.id)

            if (currDesc && currDesc.slow) {
                isResumable.current = true
                decisionEffect(currDesc)
            }
            if (currDesc && currDesc.playAtEnd) {
                isResumable.current = false
                endDecisionEffect(currDesc)
            }
        }
    }, [
        player,
        timeLineVal,
        stopForDecision,
        activeDecisions,
        setForDecision,
        backSoundIn,
        backSoundOut,
        slowDown,
        restorePlayerVolume,
        resumePlay,
    ])

    useEffect(() => {
        if (!player) {
            return
        } else {
            try {
                player.playbackRate(playRate)
            } catch (e) {
                console.error('Error setting playback rate', e)
            }
        }

        return () => {}
    }, [playRate])

    useEffect(() => {
        if (videoHasEnded) {
            clearInterval(timeUpdaterFunc.current)
            timeUpdaterFunc.current = undefined
            return
        }

        if (!isPlaying) {
            clearInterval(timeUpdaterFunc.current)
            timeUpdaterFunc.current = undefined
            return
        }

        if (isPlaying && !timeUpdaterFunc.current) {
            timeUpdaterFunc.current = setInterval(timeUpdate, 42)
            return
        }

        return () => {
            clearInterval(timeUpdaterFunc.current)
            timeUpdaterFunc.current = undefined
        }
    }, [videoHasEnded, isPlaying])

    return {
        stopForDecision,
        pausedTime,
        timeLineVal,
        playRate,
        intData,
        currentID,
        currentDecision,
        resumePlay,
        isResumable,
    }
}
