import { ComponentProps } from 'react'
import { ImageRoot, ImageSrc } from './Image.styles'
import { useImage } from 'hooks/useGetImage/useImageResource'
import { iKeyNames } from 'sources/imageRepository'

type ImageOwnProps = ComponentProps<typeof ImageRoot>
export type ImageProps = ImageOwnProps & {
    label?: string
    source?: string
    src?: iKeyNames
    size?: 'S' | 'M' | 'L'
}

export const Image = ({ src, source, label, variant, size }: ImageProps) => {
    const { gi } = useImage()

    return (
        <ImageRoot variant={variant} size={size}>
            <ImageSrc src={src ? gi(src) : source} aria-label={label ? label : 'image'} />
        </ImageRoot>
    )
}
