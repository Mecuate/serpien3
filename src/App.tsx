import { globalStyles } from './stitches.conf'
import { SectionCoordinatorProvider } from 'context/SectionCoordinator/SectionContextApp'
import { LocalStorageContextProvider } from 'context/LocalStorageContext'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { Layout } from 'components/Layout'
import { APINetworkProvider } from 'context/NetworkContext'
import { QueryClientProvider, QueryClient } from 'react-query'
import { useRef } from 'react'
import { networkHandlers } from 'context/NetworkContext/network.implementation'
import { AudioFXContextProvider } from 'context/AudioFXContext/AudioFXController'

function App() {
    const queryClient = useRef<QueryClient>()

    globalStyles()

    if (!queryClient.current) {
        queryClient.current = new QueryClient()
    }
    const storageSystem = useLocalStorage()

    return (
        <QueryClientProvider client={queryClient.current}>
            <APINetworkProvider handlers={networkHandlers}>
                <SectionCoordinatorProvider>
                    <LocalStorageContextProvider storageSystem={storageSystem}>
                        <AudioFXContextProvider>
                            <Layout />
                        </AudioFXContextProvider>
                    </LocalStorageContextProvider>
                </SectionCoordinatorProvider>
            </APINetworkProvider>
        </QueryClientProvider>
    )
}

export default App
