import { createRef, useCallback, useEffect, useMemo, useState } from 'react'
import { StandByVideoContainer, Video } from './VideoPlayer.styles'
import { usePlayerDecisions } from 'hooks/usePlayerDecisions'
import { DecisionType } from 'models/video'
import { useAudioFXContext } from 'context/AudioFXContext/AudioFXController'
import { useVideoJS } from 'hooks/useVideoJS'

type VideoCanvasProps = {
    decisions: DecisionType[]
    classStyles: string
    ident: string
    src: string
    poster: string
    muted: boolean
    keepAsPlayback: boolean
}
const playerOptions = {
    controls: true,
    // autoplay: true,
    autoplay: false,
    preload: 'auto',
    // fluid: true,
    responsive: true,
}

export const VideoCanvas = ({
    classStyles,
    ident,
    src,
    poster,
    muted,
    keepAsPlayback,
    decisions,
}: VideoCanvasProps) => {
    const videoRef = useMemo(() => createRef<HTMLVideoElement>(), [])
    const { player, videoHasEnded, isPlaying, tooglePlay } = useVideoJS(videoRef, playerOptions)
    const [showMeta, setShowMeta] = useState(false)
        // const { stopForDecision, pausedTime, playRate, timeLineVal }
    const plyDesc = usePlayerDecisions({
        videoRef,
        player,
        decisions,
        videoHasEnded,
        isPlaying,
    })

    const displayMeta = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'i') {
                setShowMeta((prev) => !prev)
            }
        },
        [showMeta, setShowMeta]
    )

    useEffect(() => {
        window.addEventListener('keyup', displayMeta, false)

        return () => {
            window.removeEventListener('keyup', displayMeta, false)
        }
    }, [])

    return (
        <StandByVideoContainer className={classStyles}>
            <Video
                ref={videoRef}
                onClick={tooglePlay}
                id={ident}
                className="video-js"
                poster={poster}
                muted={muted}
                disablePictureInPicture
            >
                <source src={src} type="video/mp4" />
            </Video>

            {!showMeta ? (
                <>
                <pre
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        padding: '1rem',
                        color: '#ffffff90',
                        zIndex: 1000,
                    }}
                    >
                    {JSON.stringify(plyDesc, null, 2)}
                </pre>
                <span style={{
                        width: '250px' ,
                        height: '250px' ,
                        position: 'absolute' ,
                        zIndex: '1000' ,
                        top: '139px' ,
                        border: '15px solid greenyellow' ,
                        display: 'flex' ,
                        flexDirection: 'column' ,
                }}>

                <button onClick={() => {plyDesc.speedTo(1)}}>speed 1</button>
                <button onClick={() => {plyDesc.speedTo(0.9)}}>speed 0.9</button>
                <button onClick={() => {plyDesc.speedTo(0.8)}}>speed 0.8</button>
                <button onClick={() => {plyDesc.speedTo(0.7)}}>speed 0.7</button>
                <button onClick={() => {plyDesc.speedTo(0.6)}}>speed 0.6</button>
                <button onClick={() => {plyDesc.speedTo(0.5)}}>speed 0.5</button>
                <button onClick={() => {plyDesc.speedTo(0.4)}}>speed 0.4</button>
                <button onClick={() => {plyDesc.speedTo(0.3)}}>speed 0.3</button>
                <button onClick={() => {plyDesc.speedTo(0.2)}}>speed 0.2</button>
                <button onClick={() => {plyDesc.speedTo(0.1)}}>speed 0.1</button>
                </span>
                    </>
            ) : null}
        </StandByVideoContainer>
    )
}
