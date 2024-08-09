import { GenericObject } from 'models'
import { useCallback, useEffect, useState } from 'react'

export const useVideoWidth = (videoRef: React.MutableRefObject<HTMLVideoElement | null>) => {
    const [controlsMark, setControlsMark] = useState<GenericObject>({
        width: '100%',
        height: 'auto',
    })

    const evalExpectedWidth = useCallback(() => {
        const __v = videoRef.current?.getBoundingClientRect()
        const videoWidth = videoRef.current?.clientWidth ?? 1920
        const H = __v?.height ?? 1080

        const evWidth = Math.floor((H * videoWidth) / 1080) + 2

        setControlsMark({ width: evWidth })
    }, [])

    useEffect(() => {
        evalExpectedWidth()
        window.addEventListener('resize', evalExpectedWidth)
    }, [])

    return { controlsMark }
}
