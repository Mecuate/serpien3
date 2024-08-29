import { css, keyframes, styled } from 'stitches.conf'

export const exaA = keyframes({
    '0%': { opacity: 0.8, transform: 'translate(5px, 60px)' },
    '20%': { opacity: 0.2, transform: 'translate(80px, 60px)' },
    '21%': { opacity: 0.7, transform: 'translate(70px, 60px)' },
    '50%': { opacity: 0.1, transform: 'translate(100px, 60px)' },
    '51%': { opacity: 0.8, transform: 'translate(90px, 60px)' },
    '75%': { opacity: 0.2, transform: 'translate(80px, 60px)' },
    '100%': { opacity: 0.8, transform: 'translate(5px, 60px)' },
})
export const exaB = keyframes({
    '0%': { opacity: 1, transform: 'translate(120px, 60px)' },
    '20%': { opacity: 1, transform: 'translate(4px, 60px)' },
    '21%': { opacity: 0, transform: 'translate(2px, 60px)' },
    '50%': { opacity: 0, transform: 'translate(120px, 70px)' },
    '51%': { opacity: 1, transform: 'translate(120px, 70px)' },
    '100%': { opacity: 1, transform: 'translate(120px, 60px)' },
})

export const hexagonClass6 = css({
    animation: `${exaA} 5.9s infinite ease-in-out`,
})
export const hexagonClass5 = css({
    animation: `${exaB} 3s infinite`,
})
export const hexagonClass4 = css({
    animation: `${exaA} 5.7s infinite`,
})
export const hexagonClass3 = css({
    animation: `${exaA} 5s infinite linear`,
})
export const hexagonClass2 = css({
    animation: `${exaA} 5.2s infinite`,
})
export const hexagonClass1 = css({
    animation: `${exaA} 6s infinite`,
})

export const ZoneContainer = styled('span', {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'flex-end',
    width: '100%',
    height: 'auto',
    bottom: -100,
})

export const TextContainer = styled('span', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    justifyItems: 'center',
    alignItems: 'center',
    alignContent: 'center',
})
export const ActionContainer = styled('span', {
    display: 'flex',
    flexDirection: 'row',
    gap: '$2',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '$6',
    marginHorizontal: '$4',
})

export const SVG = styled('svg', {
    display: 'block',
    position: 'absolute',
    width: '240px',
    height: 'auto',
    top: 0,
})

export const APath = styled('path', {
    display: 'block',
    transition: 'all 42ms ease-out',
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    strokeWidth: '1px',

    variants: {
        filled: {
            on: {
                fill: 'currentColor',
            },
            off: {
                fill: 'none',
            },
        },
        stroked: {
            on: {
                stroke: 'currentColor',
            },
            off: {
                stroke: 'none',
            },
        },
    },
})
