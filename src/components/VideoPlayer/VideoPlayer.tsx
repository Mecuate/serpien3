import { VideoContainer } from './VideoPlayer.styles'
import { useGetVideoConfiguration } from 'hooks/useGetVideoConfiguration'
import { VideoCanvas } from './VideoCanvas'
import { useParams } from 'react-router-dom';

export const VideoPlayer = () => {
    // const v1 = useRef<HTMLDivElement | null>(null)
    // const v2 = useRef<HTMLDivElement | null>(null)
    // const v3 = useRef<HTMLDivElement | null>(null)
    let { video_name } = useParams();
    const {
        isLoading,
        isError,
        src,
        poster,
        shapeMap,
        autoplay,
        ident,
        muted,
        keepAsPlayback,
        classStyle,
        decisionColor,
        decisions,
    } = useGetVideoConfiguration(video_name)

    if (isLoading || isError) {
        return <div>Loading...</div>
    }

    return (
        <VideoContainer data-vjs-player>
            <VideoCanvas
                src={src}
                ident={ident}
                poster={poster}
                classStyles={classStyle()}
                decisions={decisions}
                muted={muted}
                autoplay={autoplay}
                keepAsPlayback={keepAsPlayback}
                decisionColor={decisionColor}
                shapeMap={shapeMap}
            />
        </VideoContainer>
    )
}
