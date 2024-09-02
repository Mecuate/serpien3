import {
    ActionContainer,
    APath,
    hexagonClass1,
    hexagonClass2,
    hexagonClass3,
    hexagonClass4,
    hexagonClass5,
    hexagonClass6,
    SVG,
    TextContainer,
    ZoneContainer,
} from './HexagonLoader.styles'
import { Typography } from 'components/Typography'
import { useTranslation } from 'hooks/useTranslations'
import { Button } from 'components/Button'
import { colors } from 'styles/colors'

const pS = [
    'M5.2-11.6H-5.2c-0.9,0-1.8,0.5-2.3,1.3l-5.2,9 c-0.5,0.8-0.5,1.8,0,2.6l5.2,9c0.5,0.8,1.3,1.3,2.3,1.3H5.2c0.9,0,1.8-0.5,2.3-1.3l5.2-9c0.5-0.8,0.5-1.8,0-2.6l-5.2-9 C7-11.1,6.1-11.6,5.2-11.6z',
    'M4.4-9.8h-8.8c-0.8,0-1.5,0.4-1.9,1.1l-4.4,7.6 c-0.4,0.7-0.4,1.5,0,2.2l4.4,7.6c0.4,0.7,1.1,1.1,1.9,1.1h8.8c0.8,0,1.5-0.4,1.9-1.1l4.4-7.6c0.4-0.7,0.4-1.5,0-2.2L6.3-8.7 C5.9-9.4,5.2-9.8,4.4-9.8z',
    'M5.4-13.6H-5.4c-1.5,0-2.9,0.8-3.6,2.1l-5.4,9.4 c-0.8,1.3-0.8,2.9,0,4.2l5.4,9.4c0.8,1.3,2.1,2.1,3.6,2.1H5.4c1.5,0,2.9-0.8,3.6-2.1l5.4-9.4c0.8-1.3,0.8-2.9,0-4.2l-5.4-9.4 C8.3-12.8,6.9-13.6,5.4-13.6z',
    'M3.5-8.1h-7.1c-0.7,0-1.4,0.4-1.7,1L-8.8-1 c-0.4,0.6-0.4,1.4,0,2l3.5,6.1c0.4,0.6,1,1,1.7,1h7.1c0.7,0,1.4-0.4,1.7-1L8.8,1c0.4-0.6,0.4-1.4,0-2L5.3-7.1 C4.9-7.7,4.2-8.1,3.5-8.1z',
    'M2.2-5h-4.4c-0.4,0-0.8,0.2-1,0.6l-2.2,3.8c-0.2,0.4-0.2,0.8,0,1.2l2.2,3.8C-3,4.8-2.6,5-2.2,5h4.4c0.4,0,0.8-0.2,1-0.6 l2.2-3.8c0.2-0.4,0.2-0.8,0-1.2L3.2-4.4C3-4.8,2.6-5,2.2-5z',
    'M2.7-6.3h-5.4c-0.6,0-1.1,0.3-1.4,0.8l-2.7,4.7 c-0.3,0.5-0.3,1.1,0,1.6l2.7,4.7C-3.8,6-3.3,6.3-2.7,6.3h5.4c0.6,0,1.1-0.3,1.4-0.8l2.7-4.7c0.3-0.5,0.3-1.1,0-1.6L4.1-5.5 C3.8-6,3.3-6.3,2.7-6.3z',
]

// const p = [
//     'M64.4,48.9H53.6c-1,0-1.9,0.5-2.3,1.4l-5.4,9.4 c-0.5,0.8-0.5,1.9,0,2.7l5.4,9.4c0.5,0.8,1.4,1.4,2.3,1.4h10.9c1,0,1.9-0.5,2.3-1.4l5.4-9.4c0.5-0.8,0.5-1.9,0-2.7l-5.4-9.4 C66.3,49.4,65.4,48.9,64.4,48.9z',
//     'M88.1,36.7H77.9c-0.9,0-1.7,0.5-2.1,1.2l-5.1,8.8 c-0.4,0.8-0.4,1.7,0,2.4l5.1,8.8c0.4,0.8,1.2,1.2,2.1,1.2h10.2c0.9,0,1.7-0.5,2.1-1.2l5.1-8.8c0.4-0.8,0.4-1.7,0-2.4L90.2,38 C89.8,37.2,89,36.7,88.1,36.7z',
//     'M87.5,61h-11c-1.6,0-3.1,0.9-3.9,2.3l-5.5,9.5 c-0.8,1.4-0.8,3.1,0,4.5l5.5,9.5c0.8,1.4,2.3,2.3,3.9,2.3h11c1.6,0,3.1-0.9,3.9-2.3l5.5-9.5c0.8-1.4,0.8-3.1,0-4.5l-5.5-9.5 C90.6,61.9,89.1,61,87.5,61z',
//     'M36.8,52h-7.5c-0.9,0-1.7,0.5-2.1,1.2l-3.8,6.5 c-0.4,0.8-0.4,1.7,0,2.5l3.8,6.5c0.4,0.8,1.3,1.2,2.1,1.2h7.5c0.9,0,1.7-0.5,2.1-1.2l3.8-6.5c0.4-0.8,0.4-1.7,0-2.5l-3.8-6.5 C38.5,52.5,37.7,52,36.8,52z',
//     'M101.1,54h-4.2c-0.5,0-0.9,0.3-1.2,0.7l-2.1,3.6c-0.2,0.4-0.2,1,0,1.4l2.1,3.6c0.2,0.4,0.7,0.7,1.2,0.7h4.2 c0.5,0,0.9-0.3,1.2-0.7l2.1-3.6c0.2-0.4,0.2-1,0-1.4l-2.1-3.6C102,54.3,101.6,54,101.1,54z',
//     'M52.8,32.6h-9.6c-0.7,0-1.4,0.4-1.8,1L36.6,42 c-0.4,0.6-0.4,1.4,0,2l4.8,8.3c0.4,0.6,1,1,1.8,1h9.6c0.7,0,1.4-0.4,1.8-1l4.8-8.3c0.4-0.6,0.4-1.4,0-2l-4.8-8.3 C54.2,33,53.6,32.6,52.8,32.6z',
// ]

type HexagonLoaderProps = {
    action?: () => void
    showButton: boolean
    color?: string
    num?: number
}

export const HexagonLoader = ({
    action = () => {},
    showButton,
    color = colors.SURFACE[100],
    num = 8,
}: HexagonLoaderProps) => {
    const { t } = useTranslation()
    const shading = () => {
        let u = Math.floor(Math.random() * 100)
        return u > 50 ? 'on' : 'off'
    }

    return (
        <ZoneContainer>
            <TextContainer>
                <Typography.Subtitle>{num}s</Typography.Subtitle>
                <Typography.Small>{t('video:decisions.waitUntilFinnish')}</Typography.Small>
                <SVG
                    color={color}
                    opacity={0.5}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 40 128 40"
                    overflow="visible"
                    xmlSpace="preserve"
                >
                    <APath
                        className={hexagonClass5()}
                        id="exagon-5"
                        d={pS[4]}
                        filled={'on'}
                        stroked={'off'}
                    />
                    <APath
                        className={hexagonClass1()}
                        id="exagon-1"
                        d={pS[0]}
                        filled={shading()}
                        stroked={shading()}
                    />
                    <APath
                        className={hexagonClass2()}
                        id="exagon-2"
                        d={pS[1]}
                        filled={shading()}
                        stroked={shading()}
                    />
                    <APath
                        className={hexagonClass3()}
                        id="exagon-3"
                        d={pS[2]}
                        filled={shading()}
                        stroked={shading()}
                    />
                    <APath
                        className={hexagonClass4()}
                        id="exagon-4"
                        d={pS[3]}
                        filled={shading()}
                        stroked={shading()}
                    />
                    <APath
                        className={hexagonClass6()}
                        id="exagon-6"
                        d={pS[5]}
                        filled={shading()}
                        stroked={shading()}
                    />
                </SVG>
            </TextContainer>
            <ActionContainer>
                {showButton ? (
                    <Button.RoundAction size="big" action={action} icon={'play'} />
                ) : null}
            </ActionContainer>
        </ZoneContainer>
    )
}
