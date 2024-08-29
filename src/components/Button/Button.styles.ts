import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const ButtonContainer = styled('button', {
    width: '100%',
    display: 'flex',
    height: '$button',
    outline: 'none',
    border: 'none',
    margin: 0,
    paddingHorizontal: '$2',
    paddingVertical: '$4',
    alignmentBaseline: 'central',
    alignItems: 'center',
    fontFamily: '$sans',
    borderRadius: '$1',
    cursor: 'pointer',

    variants: {
        variant: {
            action: {
                backgroundColor: colors.SOIL[700],
                justifyContent: 'center',
                alignContent: 'center',
                size: '$7',
                borderRadius: '$pill',
                boxShadow: `inset -1px -1px 5px ${colors.SOIL[800]}, inset 0px 0px 1px 7px ${colors.SOIL[600]}`,
                border: `1px solid ${colors.TRANSPARENT}`,
                '&:hover': {
                    backgroundColor: `${colors.SURFACE[800]}`,
                    border: `1px solid ${colors.SOIL[900]}`,
                },
            },
            roundAction: {
                backgroundColor: `${colors.SECONDARY}80`,
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                size: '64px',
                borderRadius: '$round',
                border: `1px solid ${colors.TRANSPARENT}`,
                '&:hover': {
                    backgroundColor: colors.SECONDARY,
                    border: `1px solid ${colors.PRIMARY}90`,
                },
            },
            icon: {
                backgroundColor: colors.TRANSPARENT,
                justifyContent: 'center',
                alignContent: 'center',
                size: '38px',
                borderRadius: '$pill',
                border: 'none',

                '&:hover': {
                    backgroundColor: `${colors.SECONDARY}15`,
                },
                '&:active': {
                    backgroundColor: `${colors.SECONDARY}45`,
                    transition: 'all 50ms ease-in',
                },
            },
            clearicon: {
                display: 'flex',
                position: 'relative',
                backgroundColor: colors.TRANSPARENT,
                justifyContent: 'center',
                alignSelf: 'center',
                justifyItems: 'center',
                size: '24px',
                borderRadius: '$pill',
                padding: 0,
                alignmentBaseline: 'middle',
            },
            primary: {
                backgroundColor: colors.SOIL[400],
                border: `1px solid ${colors.SOIL[300]}`,
                justifyContent: 'center',
                alignContent: 'center',
                maxWidth: 168,
                borderRadius: '$3',

                '&:hover': {
                    backgroundColor: colors.SOIL[600],
                },
            },
            secondary: {
                backgroundColor: colors.SECONDARY,
                border: `1px solid ${colors.SECONDARY}`,
                justifyContent: 'center',
                alignItems: 'center',
            },
            tertiary: {
                backgroundColor: colors.SECONDARY,
                border: `1px solid ${colors.TERTIARY}`,
                justifyContent: 'center',
            },
        },
    },
})
