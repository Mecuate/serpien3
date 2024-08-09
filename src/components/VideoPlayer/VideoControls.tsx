import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { PlayerUISVG } from '../../assets/source/svg'
import { VC_GUI, VCIDs } from './utils'
import {
    ControlsArea,
    ControlsContainer,
    VideoControlsStyleClass,
    VideoControlsSVGStyles,
    VolumeTrack,
    VolumeTrackBack,
} from './VideoPlayer.styles'
import { drag, select } from 'd3'
import { useVideoWidth } from './useVideoWidth'

type FuncsTypesCallbacks = {
    playVid: () => void
    pause: () => void
    rewind: () => void
    forward: () => void
    fullScreen: () => void
    updateVolume: (n: number) => void
}

type VideoControlProps = {
    videoRef: React.MutableRefObject<HTMLVideoElement | null>
    timeLineVal: number
    duration: number
    volume: number
    funcs: FuncsTypesCallbacks
    isPlaying: boolean
}

const getRefElement = (id: string) => document.getElementById(id)

function findYGivenX(x: number) {
    // const [a, b, c] = [-0.000017701525054466233, 0.03815359477124183, 172]
    // const [a, b, c] = [0.000017735566448801746, -0.03769812091503268, 30]
    // const [a, b, c] = [0.000016869027042259142, -0.03515049505979743, 71.99296922622696]
    const [a, b, c] = [-0.00001773171735250728, 0.03768680457192696, 10.007538070183077]
    return a * x * x + b * x + c
}
// eslint-disable-next-line

export const VideoControlsUI = ({
    videoRef,
    timeLineVal,
    duration,
    volume,
    funcs,
    isPlaying,
}: VideoControlProps) => {
    VideoControlsSVGStyles()
    const { playVid, pause, /* rewind, forward,*/ fullScreen, updateVolume } = funcs
    const timeline = useRef<HTMLElement | null>(null)
    const timePointer = useRef<HTMLElement | null>(null)
    const playButton = useRef<HTMLElement | null>(null)
    const pauseButton = useRef<HTMLElement | null>(null)
    const volumeButton = useRef<HTMLElement | null>(null)
    const volumeLevelPointer = useRef<HTMLElement | null>(null)
    const enterFullScreenButton = useRef<HTMLElement | null>(null)
    const exitFullScreenButton = useRef<HTMLElement | null>(null)

    const { controlsMark } = useVideoWidth(videoRef)
    const [shouldFadeOut, setShouldFadeOut] = useState(false)

    const fadeIn: React.MouseEventHandler<HTMLDivElement> = (e) => {
        setShouldFadeOut(true)
    }

    const fadeOut: React.MouseEventHandler<HTMLDivElement> = (e) => {
        setTimeout(() => {
            setShouldFadeOut(false)
        }, 7000)
    }

    const switchClass = useCallback(() => {
        return shouldFadeOut ? VideoControlsStyleClass() : undefined
    }, [shouldFadeOut])

    const handleVolumeChange = useCallback(
        ({ target }: ChangeEvent<HTMLInputElement>) => {
            const { value } = target
            updateVolume(parseFloat(value) * 100)
        },
        [volume]
    )

    const handlePlay = useCallback(() => {
        playVid()
        if (playButton.current && pauseButton.current) {
            playButton.current.style.display = 'none'
            pauseButton.current.style.display = 'block'
            getRefElement(VC_GUI.PLAY)?.classList.add('hide')
            getRefElement(VC_GUI.PAUSE)?.classList.remove('hide')
        }
    }, [playVid, pause, isPlaying])

    const handlePause = useCallback(() => {
        pause()
        if (playButton.current && pauseButton.current) {
            playButton.current.style.display = 'block'
            pauseButton.current.style.display = 'none'
            getRefElement(VC_GUI.PAUSE)?.classList.add('hide')
            getRefElement(VC_GUI.PLAY)?.classList.remove('hide')
        }
    }, [pause])

    const handleEnterFS = useCallback(() => {
        console.log('enterFS')

        fullScreen()
        if (enterFullScreenButton.current && exitFullScreenButton.current) {
            exitFullScreenButton.current.style.display = 'block'
            enterFullScreenButton.current.style.display = 'none'
            getRefElement(VC_GUI.ENTER_FS)?.classList.toggle('hide')
            getRefElement(VC_GUI.EXIT_FS)?.classList.toggle('hide')
        }
    }, [pause])

    const handleExitFS = useCallback(() => {
        console.log('exitFS')

        fullScreen()
        if (enterFullScreenButton.current && exitFullScreenButton.current) {
            exitFullScreenButton.current.style.display = 'none'
            enterFullScreenButton.current.style.display = 'block'
            getRefElement(VC_GUI.ENTER_FS)?.classList.toggle('hide')
            getRefElement(VC_GUI.EXIT_FS)?.classList.toggle('hide')
        }
    }, [pause])

    useEffect(() => {
        if (timeline.current && timePointer.current) {
            const xPos = (1920 * timeLineVal) / duration
            timeline.current.setAttributeNS(null, 'stroke-dashoffset', `${1920 - xPos}`)
            timePointer.current.setAttributeNS(null, 'cx', `${xPos}`)
            timePointer.current.setAttributeNS(null, 'cy', `${findYGivenX(xPos)}`)
        } else {
            timeline.current = getRefElement(VCIDs.TIME_LINE_FULL)
            timePointer.current = getRefElement(VCIDs.TIMELINE_POINTER)
        }

        if (!volumeLevelPointer.current) {
            volumeLevelPointer.current = getRefElement('volumeRangeInput')
            if (volumeLevelPointer.current) {
                // @ts-ignore
                volumeLevelPointer.current.addEventListener('input', handleVolumeChange, true)
            }
        }

        if (!enterFullScreenButton.current || !exitFullScreenButton.current) {
            enterFullScreenButton.current = getRefElement(VCIDs.BUTTON_FULLSCREEN)
            exitFullScreenButton.current = getRefElement(VCIDs.BUTTON_EXIT)
            if (enterFullScreenButton.current) {
                enterFullScreenButton.current.addEventListener('click', handleEnterFS, true)
            }
            if (exitFullScreenButton.current) {
                getRefElement(VC_GUI.EXIT_FS)?.classList.add('hide')
                exitFullScreenButton.current.style.display = 'none'
                exitFullScreenButton.current.addEventListener('click', handleExitFS, true)
            }
        }
    }, [timeLineVal, volume])

    useEffect(() => {
        if (!playButton.current) {
            playButton.current = getRefElement(VCIDs.BUTTON_PLAY)
            if (playButton.current) {
                playButton.current.addEventListener('click', handlePlay, true)
            }
        }
        if (!pauseButton.current) {
            pauseButton.current = getRefElement(VCIDs.BUTTON_PAUSE)
            if (pauseButton.current) {
                pauseButton.current?.addEventListener('click', handlePause, true)
            }
        }
        if (playButton.current && pauseButton.current) {
            playButton.current.style.display = 'none'
            pauseButton.current.style.display = 'block'
            getRefElement(VC_GUI.PLAY)?.classList.add('hide')
            getRefElement(VC_GUI.PAUSE)?.classList.remove('hide')
        }

        if (!volumeButton.current) {
            volumeButton.current = getRefElement(VCIDs.BUTTON_VOLUME)
            if (volumeButton.current) {
                volumeButton.current?.addEventListener(
                    'click',
                    (e) => {
                        const volumeZone = getRefElement(VCIDs.VOLUME_BAR)
                        volumeZone?.classList.remove('hide')
                        volumeZone?.classList.add('flex')
                        volumeZone?.addEventListener(
                            'mouseleave',
                            () => {
                                volumeZone.removeEventListener('mouseleave', () => {})
                                setTimeout(() => {
                                    volumeZone.classList.add('hide')
                                    volumeZone.classList.remove('flex')
                                }, 3000)
                            },
                            true
                        )
                    },
                    true
                )
            }
        }
    }, [])

    return (
        <ControlsContainer className="vidBar">
            <div style={controlsMark}>
                <ControlsArea
                    onMouseEnter={fadeIn}
                    onMouseLeave={fadeOut}
                    className={switchClass()}
                >
                    <PlayerUISVG />
                    <VolumeTrackBack id={VCIDs.VOLUME_BAR} className="hide">
                        <VolumeTrack
                            type="range"
                            min="0"
                            max="1"
                            step="any"
                            className="slider"
                            id="volumeRangeInput"
                        />
                    </VolumeTrackBack>
                </ControlsArea>
            </div>
        </ControlsContainer>
    )
}
