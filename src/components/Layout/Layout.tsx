import { ComponentProps } from 'react'
import { LayoutContainer, MainRoot } from './Layout.styles'
import { MenuPannel } from 'components/MenuPannel'

type LayoutOwnProps = ComponentProps<typeof LayoutContainer>
export type LayoutProps = LayoutOwnProps & {
    _name_?: string
}

export const Layout = ({}: LayoutProps) => {
    return (
        <LayoutContainer>
            <MainRoot>
                <MenuPannel />
            </MainRoot>
        </LayoutContainer>
    )
}
