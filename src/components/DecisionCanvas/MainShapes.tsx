import { useEffect, useState, MouseEventHandler, useMemo, Fragment } from 'react'
import { locatorPositions, mainShapes, maps, MShapeMAP } from './dataCollections'
import {
    activeImage,
    cssls_2,
    cssls_6,
    cssls_7,
    cssls_8,
    cssls_9,
    openedStyle,
    staticImage,
} from './DecisionCanvas.styles'

type MainShapesProps = {
    shapeMap: MShapeMAP
    imgAssets: string[]
}

export const MainShapes = ({ shapeMap, imgAssets }: MainShapesProps) => {
    const [openedItem, setOpenedItem] = useState('')
    const [isUserOver, setIsUserOver] = useState(false)
    const [rotVal, setRotVal] = useState(0)
    const [CX, setCX] = useState(40)
    const [CY, setCY] = useState(40)
    const [A1, setA1] = useState('8,8,0,0,1-9-5.5')
    const [A2, setA2] = useState('8,8,0,0,0-9-5.5')

    const handleMouseEnter: MouseEventHandler<SVGPathElement> = ({ target }) => {
        const id = (target as SVGPathElement).id

        const { cx, cy, a1, a2, r } = locatorPositions.find(({ target }) => target === id) ?? {
            cx: 0,
            cy: 0,
            a1: '8,8,0,0,1-9-5.5',
            a2: '8,8,0,0,0-9-5.5',
            r: Math.floor(Math.random() * 360),
        }
        setRotVal(r)
        setCX(cx)
        setCY(cy)
        setA1(a1)
        setA2(a2)
        setIsUserOver(true)
    }
    const handleMouseLeave: MouseEventHandler<SVGPathElement> = ({ target }) => {
        setIsUserOver(false)
    }
    const handleMouseclick: MouseEventHandler<SVGPathElement> = ({ target }) => {
        setOpenedItem((target as SVGPathElement).id)
    }

    return (
        <>
            <BakedShapes
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleMouseclick={handleMouseclick}
                shapeMap={shapeMap}
                opened={openedItem}
                imgAssets={imgAssets}
            />
            {isUserOver && (
                <>
                    <path
                        id="locatorPositionVectorLine"
                        className={cssls_6()}
                        d={`M${CX},${CY}H-26.51a${A1}L-210,30a${A2}H-490`}
                    />
                    <g id="shapeLocator">
                        <circle className={cssls_9()} cx={CX} cy={CY} r="9" />
                        <circle className={cssls_8()} cx={CX} cy={CY} r="3" />
                    </g>
                </>
            )}
            <path
                id="starGate"
                className={cssls_2()}
                d="M192.84,736.6c62.66,39,128.66,53.92,168.7,57.5a4.38,4.38,0,0,0,4.29-2.25c5-8.62,22.84-51.62,26.73-58,.48-.79,1.38-1.23,3.89-1.23h8.93c2.51,0,3.41.44,3.89,1.23,3.32,5.46,21.14,48.8,25.77,56.46.68,1.12,1.07,1.77,1.1,1.8,2.11,2.21,3.46,2.06,3.91,2,52.45-6.6,105.45-18.5,169.12-57.5"
                transform={`rotate(${rotVal} 400 400)`}
            />
        </>
    )
}

type BakedShapesProps = {
    handleMouseEnter: MouseEventHandler<SVGPathElement>
    handleMouseLeave: MouseEventHandler<SVGPathElement>
    handleMouseclick: MouseEventHandler<SVGPathElement>
    opened: string
    shapeMap: MShapeMAP
    imgAssets: string[]
}

const BakedShapes = ({
    handleMouseEnter,
    handleMouseLeave,
    handleMouseclick,
    shapeMap,
    opened,
    imgAssets,
}: BakedShapesProps) => {
    const cssls7 = cssls_7()
    const mps = maps[shapeMap]

    return useMemo(() => {
        return mainShapes.map(({ id, d }, i) => {
            const { origin } = locatorPositions.find(({ target }) => target === id) ?? {
                origin: '0 0',
            }
            const active = opened === id

            return mps.includes(i) ? (
                <Fragment key={`keyint-desc.shape.${id}`}>
                    <clipPath id={`${id}_clip`}>
                        <path d={d} />
                    </clipPath>
                    <g
                        style={{
                            clipPath: `url(#${id}_clip)`,
                        }}
                    >
                        <image
                            className={active ? activeImage() : staticImage()}
                            width="300"
                            height="300"
                            transform={`translate(${origin})`}
                            xlinkHref={imgAssets[i]}
                        />
                    </g>
                    <path
                        id={id}
                        className={active ? openedStyle() : cssls7}
                        d={d}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleMouseclick}
                    />
                </Fragment>
            ) : null
        })
    }, [opened])
}
