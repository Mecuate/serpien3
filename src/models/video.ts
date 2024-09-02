import { MShapeMAP } from 'components/DecisionCanvas/dataCollections'
import { DESCOLOR } from 'components/DecisionCanvas/DecisionCanvas'

export type DTT = 'info' | 'video' | 'audio' | 'image' | 'inter'

export type DecisionType = {
    id: string
    position: number
    start: number
    end: number
    slow: boolean
    playAtEnd?: boolean
    duration: number
    decisionType: DTT
    decisionTitle?: string
    decisionContent?: string
    decisionAction?: string
    decisionImg?: string
}

export type VideoDataType = {
    src: string
    poster: string
    id: string
    shapeMap: MShapeMAP
    decisionColor: DESCOLOR
    autoplay: boolean
    muted: boolean
    keepAsPlayback: boolean
    decisions: DecisionType[]
}
// next: {
//     [key: number]: {
//         src: string
//         poster: string
//         id: string
//     }
// }
