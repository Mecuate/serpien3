import { Typography } from 'components/Typography'
import {
    ControlsArea,
    MaskTitle,
    Video,
    VideoContainer,
    VideoControlsContainer,
    VideoControlsStyleClass,
} from './VideoPlayer.styles'
import { useTranslation } from 'hooks/useTranslations'
import { useCallback, useEffect, useRef, useState } from 'react'
import { GenericObject } from 'models'
import { VideoControlsUI } from './VideoControls'

export const VideoPlayer = ({ src, poster, controls, autoPlay, loop, muted, playsInline }: any) => {
    const { t } = useTranslation()
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [shouldFadeOut, setShouldFadeOut] = useState(false)
    const [controlsMark, setControlsMark] = useState<GenericObject>({
        width: '100%',
        height: '100%',
    })
    const [isPlaying, setIsPlaying] = useState(true)

    let timeUpdaterFunc: NodeJS.Timeout
    console.log('VideoPlayer',isPlaying)

    
    const playVid = () => {
        timeUpdaterFunc = setInterval(timeUpdate, 72)
        videoRef.current?.play()
        setIsPlaying(true)
    }
    const pause = () => {
        clearInterval(timeUpdaterFunc)
        videoRef.current?.pause()
        setIsPlaying(false)
    }
    const rewind = () => {}
    const forward = () => {}
    const fullScreen = () => {
        console.log('fullScreen')
    }

    const fadeIn: React.MouseEventHandler<HTMLDivElement> = (e) => {
        setShouldFadeOut(true)
    }
    const fadeOut: React.MouseEventHandler<HTMLDivElement> = (e) => {
        setTimeout(() => {
            setShouldFadeOut(false)
        }, 7000)
    }
    const [timeLineVal, setTimeLineVal] = useState(0)
    const switchClass = useCallback(() => {
        return shouldFadeOut ? VideoControlsStyleClass() : undefined
    }, [shouldFadeOut])

    const timeUpdate = () => {
        const val = parseFloat((videoRef.current?.currentTime ?? 0).toFixed(2))
        setTimeLineVal(val)
    }

    useEffect(() => {
        timeUpdaterFunc = setInterval(timeUpdate, 72)
        return () => {
            clearInterval(timeUpdaterFunc)
        }
    }, [])

    useEffect(() => {
        const __v = videoRef.current?.getBoundingClientRect()
        const videoWidth = videoRef.current?.clientWidth ?? 1920
        const videoHeight = videoRef.current?.clientHeight ?? 1080
        const H = __v?.height ?? 1080
        const evWidth = Math.floor((H * videoWidth) / videoHeight)

        setControlsMark({ width: evWidth, height: 'auto' })

        return () => {
            console.log('VideoPlayer unmounted')
        }
    }, [])

    return (
        <VideoContainer>
            <MaskTitle>
                <div>Video samples</div>
                <Typography.Subtitle>
                    {t('video:titles.videoName', { name: 'sample_1' })}
                </Typography.Subtitle>

                <Typography.Regular>
                    {t('video:titles.length', { length: 15664555 })}
                </Typography.Regular>
            </MaskTitle>
            <Video
                ref={videoRef}
                id="main_video_area"
                poster={poster}
                autoPlay={isPlaying}
                loop
                muted={false}
                playsInline={true}
            >
                <source src="/sample_4.mp4" type="video/mp4" />
            </Video>

            <VideoControlsContainer>
                <ControlsArea
                    onMouseEnter={fadeIn}
                    onMouseLeave={fadeOut}
                    style={controlsMark}
                    className={switchClass()}
                >
                    {/* <button onClick={playVid}>
                        <i className="fa fa-playVid">PLAY</i>
                    </button>
                    <button onClick={pause}>
                        <i className="fa fa-playVid">PAUSE</i>
                    </button> */}
                    <VideoControlsUI
                        width={controlsMark.width}
                        timeLineVal={timeLineVal}
                        duration={videoRef.current?.duration ?? 0}
                        isPlaying={isPlaying}
                        funcs={{ playVid, pause, rewind, forward, fullScreen }}
                    />
                </ControlsArea>
            </VideoControlsContainer>
        </VideoContainer>
    )
}
/* 



<button onClick={rewind}>
    <i className="fa fa-fast-backward">REWIND</i>
</button>
<div className="timeline">
    <div className="bar">
        <div className="inner">-----------------------</div>
    </div>
</div>
<button onClick={forward}>
    <i className="fa fa-fast-forward">FORWARD</i>
</button>
<button onClick={fullScreen}>
    <i className="fa fa-expand">FULL_SCREEN</i>
</button>
<button onClick={__download}>
    <i className="fa fa-cloud-download">DOWNLOAD</i>
</button>
*/
