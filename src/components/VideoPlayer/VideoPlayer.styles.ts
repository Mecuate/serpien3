import { styled, css, globalCss } from 'stitches.conf'
import { colors } from 'styles/colors'
import { blurIn, videoControlsFadeOutSlow } from 'styles/keyframes'
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
    bottom: 0,
    bc: colors.TRANSPARENT,
})

export const ControlsContainer = styled('div', {
    bc: colors.TRANSPARENT,
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
})

export const ControlsArea = styled('div', {
    position: 'relative',
    display: 'block',
    background: `linear-gradient(to bottom, ${colors.BACKGROUND}00 0%, ${colors.BACKGROUND} 95%)`,
    // TODO: [` delete `]-{2024-07-22}
    opacity: 1,
    padding: 4,
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
        opacity: 1,
    },
})

export const StandByVideoContainer = styled('div', {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    transition: 'all 0.5s ease-in-out',
})

export const sideBoxA = css({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
})
export const sideBoxB = css({
    top: 'calc(100% - 25px)',
    left: 'calc(100% - 25px)',
})
export const sideBoxC = css({
    bottom: 'calc(100% - 25px)',
    left: 'calc(100% - 25px)',
})
export const sideBoxD = css({
    top: 0,
    left: '200%',
})

export const MaskTitle = styled('div', {
    bc: colors.TRANSPARENT,
    width: '100%',
    height: '100%',
    padding: '1rem',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    top: 0,
    left: 0,
    zIndex: 5005,
    backdropFilter: 'blur(24px)',
    borderRadius: '0 0 44% 87% / 0 0 25% 36%',
    borderBottom: `1mm solid ${colors.SOIL[100]}24`,
    borderLeft: `1mm solid ${colors.SOIL[100]}24`,
    borderRight: `1mm solid ${colors.SOIL[100]}24`,

    transition: 'all 950ms cubic-bezier(0.17, 0.77, 0.83, 1)',

    variants: {
        pos: {
            true: {
                top: 0,
                borderRadius: '0 0 0% 0% / 0 0 0% 0%',
                borderBottom: `1mm solid ${colors.SOIL[100]}10`,
                borderLeft: `1mm solid ${colors.SOIL[100]}07`,
                borderRight: `1mm solid ${colors.SOIL[100]}07`,
            },
            false: {
                borderBottom: `1mm solid ${colors.SOIL[100]}24`,
                borderLeft: `1mm solid ${colors.SOIL[100]}24`,
                borderRight: `1mm solid ${colors.SOIL[100]}24`,
                borderRadius: '0 0 44% 87% / 0 0 25% 36%',
                top: '-110%',
            },
        },
    },
})

export const VolumeTrackBack = styled('div', {
    bc: colors.SOIL[-500],
    borderRadius: '16px',
    minWidth: '48px',
    maxWidth: '64px',
    height: '170px',
    position: 'absolute',
    bottom: 0,
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
})

export const VolumeTrack = styled('input', {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    bottom: '6em',
    zIndex: 20,
})

export const VideoControlsStyleClass = css({
    animation: videoControlsFadeOutSlow + ' 7s',
})

const TIME_LINE_BASE = `#${VCIDs.TIME_LINE_BASE}`
const TIME_LINE_FULL = `#${VCIDs.TIME_LINE_FULL}`
const TIMELINE_POINTER = `#${VCIDs.TIMELINE_POINTER}`
const BUTTON_CAPTIONS = `#${VCIDs.BUTTON_CAPTIONS}`
const VOLUME_BAR = `#${VCIDs.VOLUME_BAR}`

export const VideoControlsSVGStyles = globalCss({
    'input[type="range"]': {
        appearance: 'none',
        backgroundColor: 'transparent',
        width: '150px',
    },
    'input[type="range"]::-webkit-slider-runnable-track': {
        position: 'relative',
        height: '8px',
        backgroundColor: colors.SOIL[100],
        borderRadius: '$3',
        background: `linear-gradient(to right, ${colors.SOIL[100]} 0%, ${colors.SOIL[200]} 20%, ${colors.SOIL[300]} 60%, ${colors.SOIL[500]} 80%)`,
    },
    'input[type="range"]::-moz-range-track': {
        position: 'relative',
        height: '8px',
        backgroundColor: colors.SOIL[100],
        borderRadius: '$3',
        background: `linear-gradient(to right, ${colors.SOIL[100]} 0%, ${colors.SOIL[200]} 20%, ${colors.SOIL[300]} 60%, ${colors.SOIL[500]} 80%)`,
    },
    'input[type="range"]::-webkit-slider-thumb': {
        boxSizing: 'border-box',
        appearance: 'none',
        position: 'relative',
        backgroundColor: colors.SOIL[100],
        border: `1px solid ${colors.SOIL[200]}`,
        borderRadius: '$round',
        width: '16px',
        height: '16px',
        top: '50%',
        translate: '0 -50%',
    },
    'input[type="range"]::-moz-range-thumb': {
        boxSizing: 'border-box',
        appearance: 'none',
        position: 'relative',
        backgroundColor: colors.SOIL[100],
        border: `1px solid ${colors.SOIL[200]}`,
        borderRadius: '$round',
        width: '16px',
        height: '16px',
    },
    'input[type="range"]::-moz-range-progress': {
        height: '8px',
        backgroundColor: `${colors.SOIL[200]}50`,
        borderRadius: '8px',
    },
    '#GUIpause, #GUIplay, #GUIenter, #GUIexit, #GUIcc, #GUIvolume': {
        fill: colors.SOIL[100],
    },
    [VOLUME_BAR]: {
        '&:hover': {
            display: 'flex !important',
        },
    },
    [TIME_LINE_BASE]: {
        stroke: colors.SOIL[100],
        opacity: 0.2,
    },
    [TIME_LINE_FULL]: {
        stroke: colors.SOIL[300],
        opacity: 1,
    },
    [TIMELINE_POINTER]: {
        fill: colors.SOIL[200],
        '&:hover': {
            fill: colors.SOIL[400],
        },
    },
    // [BUTTON_ENTER_FS]: { fill: 'pink', opacity: 0.5 },
    // [BUTTON_EXIT_FS]: { fill: 'cyan', opacity: 0.5 },
    [BUTTON_CAPTIONS]: { fill: 'red', opacity: 0.5 },
})
