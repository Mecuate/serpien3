import { IconNames } from 'components/Icon'
import { iKeyTranslations } from 'locales/translationKeys'

export enum APP_PATH {
    ROOT = '/',
    DASHBOARD = '/home',
    CONTENT = '/content',
    DB = '/database_schemas',
    ENDPOINTS = '/endpoints',
    UPLOAD = '/uploads',
    NODE_TREE = '/node_tree',
    LOGOUT = '/logout',
    USER_PAGE = '/user-config',
}

export type NavigationAppType = {
    name: iKeyTranslations
    path: APP_PATH
    icon: IconNames
}[]
