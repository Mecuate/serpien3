import { Circlelis } from './Decorators'
import { MainShapes } from './MainShapes'

type DecisionCanvasProps = {
    variant: string
}

export const DecisionCanvas = ({ variant }: DecisionCanvasProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
            <g id="decoirs">{<Circlelis />}</g>
            <g id="mainShapes">{<MainShapes />}</g>
        </svg>
    )
}
