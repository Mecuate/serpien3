import { GenericObject } from 'models'
import { useCallback, useEffect, useState } from 'react'

// @ts-ignore
const videojs = window.videojs

export const useVideoJS = (
    videoRef: React.RefObject<HTMLVideoElement | null>,
    options: GenericObject
) => {
    const [player, setPlayer] = useState<any>(null)
    const [videoHasEnded, setVideoHasEnded] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const tooglePlay = useCallback(() => {
        if (isPlaying) {
            player.pause()
            setIsPlaying(false)
            return
        }
        setIsPlaying(true)
        player.play()
    }, [player, isPlaying])

    useEffect(() => {
        if (videoRef.current) {
            setPlayer(videojs(videoRef.current, options))
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', () => {}, true)
                videoRef.current.removeEventListener('playing', () => {}, true)
            }
            if (player) player.dispose()
        }
    }, [videoRef])

    if (player) {
        player.on('ready', () => {
            if (videoRef.current) {
                videoRef.current.addEventListener(
                    'ended',
                    () => {
                        setVideoHasEnded(true)
                        setIsPlaying(false)
                    },
                    true
                )
                videoRef.current.addEventListener(
                    'playing',
                    () => {
                        setIsPlaying(true)
                    },
                    true
                )
            }
        })
    }

    return { player, videoHasEnded, isPlaying, tooglePlay }
}
