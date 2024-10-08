import { IconNames } from 'components/Icon'
import { iKeyTranslations } from 'locales/translationKeys'

export enum APP_PATH {
    ROOT = '/',
    MENU = '/menu',
    HOME = '/home/*',
    VIDEO = '/video/:video_name',
    DECISION = '/decision/:id',
    INTERACTIVE = '/interactive/:id',
    INFORMATIVE = '/informative/:id',
    E404 = '/404',
}

export type NavigationAppType = {
    name: iKeyTranslations
    path: APP_PATH
    icon?: IconNames
}[]
