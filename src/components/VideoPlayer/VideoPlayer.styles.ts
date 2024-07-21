import { styled, css, globalCss } from 'stitches.conf'
import { colors } from 'styles/colors'
import { videoControlsFadeOutSlow } from 'styles/keyframes'
import { VCIDs } from './utils'

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

export const Video = styled('video', {
    position: 'relative',
    width: '100%',
    height: '100%',
    bc: colors.TRANSPARENT,
    zIndex: 1,
})

export const VideoControlsContainer = styled('div', {
    position: 'absolute',
    width: '100%',
    display: 'grid',
    zIndex: 20,
    bottom: 48,
    bc: colors.TRANSPARENT,
})

export const ControlsArea = styled('div', {
    position: 'relative',
    display: 'block',
    justifySelf: 'center',
    bc: colors.TRANSPARENT,
    opacity: 1,
    padding: 20,
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
        opacity: 1,
    },
})

export const MaskTitle = styled('div', {
    bc: colors.TRANSPARENT,
    borderRadius: '16px',
    border: '1px solid #d757d710',
    minWidth: '50%',
    minHeight: '25vh',
    padding: '1rem',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    top: 0,
    left: 0,
    zIndex: 2,
    backdropFilter: 'blur(20px)',
    boxShadow: '6px 16px 20px 6px #5cb5a5e6, 11px -4px 13px #c0ff00bf',
})

export const VideoControlsStyleClass = css({
    borderRadius: '16px',
    border: '1px solid orange',
    animation: videoControlsFadeOutSlow + ' 7s',
})
const TIME_LINE_BASE = `#${VCIDs.TIME_LINE_BASE}`
const TIME_LINE_FULL = `#${VCIDs.TIME_LINE_FULL}`
const VOLUME_LINE_BASE = `#${VCIDs.VOLUME_LINE_BASE}`
const VOLUME_LINE_FULL = `#${VCIDs.VOLUME_LINE_FULL}`

const TIMELINE_POINTER = `#${VCIDs.TIMELINE_POINTER}`

const VOLUME_BACKGROUND = `#${VCIDs.VOLUME_BACKGROUND}`
const BUTTON_FULLSCREEN = `#${VCIDs.BUTTON_FULLSCREEN}`
const BUTTON_EXIT = `#${VCIDs.BUTTON_EXIT}`
const BUTTON_CAPTIONS = `#${VCIDs.BUTTON_CAPTIONS}`
const BUTTON_VOLUME = `#${VCIDs.BUTTON_VOLUME}`
const BUTTON_VOLUME_POINTER = `#${VCIDs.BUTTON_VOLUME_POINTER}`

export const VideoControlsSVGStyles = globalCss({
    '#GUIpause, #GUIplay': {
        fill: colors.PALETTE[100],
    },
    [TIME_LINE_BASE]: {
        stroke: colors.SURFACE[300],
        opacity: 0.5,
    },
    [TIME_LINE_FULL]: {
        stroke: colors.PALETTE[300],
        opacity: 1,
    },
    [VOLUME_LINE_BASE]: {
        stroke: colors.PALETTE[300],
        opacity: 0.5,
    },
    [VOLUME_LINE_FULL]: {
        stroke: colors.PALETTE[300],
        opacity: 1,
    },
    [TIMELINE_POINTER]: {
        fill: colors.PRIMARY,
        '&:hover': {
            fill: colors.PALETTE[200],
        },
    },
    [VOLUME_BACKGROUND]: { fill: colors.PALETTE[-500] },
    [BUTTON_FULLSCREEN]: { fill: colors.PALETTE[100] },
    [BUTTON_EXIT]: { fill: colors.PALETTE[100] },
    [BUTTON_CAPTIONS]: { fill: colors.PALETTE[100] },
    [BUTTON_VOLUME]: { fill: colors.PALETTE[100] },
    [BUTTON_VOLUME_POINTER]: { fill: colors.PALETTE[100] },
})
