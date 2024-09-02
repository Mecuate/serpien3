import { Button } from 'components/Button'
import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'

import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'
import { Link } from 'react-router-dom'
import { useNavigation, DocuwebPaths } from 'hooks/useNavigation'
import { imageRepository } from 'sources/imageRepository'

export const NotFoundPage = () => {
    const { t } = useTranslation()
    const { goTo } = useNavigation()

    return (
        <Screen pannel={APP_PATH.E404}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '24px',
                    height: '100%',
                    width: '100%',
                    color: 'blueviolet',
                    backgroundImage: `url(${imageRepository['landing:landingPage.poster']})`,
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}
            >
                <span
                    style={{
                        padding: '24px',
                        paddingLeft: '64px',
                        paddingRight: '50%',
                        minWidth: '120px',
                        height: '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '48px',
                    }}
                >
                    <Typography.Boom>{'Not Found'}</Typography.Boom>
                    <Typography.Regular>{t('landing:welcomeMessage')}</Typography.Regular>
                    <Link
                        to={goTo(DocuwebPaths.FILM_0)}
                        onClick={(e: any) => {
                            console.log('clicked:: watch video', e)
                        }}
                    >
                        <Button.HTMLAction action={() => {}} text={t('landing:continue')} />
                    </Link>
                </span>
                <span
                    style={{
                        minWidth: '120px',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '32px',
                        paddingLeft: '18px',
                        paddingRight: '18px',
                    }}
                >
                    <span>
                        <Typography.Small>{'Mecuate Astrophytum 2024.'}</Typography.Small>
                    </span>
                </span>
            </div>
        </Screen>
    )
}
