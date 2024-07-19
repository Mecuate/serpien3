import { IconNames } from 'components/Icon'
import { iKeyTranslations } from 'locales/translationKeys'

export enum APP_PATH {
    ROOT = '/',
    MENU = '/menu',
    HOME = '/home/*',
    LANDING = '/landing',
    VIDEO = '/video/*',
    DECISION = '/decision/*',
    INTERACTIVE = '/interactive/*',
    INFORMATIVE = '/informative/*',
}

export type NavigationAppType = {
    name: iKeyTranslations
    path: APP_PATH
    icon: IconNames
}[]
