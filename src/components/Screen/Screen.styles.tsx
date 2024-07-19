import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const ScreenContainer = styled('div', {
    position: 'relative',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    paddingLeft: '$3',
})

export const ScrollableContainer = styled('div', {
    paddingTop: '$5',
    overflow: 'auto',
    height: '100%',
    bc: colors.TRANSPARENT,
    display: 'grid',
    gridTemplateRows: '155px 1fr',
    gridTemplateColumns: `275px 1fr 1fr 378px`,
    gap: '0px',
    transition: 'all 0.3s ease-in-out',

    variants: {
        variant: {
            bigger: {
                gridTemplateColumns: `275px 1fr 1fr 674px`,
            },
            open: {
                gridTemplateColumns: `275px 1fr 1fr 378px`,
            },
            closed: {
                gridTemplateColumns: `275px 1fr 1fr 40px`,
            },
        },
    },
})
