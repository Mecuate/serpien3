import { UUID } from './networkAPI.common'
import { VideoDataType } from './video'

export type NodeResponse = {
    data: VideoDataType
    jsRef: string
}[]

export type NodeRequest = {
    name: UUID | string
}

export type NodeHandlerType = {
    getNode: (params: NodeRequest) => Promise<NodeResponse>
}
