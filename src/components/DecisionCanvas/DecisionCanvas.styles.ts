import { styled, css, globalCss } from 'stitches.conf'
import { colors } from 'styles/colors'
import { pulse, vactorLine, videoControlsFadeOutSlow } from 'styles/keyframes'

export const VideoContainer = styled('div', {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    padding: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
})

export const activeArea = css({
    fill: colors.WHITE,
    stroke: 'none',
    opacity: 0.78,
})

export const cssls_2 = css({
    fill: 'none',
    stroke: colors.WHITE,
    strokeMiterlimit: 10,
    opacity: 0.3,
    strokeWidth: '4px',
    transition: 'all 900ms linear',
})

export const cssls_3 = css({
    fill: 'none',
    stroke: colors.WHITE,
    strokeMiterlimit: 10,
    opacity: 0.15,
    strokeWidth: '1px',
})

export const cssls_4 = css({
    fill: colors.WHITE,
    stroke: 'none',
    opacity: 0.25,
    // transition: 'all 0.3s ease-in-out',
    animation: `${pulse} 3s infinite`,
})
export const cssls_5 = css({
    fill: 'none',
    stroke: colors.WHITE,
    strokeMiterlimit: 10,
    opacity: 0.58,
})
export const cssls_6 = css({
    fill: 'none',
    stroke: colors.WHITE,
    strokeMiterlimit: 10,
    strokeDasharray: '1200',
    strokeDashoffset: 1500,
    animation: `${vactorLine} 550ms forwards`,
})
export const cssls_7 = css({
    fill: colors.WHITE,
    stroke: 'none',
    opacity: 0.18,
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        opacity: 0.8,
        fill: colors.WHITE,
    },
})
export const cssls_8 = css({
    fill: colors.WHITE,
    stroke: 'none',
})
export const cssls_9 = css({
    fill: 'none',
    stroke: colors.WHITE,
    strokeMiterlimit: 10,
    strokeWidth: '3px',
    opacity: 0.9,
})

export const sqrFilled = css({
    fill: colors.WHITE,
    stroke: 'none',
    opacity: 0.05,
})
