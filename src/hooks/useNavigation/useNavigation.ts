import { APP_PATH } from 'models'
import { DocuwebPaths, registry } from './navigationRegistry'

export const useNavigation = () => {
    const goTo = (index: DocuwebPaths) => {
        const path = registry[index]
        switch (path.base) {
            case APP_PATH.VIDEO:
                return path.base.replace(':video_name', path.path)
            default:
                return APP_PATH.ROOT
        }
    }

    return { goTo }
}
