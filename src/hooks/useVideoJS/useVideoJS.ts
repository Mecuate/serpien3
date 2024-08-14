import { GenericObject } from 'models'
import { useCallback, useEffect, useMemo, useState } from 'react'

// @ts-ignore
const videojs = window.videojs
let only1l00p = false
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

    const tooglePlay = useCallback(() => {
        if (only1l00p) {
            console.log('only1l00p', Date.now())
            return
        }

        if (isPlaying) {
            only1l00p = true
            player.pause()
            setIsPlaying(false)
            setTimeout(() => {
                only1l00p = false
            }, 90)
            return
        }
        setIsPlaying(true)
        player.play()
    }, [player, isPlaying])

    useEffect(() => {
        // if (videoRef.current) {
        //     videojs(videoRef.current, options)
        // }

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
