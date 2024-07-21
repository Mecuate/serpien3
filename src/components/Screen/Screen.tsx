import { PropsWithChildren } from 'react'
import { ScreenContainer, ScrollableContainer } from './Screen.styles'
import { APP_PATH } from 'models'

type ScreenProps = PropsWithChildren & {
    pannel: APP_PATH
    isScrollable?: boolean
    id?: string
}

export const Screen = ({ children, pannel, isScrollable, id }: ScreenProps) => {
    return isScrollable ? (
        <ScreenContainer id={id} data-screenname={pannel}>
            <ScrollableContainer>{children}</ScrollableContainer>
        </ScreenContainer>
    ) : (
        <ScreenContainer id={id} data-screenname={pannel}>
            {children}
        </ScreenContainer>
    )
}

Screen.displayName = 'Screen'
