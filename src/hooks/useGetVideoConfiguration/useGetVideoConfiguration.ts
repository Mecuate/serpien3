import { useNetwork } from 'context/NetworkContext'
import { videoMockData } from 'fixtures/videoData'
import { VideoDataType } from 'models/video'
import { useEffect, useState } from 'react'


export const useGetVideoConfiguration = (userLocation: string) => {
    const { nodesAPI } = useNetwork()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(!Boolean(userLocation))
    const [videoData, setVideoData] = useState<VideoDataType>(videoMockData)

    useEffect(() => {
        nodesAPI
            .getNode({ name: userLocation.replace('.mp4', '.json') ?? 'inicio.json' })
            .then((res: any) => {
                setVideoData(res.root)
                setIsLoading(false)
                setIsError(false)
            })
            .catch((e: Error) => {
                console.log(e)
                setIsLoading(false)
                setIsError(false)
            })

        return () => {}
    }, [userLocation])

    return {
        isLoading,
        isError,
        data: videoData,
    }
}
