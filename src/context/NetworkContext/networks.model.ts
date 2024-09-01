import { NodeHandlerType } from 'models/networkAPI.nodes'
import { FileHandlerType } from 'models/networkAPI.files'

export type NetworkHandlers = {
    nodesAPI: NodeHandlerType
    filesAPI: FileHandlerType
}
