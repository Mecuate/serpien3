import { Button } from 'components/Button'
import { HexagonLoader } from 'components/HexagonLoader'
import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'
import { Image } from 'components/Image'

import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'
import { colors } from 'styles/colors'

export const LandingScreen = () => {
    const { t } = useTranslation()
    const title = t('common:menu.home')

    const myColors = Object.keys(colors)

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
                    backgroundImage: `url('/img/landing.jpg')`,
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    border: '1px solid orange',
                }}
            >
                <Typography.Boom>{t('landing:title')}</Typography.Boom>
                <Typography.Subtitle>{t('landing:title')}</Typography.Subtitle>

                <Typography.Regular>{`Typography.Regular: ${title}`}</Typography.Regular>

                <span
                    style={{
                        padding: '18px',
                        minWidth: '120px',
                        height: 'auto',
                        border: '1px solid orange',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '48px',
                    }}
                >
                    <Button.HTMLAction
                        action={() => {
                            console.log('clicked:: continue watching')
                        }}
                        text={t('landing:continue')}
                    />
                    <Button.HTMLAction
                        action={() => {
                            console.log('clicked:: continue watching')
                        }}
                        text={t('landing:credits')}
                    />
                </span>
                <span
                    style={{
                        padding: '18px',
                        minWidth: '120px',
                        height: 'auto',
                        border: '1px solid orange',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '48px',
                    }}
                >
                    <Image src={'landing:landingPage.logoMecuate'} size={'M'} />
                    <Image src={'landing:landingPage.logoReptilia'} size={'M'} />
                    <Image src={'landing:landingPage.logoOlmec'} size={'M'} />
                    <Image src={'landing:landingPage.logoCultura'} size={'M'} />
                    <Image src={'landing:landingPage.logoProyectos'} size={'M'} />
                </span>
            </div>
        </Screen>
    )
}
