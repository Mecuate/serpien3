import { Typography } from 'components/Typography'
import {
    MaskTitle,
    sideBoxA,
    sideBoxB,
    sideBoxC,
    StandByVideoContainer,
    Video,
    VideoContainer,
    VideoControlsContainer,
} from './VideoPlayer.styles'
import { useTranslation } from 'hooks/useTranslations'
import { useEffect, useRef, useState } from 'react'
import { usePlayerDecisions } from 'hooks/usePlayerDecisions'
import { VideoCanvas } from './VideoCanvas'
import { DecisionCanvas } from 'components/DecisionCanvas/DecisionCanvas'

type VideoPlayerProps = {
    src: string
    poster: string
    decisions: any[]
    autoplay: boolean
    ident: string
    keepAsPlayback?: boolean
}
export const VideoPlayer = ({
    src,
    poster,
    decisions,
    autoplay,
    ident,
    keepAsPlayback,
}: VideoPlayerProps) => {
    const { t } = useTranslation()
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const v1 = useRef<HTMLDivElement | null>(null)
    const v2 = useRef<HTMLDivElement | null>(null)
    const v3 = useRef<HTMLDivElement | null>(null)
    const audioBackgroundRef = useRef<HTMLAudioElement | null>(null)
    // const [player, setPlayer] = useState<any>(undefined)

    // const { stopForDecision, pausedTime, playRate, timeLineVal } = usePlayerDecisions({
    //     decisions,
    //     player,
    //     audioBackgroundRef,
    // })

    return (
        <VideoContainer data-vjs-player>
            <MaskTitle>
                <DecisionCanvas variant="h1" />
            </MaskTitle>

            <VideoCanvas
                src={src}
                ident={ident}
                muted={false}
                poster={poster}
                classStyles={sideBoxA()}
                keepAsPlayback={false}
                decisions={decisions}
            />

            {/* <Video
                // ref={videoRef}
                id={ident}
                className="video-js"
                poster={poster}
                muted={false}
                // autoPlay={autoplay}
                disablePictureInPicture
                loop
            >
                <source src={src} type="video/mp4" />
            </Video> */}

            {/* <StandByVideoContainer ref={v1} className={sideBoxA()}>
                <Video
                    id={ident + '1'}
                    className="video-js"
                    poster={poster}
                    muted={true}
                    autoPlay={false}
                    disablePictureInPicture
                    loop
                >
                    <source src="/sample_2.mp4" type="video/mp4" />
                </Video>
            </StandByVideoContainer>
            <StandByVideoContainer ref={v2} className={sideBoxB()}>
                <Video
                    id={ident + '2'}
                    className="video-js"
                    poster={poster}
                    muted={true}
                    autoPlay={false}
                    disablePictureInPicture
                    loop
                >
                    <source src="/sample_2.mp4" type="video/mp4" />
                </Video>
            </StandByVideoContainer>
            <StandByVideoContainer ref={v3} className={sideBoxC()}>
                <Video
                    id={ident + '3'}
                    className="video-js"
                    poster={poster}
                    muted={true}
                    autoPlay={false}
                    disablePictureInPicture
                    loop
                >
                    <source src="/sample_2.mp4" type="video/mp4" />
                </Video>
            </StandByVideoContainer> */}
        </VideoContainer>
    )
}
