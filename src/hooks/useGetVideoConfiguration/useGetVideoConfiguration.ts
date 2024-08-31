import { sideBoxA } from 'components/VideoPlayer/VideoPlayer.styles'
import { videoMockData } from 'fixtures/videoData'
import { useState } from 'react'

export const useGetVideoConfiguration = (userLocation?: string) => {
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
