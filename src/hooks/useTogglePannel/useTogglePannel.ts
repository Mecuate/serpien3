import { APP_PATH } from 'models'
import { useState } from 'react'

const initialRecords: Record<APP_PATH, boolean> = {
    [APP_PATH.ROOT]: false,
    [APP_PATH.MENU]: false,
    [APP_PATH.HOME]: false,
    [APP_PATH.LANDING]: true,
    [APP_PATH.VIDEO]: false,
    [APP_PATH.DECISION]: false,
    [APP_PATH.INFORMATIVE]: false,
    [APP_PATH.INTERACTIVE]: false,
}

export const useTogglePannel = () => {
    const [isPannelOpen, setPannelOpen] = useState(initialRecords)

    const openPanel = (item: APP_PATH) => {
        setPannelOpen({ ...isPannelOpen, [item]: true })
    }

    const closePanel = (item: APP_PATH) => {
        setPannelOpen({ ...isPannelOpen, [item]: false })
    }

    const togglePanel = (item: APP_PATH) => {
        setPannelOpen({ ...isPannelOpen, [item]: !isPannelOpen[item] })
    }

    return {
        isPannelOpen,
        openPanel,
        closePanel,
        togglePanel,
    }
}
