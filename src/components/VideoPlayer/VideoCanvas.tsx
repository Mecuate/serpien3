import { createRef, useCallback, useEffect, useMemo, useState } from 'react'
import { MaskTitle, StandByVideoContainer, Video } from './VideoPlayer.styles'
import { usePlayerDecisions } from 'hooks/usePlayerDecisions'
import { DecisionType } from 'models/video'
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
    const videoRef = useMemo(() => createRef<HTMLVideoElement>(), [])
    const { player, videoHasEnded, isPlaying, tooglePlay } = useVideoJS(videoRef, {
        controls: true,
        preload: 'auto',
        responsive: true,
        autoplay: keepAsPlayback ? false : autoplay,
    })
    const [showMeta, setShowMeta] = useState(false)
    const {
        stopForDecision,
        pausedTime,
        timeLineVal,
        playRate,
        intData,
        currentID,
        currentDecision,
        resumePlay,
        isResumable,
    } = usePlayerDecisions({
        videoRef,
        player,
        decisions,
        videoHasEnded,
        isPlaying,
        tooglePlay,
    })

    const handleResumePlay = useCallback(() => {
        resumePlay()
    }, [showMeta, setShowMeta])

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
                autoPlay={keepAsPlayback ? false : autoplay}
                disablePictureInPicture
            >
                <source src={src} type="video/mp4" />
            </Video>

            <MaskTitle pos={stopForDecision}>
                <DecisionCanvas
                    resumePlay={handleResumePlay}
                    decisions={decisions}
                    currentDecision={currentDecision}
                    decisionColor={decisionColor}
                    shapeMap={shapeMap}
                    pausedTime={currentDecision.duration - pausedTime}
                />
            </MaskTitle>

            {showMeta && (
                <pre
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        padding: '1rem',
                        color: '#ffffff90',
                        zIndex: 10000,
                    }}
                >
                    {JSON.stringify(
                        {
                            stopForDecision,
                            pausedTime,
                            timeLineVal,
                            playRate,
                            intData,
                            currentID,
                            currentDecision,
                            resumePlay,
                            isResumable,
                        },
                        null,
                        2
                    )}
                </pre>
            )}
        </StandByVideoContainer>
    )
}
