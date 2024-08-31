import { ComponentProps } from 'react'
import { HTLMContainer, TextContainer } from './Typography.styles'

export type TextProps = ComponentProps<typeof TextContainer> & {
    htmlData?: string
}
export type TextColors = 'light' | 'primary' | 'default' | 'faint' | 'success' | 'danger' | 'warn'

export const Typography = ({
    children,
    color = 'default',
    size = 'normal',
    weight = 'regular',
    font = 'sans',
    paragraph = 'left',
    ...others
}: TextProps) => {
    return (
        <TextContainer
            color={color}
            size={size}
            weight={weight}
            font={font}
            paragraph={paragraph}
            {...others}
        >
            {children}
        </TextContainer>
    )
}
const TextSmall = ({ children, weight, color = 'midtone', ...others }: TextProps) => {
    return (
        <Typography {...others} size={'small'} color={color} weight={'thin'}>
            {children}
        </Typography>
    )
}
const TextHeader = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} size={'header'} weight={'semi'}>
            {children}
        </Typography>
    )
}
const TextHeavy = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} weight={'bold'}>
            {children}
        </Typography>
    )
}
const TextBoom = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} size={'max'} weight={'fat'}>
            {children}
        </Typography>
    )
}
const TextBig = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} weight={'bold'} size={'big'}>
            {children}
        </Typography>
    )
}
const TextTitle = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} weight={'bold'} size={'title'}>
            {children}
        </Typography>
    )
}
const TextSubtitle = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} weight={'bold'} size={'subtitle'}>
            {children}
        </Typography>
    )
}
const TextHTML = ({ htmlData, ...others }: TextProps) => {
    return htmlData ? (
        <HTLMContainer
            {...others}
            weight={'regular'}
            size={'normal'}
            dangerouslySetInnerHTML={{ __html: htmlData }}
        ></HTLMContainer>
    ) : (
        <span></span>
    )
}
const TextRegular = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} weight={'regular'} size={'normal'}>
            {children}
        </Typography>
    )
}
const TextPreformatted = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} weight={'regular'} size={'normal'}>
            <pre>{children}</pre>
        </Typography>
    )
}
const TextShort = ({ children, ...others }: TextProps) => {
    return (
        <Typography {...others} weight={'semi'} size={'short'}>
            {children}
        </Typography>
    )
}

Typography.Boom = TextBoom
Typography.Header = TextHeader
Typography.Big = TextBig
Typography.Title = TextTitle
Typography.Subtitle = TextSubtitle
Typography.Pre = TextPreformatted
Typography.Heavy = TextHeavy
Typography.Regular = TextRegular
Typography.Short = TextShort
Typography.Small = TextSmall
Typography.HTML = TextHTML

Typography.displayName = 'Text'
