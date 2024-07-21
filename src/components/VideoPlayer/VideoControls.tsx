import { useCallback, useEffect, useRef, useState } from 'react'
import { PlayerUISVG } from '../../assets/source/svg'
import { VC_GUI, VCIDs } from './utils'
import { VideoControlsSVGStyles } from './VideoPlayer.styles'

type FuncsTypesCallbacks = {
    playVid: () => void
    pause: () => void
    rewind: () => void
    forward: () => void
    fullScreen: () => void
}

type VideoControlProps = {
    width: number
    timeLineVal: number
    duration: number
    funcs: FuncsTypesCallbacks
    isPlaying: boolean
}

const getRefElement = (id: string) => document.getElementById(id)

function findYGivenX(x: number) {
    const [a, b, c] = [-0.000017701525054466233, 0.03815359477124183, 172]
    return a * x * x + b * x + c
}

let whatVal = 100

export const VideoControlsUI = ({
    width,
    timeLineVal,
    duration,
    funcs,
    isPlaying,
}: VideoControlProps) => {
    VideoControlsSVGStyles()
    const timeline = useRef<HTMLElement | null>(null)
    const timePointer = useRef<HTMLElement | null>(null)
    const playButton = useRef<HTMLElement | null>(null)
    const pauseButton = useRef<HTMLElement | null>(null)
    const { playVid, pause, rewind, forward, fullScreen } = funcs

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
    }, [timeLineVal])

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

    useEffect(() => {
        if (!playButton.current) {
            console.log('useEffect playButton')
            playButton.current = getRefElement(VCIDs.BUTTON_PLAY)
            if (playButton.current) {
                playButton.current.addEventListener('click', handlePlay, true)
            }
        }
        if (!pauseButton.current) {
            console.log('useEffect pauseButton')
            pauseButton.current = getRefElement(VCIDs.BUTTON_PAUSE)
            if (pauseButton.current) {
                pauseButton.current?.addEventListener('click', (e) => handlePause(), true)
            }
        }
        if (playButton.current && pauseButton.current) {
            playButton.current.style.display = 'none'
            pauseButton.current.style.display = 'block'
            getRefElement(VC_GUI.PLAY)?.classList.add('hide')
            getRefElement(VC_GUI.PAUSE)?.classList.remove('hide')
        }
    }, [])

    return (
        <div className="video-controls">
            <PlayerUISVG />
        </div>
    )
}
