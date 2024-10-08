import { Button } from 'components/Button'
import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'
import { Image } from 'components/Image'

import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'
import { Link } from 'react-router-dom'
import { useNavigation, DocuwebPaths } from 'hooks/useNavigation'
import { imageRepository } from 'sources/imageRepository'

export const LandingScreen = () => {
    const { t } = useTranslation()
    const { goTo } = useNavigation()

    return (
        <Screen pannel={APP_PATH.HOME}>
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
                    <Typography.Boom>{t('landing:docuwebTitle')}</Typography.Boom>
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
                    <span
                        style={{
                            minWidth: '120px',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography.Big>{t('landing:sponsorTitleA')}</Typography.Big>
                    </span>
                    <span
                        style={{
                            display: 'flex',
                            height: 'auto',
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignSelf: 'center',
                        }}
                    >
                        <Image src={'landing:landingPage.logoMecuate'} size={'M'} />
                        <Image src={'landing:landingPage.logoReptilia'} size={'M'} />
                        <Image src={'landing:landingPage.logoOlmec'} size={'M'} />
                        <Image src={'landing:landingPage.logoCultura'} size={'M'} />
                        <Image src={'landing:landingPage.logoProyectos'} size={'M'} />
                    </span>
                    <span>
                        <Typography.Small>{'Mecuate Astrophytum 2024.'}</Typography.Small>
                    </span>
                </span>
            </div>
        </Screen>
    )
}
