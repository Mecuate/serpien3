import { GenericObject } from 'models'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { videojs } from './globalScript'

export const useVideoJS = (
    videoRef: React.RefObject<HTMLVideoElement | null>,
    options: GenericObject
) => {
    const player = useMemo<any>(() => {
        if (videoRef.current) {
            return videojs(videoRef.current, options)
        }
    }, [videoRef.current])
    const [videoHasEnded, setVideoHasEnded] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const tooglePlay = useCallback(
        (action?: 'stop' | 'play') => {
            if (action === 'stop') {
                player.pause()
                setIsPlaying(false)
                return
            }
            if (action === 'play') {
                setIsPlaying(true)
                player.play()
                return
            }
            if (isPlaying) {
                setIsPlaying(false)
                player.pause()
                return
            }
            setIsPlaying(true)
            player.play()
        },
        [player, isPlaying]
    )

    useEffect(() => {
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
