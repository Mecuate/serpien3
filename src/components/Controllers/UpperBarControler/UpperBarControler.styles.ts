import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '$1 $5',
    width: '100%',
    minHeight: '$9',
    maxHeight: '$9',
    gap: '$4',
    background: colors.SURFACE[100],
    borderBottom: `1px solid ${colors.SURFACE[300]}`,
})

export const ProfileHolder = styled('div', {
    width: '$6',
    height: '$6',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
})

export const LeftSection = styled('div', {
    display: 'flex',
    flex: '0 1 265px',
    gap: '$4',
    flexDirection: 'row',
    textOverflow: 'clip',
    minWidth: '236px',
    marginRight: '-180px'
})

export const RightSection = styled('div', {
    display: 'flex',
    gap: '$4',
    flex: '0 1 265px',
    textOverflow: 'clip',
    minWidth: '236px',
    flexDirection: 'row-reverse',
})
