import { ComponentProps } from 'react'
import { MenuPannelRoot } from './MenuPannel.styles'
import { RootNavigator } from 'flows/Root/RootNavigator'

type MenuPannelOwnProps = ComponentProps<typeof MenuPannelRoot>
export type MenuPannelProps = MenuPannelOwnProps & {}

export const MenuPannel = ({}: MenuPannelProps) => {
    return (
        <MenuPannelRoot>
            <RootNavigator />
        </MenuPannelRoot>
    )
}
