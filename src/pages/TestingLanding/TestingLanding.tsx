import { Button } from 'components/Button'
import { Screen } from 'components/Screen'
import { Typography } from 'components/Typography'

import { useTranslation } from 'hooks/useTranslations'
import { APP_PATH } from 'models'
import { colors } from 'styles/colors'

export const TestingLanding = () => {
    const { t } = useTranslation()
    const title = t('common:menu.home')

    const myColors = Object.keys(colors)

    return (
        <Screen pannel={APP_PATH.HOME}>
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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        height: '100vh',
                        width: '250px',
                        justifyItems: 'center',
                        color: 'blueviolet',
                    }}
                >
            
                    <span
                        style={{ border: '1px solid orange', padding: '18px', minWidth: '120px' }}
                    >
                        <Button.HTMLAction
                            action={() => {
                                console.log('clicked:: continue watching')
                            }}
                            text={'Seguir viendo'}
                        />
                    </span>
                    <span
                        style={{ border: '1px solid orange', padding: '18px', minWidth: '120px' }}
                    >
                        <Button.Action
                            action={() => {
                                console.log('clicked:: continue watching')
                            }}
                            icon="play"
                            text={'Seguir viendo'}
                        />
                    </span>
                    <span
                        style={{ border: '1px solid orange', padding: '18px', minWidth: '120px' }}
                    >
                        <Button.ClearIcon
                            action={() => {
                                console.log('clicked:: continue watching')
                            }}
                            icon={'skip_next'}
                        />
                    </span>
                    <span
                        style={{ border: '1px solid orange', padding: '18px', minWidth: '120px' }}
                    >
                        <Button.Icon
                            action={() => {
                                console.log('clicked:: continue watching')
                            }}
                            icon={'pause'}
                        />
                    </span>
                    <span
                        style={{ border: '1px solid orange', padding: '18px', minWidth: '120px' }}
                    >
                        <Button.RoundAction
                            action={() => {
                                console.log('clicked:: continue watching')
                            }}
                            text={'Seguir viendo'}
                        />
                    </span>
                </div>

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
            <div
                style={{
                    position: 'relative',
                    top: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    padding: '1rem',
                    minHeight: '600px',
                    overflow: 'auto',
                }}
            >
                {myColors.map((name, i) => {
                    const tp = typeof colors[name]
                    return tp === 'string' ? (
                        <div
                            key={`valeCol_${i}`}
                            style={{
                                backgroundColor: colors[name],
                                border: '1px solid black',
                                width: '100px',
                                height: '100px',
                                fontSize: '12px',
                                color: 'white',
                                textShadow: '1px 1px 4px black',
                                fontWeight: 'bold',
                                display: 'flex',
                                padding: '4px',
                            }}
                        >
                            {`${name} :: ${tp}`}
                        </div>
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '2px',
                            }}
                        >
                            {Object.keys(colors[name]).map((subname, j) => {
                                return (
                                    <div
                                        key={`valeCol_${i}_${j}`}
                                        style={{
                                            backgroundColor: colors[name][subname],
                                            border: '1px solid black',
                                            width: '100px',
                                            height: '100px',
                                            fontSize: '12px',
                                            color: 'white',
                                            textShadow: '1px 1px 4px black',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '4px',
                                        }}
                                    >
                                        {`${name} :: ${subname}`}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </Screen>
    )
}
