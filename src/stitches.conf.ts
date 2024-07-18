import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
// import { gradientStyles } from 'assets/styles/Gradients'
import { COLORS } from 'styles/colors'

export const { styled, css, theme, config, getCssText, globalCss, keyframes } = createStitches({
    theme: {
        colors: {
            ...COLORS,
        },
        shadows: {
            level1: `0px 2px 16px 0px ${COLORS.shadow_color}`,
            level2: `0px 5px 24px 3px ${COLORS.shadow_color}`,
            level3: `0px 10px 32px 4px ${COLORS.shadow_color}`,
            level4: `0px 10px 32px 4px ${COLORS.shadow_color}`,
        },
        space: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '24px',
            6: '32px',
            7: '48px',
            8: '64px',
            9: '80px',
        },
        sizes: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '24px',
            6: '32px',
            7: '48px',
            8: '64px',
            9: '80px',
        },
        fonts: {
            small: '10px',
            normal: '12px',
            regular: '14px',
            middle: '18px',
            title: '22px',
            big: '28px',
            head: '36px',
            bigger: '62px',
        },
        fontFamily: {
            sans: 'Catamaran, sans-serif',
            serif: 'Tiro Gurmukhi, serif',
        },
        radii: {
            1: '4px',
            2: '6px',
            3: '8px',
            4: '12px',
            round: '50%',
            pill: '9999px',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
    },
    media: {
        bp1: '(min-width: 520px)',
        bp2: '(min-width: 900px)',
        bp3: '(min-width: 1200px)',
        bp4: '(min-width: 1800px)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
    utils: {
        bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
            backgroundColor: value,
        }),
        bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
            boxShadow: value,
        }),
        ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
            overflowX: value,
        }),
        oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
            overflowY: value,
        }),
        pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
            pointerEvents: value,
        }),
        userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        size: (value: Stitches.PropertyValue<'width'>) => ({
            width: value,
            height: value,
        }),
    },
})

export const globalStyles = globalCss({
    '@import': [
        "url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;600;800&family=Tiro+Gurmukhi&display=swap')",
    ],
    '*': {
        boxSizing: 'border-box',
    },
    html: {
        fontSize: '$normal',
        fontFamily: 'Catamaran, sans-serif',
        color: '$text',
    },
    body: {
        margin: 0,
        padding: 0,
        letterSpacing: '0px',
        background: '$main_back',
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
})

export type { VariantProps } from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>
export type ColorTokens = keyof typeof theme.colors
export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space
