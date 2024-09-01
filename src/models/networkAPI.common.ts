import { uuid } from './generic'

export type UUID = uuid

export type PaginationParams = {
    start?: number
    limit?: number
    order?: string
}
