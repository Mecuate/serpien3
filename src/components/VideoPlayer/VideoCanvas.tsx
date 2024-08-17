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

            {showMeta && (
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
            )}
        </StandByVideoContainer>
    )
}
