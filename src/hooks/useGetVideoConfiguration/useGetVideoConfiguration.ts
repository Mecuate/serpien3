import { sideBoxA } from 'components/VideoPlayer/VideoPlayer.styles'
import { useState } from 'react'

const pattern = /.video\/(.*?).mp4/gi

export const useGetVideoConfiguration = () => {
    const userLocation = [...window.location.pathname.matchAll(pattern)][0][1] ?? ''
    const [isLoading, setIsLoading] = useState(true)

    const [isError, setIsError] = useState(Boolean(userLocation))

    console.log(userLocation)
    if (!userLocation) {
        setIsError(true)
    }

    const src = '/vid_1.mp4'
    const poster = '/vid_1.jpg'
    const decisions = [{ id: '1', start: 0, end: 0, slow: false, duration: 0 }]
    const autoplay = true
    const ident = '1'
    const muted = true
    const keepAsPlayback = false
    const classStyle = sideBoxA

    return {
        isLoading,
        isError,
        src,
        poster,
        decisions,
        autoplay,
        ident,
        muted,
        keepAsPlayback,
        classStyle,
    }
}
