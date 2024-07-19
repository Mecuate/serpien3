import { PropsWithChildren } from 'react'
import { ScreenContainer, ScrollableContainer } from './Screen.styles'
import { useTogglePannelContext } from 'context/ToggleRightPannel/ToogleRPannel'
import { APP_PATH } from 'models'

type ScreenProps = PropsWithChildren & {
    pannel: APP_PATH
    id?: string
}

export const Screen = ({ children, pannel, id }: ScreenProps) => {
    const { isPannelOpen } = useTogglePannelContext()
    const pannelSize =
        pannel === APP_PATH.MENU && isPannelOpen[pannel]
            ? 'bigger'
            : isPannelOpen[pannel]
            ? 'open'
            : 'closed'

    return (
        <ScreenContainer id={id}>
            <ScrollableContainer variant={pannelSize}>{children}</ScrollableContainer>
        </ScreenContainer>
    )
}

Screen.displayName = 'Screen'
