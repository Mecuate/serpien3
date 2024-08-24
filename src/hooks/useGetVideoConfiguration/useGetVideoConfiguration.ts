import { sideBoxA } from 'components/VideoPlayer/VideoPlayer.styles'
import { videoMockData } from 'fixtures/videoData'
import { useState } from 'react'

const pattern = /.video\/(.*?).mp4/gi

export const useGetVideoConfiguration = () => {
    const userLocation = [...window.location.pathname.matchAll(pattern)][0][1] ?? ''
    const [isLoading, setIsLoading] = useState(false)

    const [isError, setIsError] = useState(!Boolean(userLocation))

    console.log(userLocation)
    if (!userLocation) {
        setIsError(true)
    }
    const {
        src,
        poster,
        id: ident,
        shapeMap,
        decisionColor,
        autoplay,
        muted,
        keepAsPlayback,
        decisions,
    } = videoMockData.root

    const classStyle = sideBoxA

    return {
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
    }
}
