import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '$1',
    paddingLeft: '$2',
    flex: '0 1 1105px',
    height: '$input',
    border: `2px solid black `,
    borderRadius: '$pill',
    background: colors.WHITE,
})

export const SearchInput = styled('input', {
    margin: 0,
    padding: 0,
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    variants: {
        section: {
            top: { width: 1060 },
            left: { width: 196 },
            items: { width: 446 },
        },
    },
})
