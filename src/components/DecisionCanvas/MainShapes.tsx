import { useEffect, useState, MouseEventHandler, useMemo } from 'react'
import { mainShapes } from './dataCollections'
import { cssls_2, cssls_6, cssls_7, cssls_8, cssls_9 } from './DecisionCanvas.styles'

const locatorPositions = [
    { target: 'B_shape', cx: 224, cy: 552, r: 135, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'A_shape', cx: 432, cy: 568, r: 45, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'I_shape', cx: 171, cy: 240, r: 55, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'G_shape', cx: 505, cy: 343, r: 65, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'F_shape', cx: 527, cy: 472, r: 75, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'H_shape', cx: 518, cy: 506, r: 85, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'E_shape', cx: 475, cy: 580, r: 95, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'J_shape', cx: 219, cy: 695, r: 105, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'L_shape', cx: 177, cy: 208, r: 135, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'C_shape', cx: 300, cy: 244, r: 235, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'K_shape', cx: 514, cy: 147, r: 275, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'D_shape', cx: 250, cy: 580, r: 350, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'M_shape', cx: 80, cy: 538, r: 30, a1: '8,8,0,0,1-9-5.5', a2: '8,8,0,0,0-9-5.5' },
    { target: 'N_shape', cx: 435, cy: 105, r: 90, a1: '16,16,0,0,1-12-4', a2: '16,16,0,0,0-14-3' },
    {
        target: 'P_shape',
        cx: 138,
        cy: 165,
        r: 75,
        a1: '18,18,0,0,1-9-5.5',
        a2: '18,18,0,0,0-9-5.5',
    },
    { target: 'O_shape', cx: 288, cy: 64, r: 15, a1: '28,28,0,0,1-14-2', a2: '38,38,0,0,0-14-2' },
]

export const MainShapes = () => {
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
        // setRotVal(Math.random() * 360)
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

    useEffect(() => {}, [])

    return (
        <>
            <BakedShapes handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            {isUserOver && (
                <>
                    <path
                        id="locatorPositionVectorLine"
                        className={cssls_6()}
                        d={`M${CX},${CY}H-26.51a${A1}L-210,30a${A2}H-496`}
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
}

const BakedShapes = ({ handleMouseEnter, handleMouseLeave }: BakedShapesProps) => {
    const cssls7 = cssls_7()

    return useMemo(() => {
        return mainShapes.map(({ id, d }) => {
            // const y = Math.random()
            // if (y > 0.5) {
            //     return null
            // }
            return (
                <path
                    key={id}
                    id={id}
                    className={cssls7}
                    d={d}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            )
        })
    }, [])
}
