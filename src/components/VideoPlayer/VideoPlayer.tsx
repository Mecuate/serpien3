import { VideoContainer } from './VideoPlayer.styles'
import { useGetVideoConfiguration } from 'hooks/useGetVideoConfiguration'
import { VideoCanvas } from './VideoCanvas'

export const VideoPlayer = () => {
    // const v1 = useRef<HTMLDivElement | null>(null)
    // const v2 = useRef<HTMLDivElement | null>(null)
    // const v3 = useRef<HTMLDivElement | null>(null)
    const { src, poster, decisions, autoplay, ident, muted, keepAsPlayback, classStyle } =
        useGetVideoConfiguration()

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
            />
        </VideoContainer>
    )
}
