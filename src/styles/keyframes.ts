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

export const vectorLine = keyframes({
    '0%': { opacity: 0.1, strokeDasharray: '2000', strokeDashoffset: 2000 },
    '10%': { opacity: 0.6, strokeDasharray: '2000', strokeDashoffset: 1000 },
    '100%': { opacity: 1, strokeDasharray: '2000', strokeDashoffset: 0 },
})

export const appearTop = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-110%)' },
    '10%': { opacity: 0.1, transform: 'translateY(-90%)' },
    '80%': { opacity: 0.8, transform: 'translateY(-10%)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '30%': { opacity: 0 },
    '90%': { opacity: 0.8 },
    '100%': { opacity: 1 },
})

export const blurIn = keyframes({
    '0%': { backdropFilter: 'blur(0px)' },
    '10%': { backdropFilter: 'blur(5px)', },
    '100%': { backdropFilter: 'blur(20px)', },
})
