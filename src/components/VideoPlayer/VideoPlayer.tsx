import { sideBoxA, VideoContainer } from './VideoPlayer.styles'
import { useGetVideoConfiguration } from 'hooks/useGetVideoConfiguration'
import { VideoCanvas } from './VideoCanvas'
import { useParams } from 'react-router-dom'

export const VideoPlayer = () => {
    let { video_name } = useParams()
    const { isLoading, isError, data } = useGetVideoConfiguration(video_name ?? '')

    if (isLoading || isError) {
        return <div>Loading...</div>
    }

    const {
        src,
        poster,
        shapeMap,
        autoplay,
        id: ident,
        muted,
        keepAsPlayback,
        decisionColor,
        decisions,
    } = data

    return (
        <VideoContainer data-vjs-player>
            <VideoCanvas
                src={src}
                ident={ident}
                poster={poster}
                classStyles={sideBoxA()}
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
