import { PropsWithChildren, createContext, FunctionComponent, useContext, useRef } from 'react'
import { AudioFXContextType } from './AudioFXContextType.model'
import { useLocalStorageContext } from 'context/LocalStorageContext'
import { LocalSItem } from 'hooks/useLocalStorage'

export const AudioFXContext = createContext<AudioFXContextType | undefined>(undefined)

export const AudioFXContextProvider: FunctionComponent<PropsWithChildren> = ({
    children,
}) => {
    const storageSystem = useLocalStorageContext()
    const audioBackgroundRef = useRef<HTMLAudioElement | null>(null)

    const saveStatus = () => {
        storageSystem.setItem(LocalSItem.SFX_status, { adv: audioBackgroundRef.current?.paused })
    }

    const SFX:AudioFXContextType = {
        audioBackgroundRef: audioBackgroundRef,
        saveStatus,
    }

    return (
        <AudioFXContext.Provider value={SFX}>
            <audio ref={audioBackgroundRef} id="background_audio" loop autoPlay muted>
                <source src="/fs1.mp3" type="audio/mpeg" />
            </audio>
            {children}
        </AudioFXContext.Provider>
    )
}

export const useAudioFXContext = () => {
    const context = useContext(AudioFXContext)

    if (context === undefined) {
        throw new Error('useAudioFXContext must be used within a AudioFXContextProvider')
    }

    return context
}
