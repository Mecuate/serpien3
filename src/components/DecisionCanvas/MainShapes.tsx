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
import { DecisionType } from 'models/video'

type MainShapesProps = {
    shapeMap: MShapeMAP
    decisions: DecisionType[]
    currentDecision: DecisionType
    setIsUserOver: (value: boolean, id: string) => void
    isUserOver: boolean
    setOpenedItem: (value: string) => void
    openedItem: string
    setPreviewedDecision: (desc: DecisionType) => void
}

export const MainShapes = ({
    shapeMap,
    decisions,
    currentDecision,
    setIsUserOver,
    setOpenedItem,
    isUserOver,
    openedItem,
    setPreviewedDecision,
}: MainShapesProps) => {
    const [rotVal, setRotVal] = useState(0)
    const [CX, setCX] = useState(40)
    const [CY, setCY] = useState(40)

    const handleMouseEnter: MouseEventHandler<SVGPathElement> = ({ target }) => {
        const id = (target as SVGPathElement).id

        const { cx, cy, r } = locatorPositions.find(({ target }) => target === id) ?? {
            cx: 0,
            cy: 0,
            r: Math.floor(Math.random() * 360),
        }
        setRotVal(r)
        setCX(cx)
        setCY(cy)
        setIsUserOver(true, id)
    }
    const handleMouseLeave: MouseEventHandler<SVGPathElement> = ({ target }) => {
        const id = (target as SVGPathElement).id
        setIsUserOver(false, id)
    }
    const handleMouseclick = (targetID: { target: { id: string } }, desc: DecisionType) => {
        const id = targetID.target.id
        setOpenedItem(id)
        setPreviewedDecision(desc)

        const { cx, cy } = locatorPositions.find(({ target }) => target === id) ?? {
            cx: 0,
            cy: 0,
            r: Math.floor(Math.random() * 360),
        }
        setCX(cx)
        setCY(cy)
    }

    return (
        <>
            <BakedShapes
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleMouseclick={handleMouseclick}
                shapeMap={shapeMap}
                opened={openedItem}
                decisions={decisions}
                currentDecision={currentDecision}
            />
            {isUserOver && (
                <>
                    <path
                        id="locatorPositionVectorLine"
                        className={cssls_6()}
                        d={`M${CX},${CY},${CX - 80},${CY},-10,1,-50,1`}
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
    handleMouseclick: (id: { target: { id: string } }, d: DecisionType) => void
    opened: string
    shapeMap: MShapeMAP
    decisions: DecisionType[]
    currentDecision: DecisionType
}

const BakedShapes = ({
    handleMouseEnter,
    handleMouseLeave,
    handleMouseclick,
    shapeMap,
    opened,
    decisions,
    currentDecision,
}: BakedShapesProps) => {
    const cssls7 = cssls_7()
    const activeMap = maps[shapeMap]
    let thisDecision: DecisionType | null = null

    useEffect(() => {
        if ((thisDecision = decisions.find(({ id }) => id === currentDecision.id) ?? null)) {
            const { id } = mainShapes[activeMap[thisDecision.position]]
            const tempSend: any = { target: { id: id } }
            handleMouseclick(tempSend, thisDecision)
            handleMouseEnter(tempSend)
        }
    }, [currentDecision])

    const Memoized = useMemo(() => {
        return decisions.map((desicion, i) => {
            const { position, decisionImg, id: evID } = desicion
            const { id, d } = mainShapes[activeMap[position]]
            const { origin } = locatorPositions.find(({ target }) => target === id) ?? {
                origin: '0 0',
            }
            const active = !!thisDecision ? thisDecision.id === evID : opened === id
            return (
                <Fragment key={`key${i}-desc.shape.${id}`}>
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
                            xlinkHref={decisionImg}
                        />
                    </g>
                    <path
                        id={id}
                        className={active ? openedStyle() : cssls7}
                        d={d}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleMouseclick({ target: { id: id } }, desicion)}
                    />
                </Fragment>
            )
        })
    }, [opened])
    return <>{Memoized}</>
}
