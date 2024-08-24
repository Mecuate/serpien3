import { Screen } from 'components/Screen'
import { APP_PATH } from 'models'
import { VideoPlayer } from 'components/VideoPlayer'

export const VideoScreen = () => {
    return (
        <Screen pannel={APP_PATH.VIDEO}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    padding: 0,
                    height: '100%',
                    width: '100%',
                    color: 'white',
                }}
            >
            </div>
                <VideoPlayer />
        </Screen>
    )
}
