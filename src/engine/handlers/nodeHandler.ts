import { DataRootURL } from 'engine/network'
import { NodeHandlerType } from 'models/networkAPI.nodes'
import { API_INSTANCE } from 'config'

export const nodeHandler: NodeHandlerType = {
    getNode: ({ name }) => DataRootURL.get(`/pub/asset/${API_INSTANCE}/${name}`, {}),
}
