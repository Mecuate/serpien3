import { styled, css } from 'stitches.conf'
import { colors } from 'styles/colors'
import { pulse, vectorLine } from 'styles/keyframes'

export const DecisionContainer = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '640px',
    padding: 0,
    marginTop: '120px',
    justifyContent: 'space-between',
    color: colors.WHITE,

    variants: {
        variant: {
            white: {
                color: colors.SURFACE[100],
            },
            golden: {
                color: colors.WARN[200],
            },
            forest: {
                color: colors.FOREST[100],
            },
            cold: {
                color: colors.COLD[100],
            },
        },
    },
})

export const SVGContainer = styled('div', {
    display: 'flex',
    width: '50%',
    height: '640px',
    padding: 0,
    justifyContent: 'center',
    overflow: 'visible',
})

export const ContentContainer = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%',
    maxHeight: '100%',
    paddingHorizontal: '$4',
})
export const ContentArea = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
    width: '80%',
    height: '100%',
    lineBreak: 'normal',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    paddingHorizontal: '$5',

    '& > .title-target': {
        marginBottom: '$5',
    },
    '& :nth-child(2)#DescriptionSection': {
        marginBottom: 'calc(80px + $5)',
    },
})
export const ActionSection = styled('div', {
    // position: 'absolute',
    bottom: 0,
    minHeight: '80px',
    width: '100%',
    paddingHorizontal: '$5',
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    border: '1px solid transparent',
})

export const activeArea = css({
    fill: 'CurrentColor',
    stroke: 'none',
    opacity: 0.78,
})

export const cssls_2 = css({
    fill: 'none',
    stroke: 'CurrentColor',
    strokeMiterlimit: 10,
    opacity: 0.3,
    strokeWidth: '4px',
})

export const cssls_3 = css({
    fill: 'none',
    stroke: 'CurrentColor',
    strokeMiterlimit: 10,
    opacity: 0.15,
    strokeWidth: '1px',
})

export const cssls_4 = css({
    fill: 'CurrentColor',
    stroke: 'none',
    opacity: 0.25,
    animation: `${pulse} 3s infinite`,
})
export const cssls_5 = css({
    fill: 'none',
    stroke: 'CurrentColor',
    strokeMiterlimit: 10,
    opacity: 0.58,
})
export const cssls_6 = css({
    fill: 'none',
    stroke: 'CurrentColor',
    strokeWidth: '3px',
    strokeMiterlimit: 10,
    strokeDasharray: 2000,
    strokeDashoffset: 1800,
    animation: `${vectorLine} 550ms forwards`,
})
export const cssls_7 = css({
    fill: 'CurrentColor',
    stroke: colors.DARK[100],
    boxShadow: `0 0 10px ${colors.SUCCESS[300]}`,
    opacity: 0.2,
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        opacity: 0.1,
        fill: 'CurrentColor',
    },
})
export const openedStyle = css({
    fill: colors.TRANSPARENT,
    stroke: 'CurrentColor',
    strokeWidth: '1.5mm',
    opacity: 1,
    transition: 'all 0.3s ease-in-out',
})
export const staticImage = css({
    opacity: 0.75,
    transition: 'all 150ms ease-in-out',
})
export const activeImage = css({
    opacity: 1,
    transition: 'all 150ms ease-in-out',
})
export const cssls_8 = css({
    fill: 'CurrentColor',
    stroke: 'none',
})
export const cssls_9 = css({
    fill: 'none',
    stroke: 'CurrentColor',
    strokeMiterlimit: 10,
    strokeWidth: '3px',
    opacity: 0.9,
})

export const sqrFilled = css({
    fill: 'CurrentColor',
    stroke: 'none',
    opacity: 0.05,
})
