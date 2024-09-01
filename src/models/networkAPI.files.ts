import { PaginationParams, UUID } from './networkAPI.common'

export type FileAssetRequest = {
    name: UUID | string
    query?: PaginationParams
}

export type FileHandlerType = {
    getFilm: (params: FileAssetRequest) => Promise<BinaryData>
    getImage: (params: FileAssetRequest) => Promise<BinaryData>
}
