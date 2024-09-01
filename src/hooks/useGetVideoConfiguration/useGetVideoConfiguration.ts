import { sideBoxA } from 'components/VideoPlayer/VideoPlayer.styles'
import { useNetwork } from 'context/NetworkContext'
import { videoMockData } from 'fixtures/videoData'
import { useState } from 'react'

export const useGetVideoConfiguration = (userLocation?: string) => {
    const { nodesAPI } = useNetwork()
    const [isLoading, setIsLoading] = useState(false)

    const [isError, setIsError] = useState(!Boolean(userLocation))

    const req = nodesAPI.getNode({ name: userLocation?.replace('.mp4', '.json') ?? 'inicio.json' })
    console.log(req)

    if (!userLocation) {
        setIsError(true)
    }
    const {
        // src,
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
        src: 'http://localhost:6080/oso/pub/vid/04872bb3-fcab-44b6-9b54-d849184a8239/inicio.mp4',
        isLoading,
        isError,
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
