import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'
import { VideoPlayer } from 'components/VideoPlayer'

import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'

export const VideoScreen = () => {
    const { t } = useTranslation()

    return (
        <Screen pannel={APP_PATH.VIDEO}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    height: '100%',
                    width: '100%',
                    color: 'blueviolet',
                }}
            >
                <VideoPlayer />
            </div>
        </Screen>
    )
}
