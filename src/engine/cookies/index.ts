import { API_V1 } from 'config'
import { _cookie } from './cookies'

export const user = (() => {
    const user_cookie = _cookie.get('user')
    return user_cookie ?? {}
})()

export const mecuateUser = (() => {
    const user_cookie = _cookie.get('mct') as MCT_USER_COOKIE
    if (user_cookie) {
        return user_cookie
    } else {
        const new_cookie = {
            token: '',
            access_token: '',
            instance_name: API_V1,
            expiration: '',
            user_token: 'guest-token',
        }
        _cookie.create('mct', new_cookie)
        return new_cookie
    }
})()

type MCT_USER_COOKIE = {
    token?: string
    access_token: string
    instance_name: string
    expiration: string
    user_token: string
}
