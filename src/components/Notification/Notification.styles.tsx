import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const NotificationContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 80,
    right: 0,
    width: 450,
    height: 80,
    padding: '0 20px',
    zIndex: 300,
    backgroundColor: colors.SURFACE[300],
    defaultVariants: {
        type: 'info',
    },
})

export const NotificationContent = styled('div', {
    display: 'flex',
})
