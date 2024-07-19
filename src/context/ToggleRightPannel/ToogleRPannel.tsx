import { PropsWithChildren, createContext, FunctionComponent, useContext } from 'react'
import { APP_PATH } from 'models'

export type ToggleContextType = {
    isPannelOpen: Record<APP_PATH, boolean>
    openPanel: (item: APP_PATH) => void
    closePanel: (item: APP_PATH) => void
    togglePanel: (item: APP_PATH) => void
}

export const TogglePannelContext = createContext<ToggleContextType | undefined>(undefined)

export const TogglePannelContextProvider: FunctionComponent<
    PropsWithChildren & { toogleSystem: ToggleContextType }
> = ({ children, toogleSystem }) => {
    return (
        <TogglePannelContext.Provider value={toogleSystem}>{children}</TogglePannelContext.Provider>
    )
}

export const useTogglePannelContext = () => {
    const context = useContext(TogglePannelContext)

    if (context === undefined) {
        throw new Error('useTogglePannelContext must be used within a TogglePannelContextProvider')
    }

    return context
}
