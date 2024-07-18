import { ComponentProps } from 'react'

import { ScreenRoot, Locator } from './Screen.styles'

type ScreenOwnProps = ComponentProps<typeof ScreenRoot>
export type ScreenProps = ScreenOwnProps & {
    _name_?: string
    isVisible?: boolean
}

export const Screen = ({ isVisible = false, _name_ = 'nil' }: ScreenProps) => {
    return (
        <ScreenRoot>
            <Locator>
                {_name_} {`${isVisible}_box`}
            </Locator>
        </ScreenRoot>
    )
}
