import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'
import { VideoPlayer } from 'components/VideoPlayer'

import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'
const mockData = {
    root: {
        src: '/nude.mp4',
        poster: '/vid_1.jpg',
        id: 'eeeee',
        decisions: [
            {
                id: 'desicion_001',
                start: 32000,
                end: 38000,
                slow: true,
                duration: 42,
            },
            {
                id: 'desicion_002',
                start: 4650,
                end: 10000,
                slow: true,
                duration: 44,
            },
            {
                id: 'desicion_003',
                start: 90000,
                end: 98000,
                slow: true,
                duration: 42,
            },
        ],
    },
    next: {
        [0]: {
            src: '/vid_B.mp4',
            poster: '/vid_2.jpg',
            id: 'aaaaa',
        },
        [1]: {
            src: '/vid_C.mp4',
            poster: '/vid_3.jpg',
            id: 'bbbbb',
        },
    },
}

export const VideoScreen = () => {
    const { t } = useTranslation()

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
                <VideoPlayer
                    src={mockData.root.src}
                    poster={mockData.root.poster}
                    decisions={mockData.root.decisions}
                    autoplay={true}
                    ident={mockData.root.id}
                />
            </div>
        </Screen>
    )
}
