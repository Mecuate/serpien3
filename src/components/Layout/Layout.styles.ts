import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const LayoutContainer = styled('main', {
    margin: 0,
    padding: 0,
    bc: colors.SURFACE[400],
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
})
