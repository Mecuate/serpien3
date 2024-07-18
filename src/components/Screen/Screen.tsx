import { PropsWithChildren } from 'react'
import {
    ScreenContainer,
    ScrollableContainer,
    ScreenContentContainer,
    Board,
    LeftContainer,
    LeftTitle,
    SearchContainer,
    BoardContent,
    SideContainer,
    ToggleButtonContainer,
} from './Screen.styles'
import { Typography } from 'components/Typography'
import { SearchBar } from 'components/SearchBar'
import { Button } from 'components/Button'
import { useTogglePannelContext } from 'context/ToggleRightPannel/ToogleRPannel'
import { PANNELS } from 'hooks/useTogglePannel/useTogglePannel'

type ScreenProps = PropsWithChildren & {
    pannel: PANNELS
    id?: string
}

type LeftPannelProps = PropsWithChildren & {
    title: string
    id?: string
}

export const Screen = ({ children, pannel, id }: ScreenProps) => {
    const { isPannelOpen } = useTogglePannelContext()
    const pannelSize =
        pannel === PANNELS.UPLOADS && isPannelOpen[pannel]
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

export const ScreenContent = ({ children, id }: ScreenProps) => {
    return <ScreenContentContainer id={id}>{children}</ScreenContentContainer>
}

export const SidePannel = ({ children, pannel, id }: ScreenProps) => {
    const { isPannelOpen, togglePanel } = useTogglePannelContext()
    const pannelSize =
        pannel === PANNELS.UPLOADS && isPannelOpen[pannel]
            ? 'bigger'
            : isPannelOpen[pannel]
            ? 'open'
            : 'closed'
    return (
        <SideContainer id={id} variant={pannelSize}>
            <ToggleButtonContainer>
                <Button.ClearIcon
                    icon={isPannelOpen[pannel] ? 'expand-right' : 'expand-left'}
                    action={() => togglePanel(pannel)}
                />
            </ToggleButtonContainer>
            {isPannelOpen[pannel] && children}
        </SideContainer>
    )
}

export const LeftSidePanel = ({ children, title, id }: LeftPannelProps) => {
    return (
        <LeftContainer>
            <Board id={id ?? ''}>
                <LeftTitle>
                    <Typography.Title>{title}</Typography.Title>
                </LeftTitle>
                <SearchContainer>
                    <SearchBar section="left" />
                </SearchContainer>
                <BoardContent>{children}</BoardContent>
            </Board>
        </LeftContainer>
    )
}

Screen.displayName = 'Screen'