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
import { data, sampleImages } from 'fixtures/decisionsData'
import { DecisionType } from 'models/video'

export enum DESCOLOR {
    GOLDEN = 'golden',
    FOREST = 'forest',
    COLD = 'cold',
}

type DecisionCanvasProps = {
    decisions: DecisionType[]
    decisionColor?: DESCOLOR
    shapeMap?: MShapeMAP
}

export const DecisionCanvas = ({
    decisions,
    decisionColor,
    shapeMap = MShapeMAP.JERAT,
}: DecisionCanvasProps) => {
    return (
        <DecisionContainer variant={decisionColor}>
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
                        {<MainShapes shapeMap={shapeMap} imgAssets={sampleImages} />}
                    </g>
                </svg>
            </SVGContainer>
        </DecisionContainer>
    )
}
