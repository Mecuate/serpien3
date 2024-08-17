import { keyframes } from 'stitches.conf'

export const videoControlsFadeOutSlow = keyframes({
    '0%': { opacity: 1 },
    '10%': { opacity: 0.88 },
    '70%': { opacity: 0.8 },
    '85%': { opacity: 0.5 },
    '100%': { transform: 0 },
})

export const pulse = keyframes({
    '0%': { opacity: 1 },
    '10%': { opacity: 0.18 },
    '70%': { opacity: 0.8 },
    '85%': { opacity: 0.15 },
    '100%': { transform: 0 },
})

export const vactorLine = keyframes({
    '0%': { opacity: 0.1, strokeDasharray: '1200', strokeDashoffset: 1500 },
    '10%': { opacity: 0.2, strokeDasharray: '1200', strokeDashoffset: 1200 },
    '100%': { opacity: 1, strokeDasharray: '1200', strokeDashoffset: 0 },
})
