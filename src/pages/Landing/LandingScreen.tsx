import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'

import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'

export const LandingScreen = () => {
    const { t } = useTranslation()
    const title = t('common:menu.home')

    return (
        <Screen pannel={APP_PATH.LANDING}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    height: '100%',
                    width: '100%',
                    color: 'blueviolet',
                }}
            >
                <div>landing page</div>
                <Typography.Boom>{`Typography.Boom: ${title}`}</Typography.Boom>
                <Typography.Title>{`Typography.Title: ${title}`}</Typography.Title>
                <Typography.Subtitle>{`Typography.Subtitle: ${title}`}</Typography.Subtitle>
                <Typography.Big>{`Typography.Big: ${title}`}</Typography.Big>
                <Typography.Header>{`Typography.Header: ${title}`}</Typography.Header>
                <Typography.Heavy>{`Typography.Heavy: ${title}`}</Typography.Heavy>
                <Typography.Regular>{`Typography.Regular: ${title}`}</Typography.Regular>
                <Typography.Short>{`Typography.Short: ${title}`}</Typography.Short>
                <Typography.Small>{`Typography.Small: ${title}`}</Typography.Small>
            </div>
        </Screen>
    )
}
