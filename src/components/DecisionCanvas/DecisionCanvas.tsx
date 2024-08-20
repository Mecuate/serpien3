import { Typography } from 'components/Typography'
import {
    ActionSection,
    ContentArea,
    ContentContainer,
    DecisionContainer,
    SVGContainer,
} from './DecisionCanvas.styles'
import { Circlelis } from './Decorators'
import { MainShapes } from './MainShapes'
import { MShapeMAP } from './dataCollections'
import { data, sampleImages } from '__mocks__/decisionsData'

export enum DESCOLOR {
    GOLDEN = 'golden',
    FOREST = 'forest',
    COLD = 'cold',
}

type DecisionCanvasProps = {
    variant?: DESCOLOR
}

export const DecisionCanvas = ({ variant }: DecisionCanvasProps) => {
    return (
        <DecisionContainer variant={variant}>
            <ContentContainer>
                <ContentArea>
                    <Typography.Subtitle>{data[0].title}</Typography.Subtitle>
                    <Typography.HTML
                        id="DescriptionSection"
                        htmlData={data[1].description}
                        style={{
                            textShadow: '#000000aa 1px 1px 1px',
                        }}
                    />
                    <ActionSection id="ActionSection">
                        <button>Clicker!!!</button>
                    </ActionSection>
                </ContentArea>
            </ContentContainer>
            <SVGContainer>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" overflow="visible">
                    <g id="decoirs">{<Circlelis />}</g>
                    <g id="mainShapes">
                        {<MainShapes shapeMap={MShapeMAP.JERAT} imgAssets={sampleImages} />}
                    </g>
                </svg>
            </SVGContainer>
        </DecisionContainer>
    )
}
