import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'
import { Container } from './Dashboard.styles'
import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'

export const Dashboard = () => {
    const { t } = useTranslation()
    const title = t('common:menu.home')

    return (
        <Screen pannel={APP_PATH.HOME}>
            <Container>
                <Typography.Boom>{`Typography.Boom: ${title}`}</Typography.Boom>
                <Typography.Title>{`Typography.Title: ${title}`}</Typography.Title>
                <Typography.Subtitle>{`Typography.Subtitle: ${title}`}</Typography.Subtitle>
                <Typography.Big>{`Typography.Big: ${title}`}</Typography.Big>
                <Typography.Header>{`Typography.Header: ${title}`}</Typography.Header>
                <Typography.Heavy>{`Typography.Heavy: ${title}`}</Typography.Heavy>
                <Typography.Regular>{`Typography.Regular: ${title}`}</Typography.Regular>
                <Typography.Short>{`Typography.Short: ${title}`}</Typography.Short>
                <Typography.Small>{`Typography.Small: ${title}`}</Typography.Small>
                <hr />
            </Container>
        </Screen>
    )
}
