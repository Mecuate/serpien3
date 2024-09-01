import { API_INSTANCE } from 'config'
import { MediaRootURL } from 'engine/network'
import { FileHandlerType } from 'models/networkAPI.files'

export const fileHandler: FileHandlerType = {
    getFilm: ({ name }) =>
        MediaRootURL.get(`/pub/vid/${API_INSTANCE}/${name}`, {}),
    getImage: ({ name }) =>
        MediaRootURL.get(`/pub/vid/${API_INSTANCE}/${name}`, {}),
}
