import { createRef, useCallback, useEffect, useMemo, useState } from 'react'
import { MaskTitle, StandByVideoContainer, Video } from './VideoPlayer.styles'
import { usePlayerDecisions } from 'hooks/usePlayerDecisions'
import { DecisionType } from 'models/video'
import { useAudioFXContext } from 'context/AudioFXContext/AudioFXController'
import { useVideoJS } from 'hooks/useVideoJS'
import { DecisionCanvas, DESCOLOR } from 'components/DecisionCanvas/DecisionCanvas'
import { MShapeMAP } from 'components/DecisionCanvas/dataCollections'

type VideoCanvasProps = {
    decisions: DecisionType[]
    classStyles: string
    ident: string
    src: string
    poster: string
    muted?: boolean
    autoplay?: boolean
    keepAsPlayback?: boolean
    decisionColor: DESCOLOR
    shapeMap: MShapeMAP
}

export const VideoCanvas = ({
    classStyles,
    ident,
    src,
    poster,
    muted,
    keepAsPlayback,
    autoplay = false,
    decisionColor = DESCOLOR.COLD,
    shapeMap = MShapeMAP.AARAT,
    decisions,
}: VideoCanvasProps) => {
    const [autoPlayable, setAutoPLayable] = useState(keepAsPlayback ? false : autoplay)

    const videoRef = useMemo(() => createRef<HTMLVideoElement>(), [])
    const { player, videoHasEnded, isPlaying, tooglePlay } = useVideoJS(videoRef, {
        controls: true,
        preload: 'auto',
        responsive: true,
        autoplay: autoPlayable,
    })
    const [showMeta, setShowMeta] = useState(false)
    const plyDesc = usePlayerDecisions({
        videoRef,
        player,
        decisions,
        videoHasEnded,
        isPlaying,
        tooglePlay,
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
                onClick={() => tooglePlay()}
                id={ident}
                className="video-js html5-video-player"
                poster={poster}
                muted={muted}
                autoPlay={autoPlayable}
                disablePictureInPicture
            >
                <source src={src} type="video/mp4" />
            </Video>

            {plyDesc.stopForDecision && (
                <MaskTitle>
                    <DecisionCanvas decisions={decisions} decisionColor={decisionColor} shapeMap={shapeMap} />
                </MaskTitle>
            )}

            {!showMeta && (
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
