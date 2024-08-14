import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'
import { VideoPlayer } from 'components/VideoPlayer'

import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'
const mockData = {
    root: {
        src: '/sample_1.mp4',
        poster: '/vid_1.jpg',
        id: 'eeeee',
        decisions: [
            {
                id: 'desicion_001',
                start: 116624,
                end: 18000,
                slow: true,
                duration: 12,
            },
            {
                id: 'desicion_002',
                start: 6624,
                end: 8000,
                slow: true,
                duration: 12,
            },
            {
                id: 'desicion_003',
                start: 852624,
                end: 53000,
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
                    color: 'blueviolet',
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
