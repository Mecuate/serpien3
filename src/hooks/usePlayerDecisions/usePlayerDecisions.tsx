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
                    return resolve()
                }
                if (fn(options.params)) {
                    return resolve()
                }

                t++
                requestAnimationFrame(loop)
            }
            requestAnimationFrame(loop)
        })
    }, [])

    const backSoundIn = useCallback(
        (cap: number = 0.6) => {
            audioBackgroundRef.current!.volume = 0
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
                        console.log('round != playRate', round, playRate);
                        
                        setPlayRate(round)
                    }
                    // player.volume(p.value2 <= 0 ? 0 : parseFloat(p.value2.toFixed(2)))
                    return limited <= 0.1
                },
                { params: smoothRef(1, -(1 / expectedMax), -0.05, playerVolume), max: expectedMax }
            ).then(() => {
                // videoRef.current!.controls = false
            })
        },
        [smoothRef, player, playerVolume, playRate]
    )

    const speedUp = useCallback(
        (n: number) => {
            const expectedMax = Math.floor((n * 1000) / 16.66)
            animatedFunction(
                (p: any) => {
                    p.increment()
                    const { limited, round } = getVal(p.value)
                    if (round != playRate) {
                        setPlayRate(round)
                    }
                    // player.volume(raw < 0.05 ? 0.05 : raw > playerVolume ? playerVolume : raw)
                    return limited >= 1
                },
                { params: smoothRef(0.05, 0.01), max: expectedMax }
            ).then(() => {
                // videoRef.current!.controls = true
                setCurrentID('')
                setPausedTime(0)
            })
        },
        [smoothRef, player, playerVolume, playRate]
    )

    const evalDecisionTime = useCallback(() => {
        setPausedTime((prev) => prev + 1)
    }, [setPausedTime])

    const setForDecision = useCallback(
        (b: boolean, id: string) => {
            if (!monitorPause.current && b) {
                videoRef.current!.controls = false
                setCurrentID(id)
            }
            if (!b) {
                videoRef.current!.controls = true
                setCurrentID('')
                clearInterval(monitorPause.current)
            }
            setStopForDecision(b)
        },
        [monitorPause, setStopForDecision, setCurrentID]
    )

    /* 
    Loop evaluations from video time line
    */

    useEffect(() => {
        if (stopForDecision) return

        const { assigned, triggerDecision } = isTimeForDesicion(
            activeDecisions.stopSteps,
            timeLineVal
        )

        if (triggerDecision) {
            const des = activeDecisions.decisions[assigned]
            setForDecision(true, des.id)

            const maxTime =
                parseFloat(((des.duration * 1000) / (des.end - des.start)).toFixed(2)) / 3

            if (des && des.slow) {
                slowDown(maxTime)
                backSoundIn()

                setTimeout(() => {
                    speedUp(maxTime)
                    backSoundOut()
                    setTimeout(() => {
                        setForDecision(false, des.id)
                    }, maxTime)
                }, des.duration * 1000 - maxTime)
            }
        }
    }, [
        timeLineVal,
        setForDecision,
        stopForDecision,
        activeDecisions,
        backSoundIn,
        backSoundOut,
        slowDown,
        speedUp,
    ])

    useEffect(() => {
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
    }, [currentID, monitorPause, evalDecisionTime])

    useEffect(() => {
        if (!player) {
            return
        } else {
            try {
                console.log('player.playbackRate(playRate)');
                
                // player.playbackRate(playRate)
            } catch (e) {
                console.error('Error setting playback rate', e)
            }
        }

        return () => {
            console.log('@@@@ --. RETURN player.playbackRate()');
            
            // player.playbackRate(playRate)
        }
    }, [playRate, player])

    useEffect(() => {
        if (videoHasEnded) {
            clearInterval(timeUpdaterFunc.current)
            timeUpdaterFunc.current = undefined
            return
        }

        if (isPlaying && !timeUpdaterFunc.current) {
            console.log('setInterval(timeUpdate, 42)');
            timeUpdaterFunc.current = setInterval(timeUpdate, 42)
        }
        
        if (!isPlaying) {
            console.log('STOP(timeUpdate, 42)');
            clearInterval(timeUpdaterFunc.current)
            timeUpdaterFunc.current = undefined
        }

        return () => {
            clearInterval(timeUpdaterFunc.current)
            timeUpdaterFunc.current = undefined
        }
    }, [videoHasEnded, isPlaying])

    return { stopForDecision, pausedTime, timeLineVal, playRate }
}
