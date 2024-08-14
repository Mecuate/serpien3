import { useAudioFXContext } from 'context/AudioFXContext/AudioFXController'
import { defineDesicions, getVal, isTimeForDesicion, smoothRef } from 'engine/video/utils'
import { GenericObject } from 'models'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type UseDecisionsProps = {
    decisions: any[]
    player: any
    videoRef: React.RefObject<HTMLVideoElement | null>
    videoHasEnded?: boolean
    isPlaying?: boolean
}

export const usePlayerDecisions = ({
    decisions,
    player,
    videoRef,
    videoHasEnded,
    isPlaying,
}: UseDecisionsProps) => {
    const { audioBackgroundRef } = useAudioFXContext()
    const activeDecisions = useMemo(() => defineDesicions(decisions), [decisions])
    const ovmty45 = useRef(true)

    const [timeLineVal, setTimeLineVal] = useState(videoRef.current?.currentTime ?? 0)
    const [playerVolume] = useState(videoRef.current?.volume ?? 1)
    const [stopForDecision, setStopForDecision] = useState(false)
    const [pausedTime, setPausedTime] = useState(0)
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
            console.log('backSoundIn')

            // audioBackgroundRef.current!.muted = false
            // audioBackgroundRef.current!.play()
            // animatedFunction(
            //     (p: any) => {
            //         p.increment()
            //         audioBackgroundRef.current!.volume = p.value > cap ? cap : p.value
            //     },
            //     { params: smoothRef(0, 0.01), max: 100 }
            // )
        },
        [smoothRef, audioBackgroundRef.current]
    )

    const backSoundOut = useCallback(
        (cap: number = 0.6) => {
            // animatedFunction(
            //     (p: any) => {
            //         p.increment()
            //         audioBackgroundRef.current!.volume = p.value <= 0 ? 0 : p.value
            //     },
            //     { params: smoothRef(cap, -0.01), max: 100 }
            // ).then(() => {
            //     audioBackgroundRef.current!.muted = true
            //     audioBackgroundRef.current!.pause()
            // })

            console.log('backSoundOut')

            // audioBackgroundRef.current!.muted = true
            // audioBackgroundRef.current!.pause()
        },
        [smoothRef, audioBackgroundRef.current]
    )

    const speedTo = useCallback(
        (cap: number) => {
            setPlayRate(cap)
        },
        [setPlayRate, playRate]
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

    const speedUp = useCallback(
        (n: number) => {
            const expectedMax = Math.floor((n * 1000) / 16.66)
            animatedFunction(
                (p: any) => {
                    p.increment()
                    const { limited, raw, round } = getVal(p.value)

                    if (limited != playRate) {
                        setPlayRate(round)
                    }
                    player.volume(raw < 0.05 ? 0.05 : raw > playerVolume ? playerVolume : raw)
                    return raw > 1.1
                },
                { params: smoothRef(0.1, 0.019), max: expectedMax }
            ).then(() => {
                videoRef.current!.controls = true
                setCurrentID('')
                setPausedTime(0)
            })
        },
        [player, playerVolume, playRate]
    )

    const evalDecisionTime = useCallback(() => {
        setPausedTime((prev) => prev + 1)
    }, [setPausedTime])

    const setForDecision = useCallback(
        (b: boolean, id: string) => {
            console.log('setForDecision', b, id, currentID)

            setPausedTime(0)

            if (b) {
                console.log('registering id:', id)
                monitorPause.current = setInterval(evalDecisionTime, 1000)
                setCurrentID(id)
            } else {
                clearInterval(monitorPause.current)
                monitorPause.current = undefined
                setCurrentID('')
            }
            setStopForDecision(b)
        },
        [currentID, monitorPause, setStopForDecision, setCurrentID, setPausedTime]
    )

    /* 
    Loop evaluations from video time line
    */
    const decisionEffect = useCallback(
        async (duration: number = 12) => {
            console.log('decisionEffect satrted with:', duration)
            backSoundIn()
            slowDown(Math.floor(duration / 3))
            return new Promise<NodeJS.Timeout>((resolve) => {
                const wait = setTimeout(() => {
                    resolve(wait)
                }, (duration - 1) * 1000)
            }).then((wait) => {
                console.log('waited value is:', wait)

                clearTimeout(wait)

                backSoundOut()
                setForDecision(false, currentID)
                speedUp(1)
            })
        },
        [currentID, setForDecision, backSoundIn, backSoundOut, slowDown, speedUp]
    )
    useEffect(() => {
        if (stopForDecision || !ovmty45.current) return

        const { assigned, triggerDecision } = isTimeForDesicion(
            activeDecisions.stopSteps,
            timeLineVal
        )

        if (triggerDecision && ovmty45.current) {
            ovmty45.current = false
            const des = activeDecisions.decisions[assigned]
            setForDecision(true, des.id)

            if (des && des.slow) {
                decisionEffect(des.duration)

                // setTimeout(() => {
                //     // speedUp(maxTime)
                //     backSoundOut()
                //     setForDecision(false, des.id)
                // }, des.duration * 1000)
            }
        }
    }, [
        timeLineVal,
        stopForDecision,
        activeDecisions,
        setForDecision,
        backSoundIn,
        backSoundOut,
        slowDown,
        speedUp,
    ])

    /*   useEffect(() => {
        if (currentID) {
            monitorPause.current = setInterval(evalDecisionTime, 1000)
            setPausedTime(0)
        }

        if (!currentID) {
            clearInterval(monitorPause.current)
        }

        return () => {
            clearInterval(monitorPause.current)
        }
    }, [currentID, monitorPause, evalDecisionTime]) */

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

    return { stopForDecision, pausedTime, timeLineVal, playRate, speedTo }
}
