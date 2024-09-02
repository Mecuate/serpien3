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
import { DecisionType } from 'models/video'
import { HexagonLoader } from 'components/HexagonLoader'
import { useCallback, useState } from 'react'
import { Button } from 'components/Button'

export enum DESCOLOR {
    WHITE = 'white',
    GOLDEN = 'golden',
    FOREST = 'forest',
    COLD = 'cold',
}

type DecisionCanvasProps = {
    pausedTime: number
    decisions: DecisionType[]
    currentDecision: DecisionType
    updateDecisionSelected: (decision: DecisionType) => void
    resumePlay?: () => void
    decisionColor?: DESCOLOR
    shapeMap?: MShapeMAP
}

export const DecisionCanvas = ({
    decisions,
    currentDecision,
    updateDecisionSelected,
    pausedTime,
    decisionColor,
    resumePlay,
    shapeMap = MShapeMAP.JERAT,
}: DecisionCanvasProps) => {
    return (
        <DecisionContainer variant={decisionColor}>
            <HexagonLoader
                action={resumePlay}
                showButton={!currentDecision.playAtEnd}
                color={decisionColor}
                num={pausedTime}
            />
            <DecisionUI
                decisions={decisions}
                currentDecision={currentDecision}
                updateDecisionSelected={updateDecisionSelected}
                shapeMap={shapeMap}
            />
        </DecisionContainer>
    )
}

type DecisionUIProps = {
    decisions: DecisionType[]
    currentDecision: DecisionType
    updateDecisionSelected: (decision: DecisionType) => void
    shapeMap: MShapeMAP
}

const DecisionUI = ({
    decisions,
    currentDecision,
    updateDecisionSelected,
    shapeMap,
}: DecisionUIProps) => {
    const [openedItem, setOpenedItem] = useState('')
    const [isUserOver, setIsUserOver] = useState(true)
    const [previewedDecision, setPreviewDecision] = useState(currentDecision)

    const handleDecisionHover = (hov: boolean, id: string) => {
        setIsUserOver(hov)
    }
    const handleDecisionPreview = (decision: string) => {
        setOpenedItem(decision)
    }
    const setPreviewedDecision = useCallback((decision: DecisionType) => {
        updateDecisionSelected(decision)
        setPreviewDecision(decision)
    }, [])

    return (
        <>
            <ContentContainer>
                <ContentArea>
                    <Typography.Subtitle className="title-target">
                        {previewedDecision.decisionTitle}
                    </Typography.Subtitle>
                    <Typography.HTML
                        id="DescriptionSection"
                        htmlData={previewedDecision.decisionContent}
                        style={{
                            textShadow: '#000000aa 1px 1px 1px',
                        }}
                    />
                    <ActionSection id="ActionSection">
                        <Button.RoundAction
                            size="big"
                            action={() => {
                                const linkto =
                                    previewedDecision.decisionAction?.replace('nav|', '') ?? ''
                                window.location.assign(linkto)
                            }}
                            icon="play"
                        />
                    </ActionSection>
                </ContentArea>
            </ContentContainer>
            <SVGContainer>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" overflow="visible">
                    <g id="decoirs">{<Circlelis />}</g>
                    <g id="mainShapes">
                        {
                            <MainShapes
                                shapeMap={shapeMap}
                                decisions={decisions}
                                currentDecision={currentDecision}
                                setIsUserOver={handleDecisionHover}
                                setOpenedItem={handleDecisionPreview}
                                isUserOver={isUserOver}
                                openedItem={openedItem}
                                setPreviewedDecision={setPreviewedDecision}
                            />
                        }
                    </g>
                </svg>
            </SVGContainer>
        </>
    )
}
