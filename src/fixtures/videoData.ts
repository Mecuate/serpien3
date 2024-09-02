import { MShapeMAP } from 'components/DecisionCanvas/dataCollections'
import { DESCOLOR } from 'components/DecisionCanvas/DecisionCanvas'
import { VideoDataType } from 'models/video'

export const videoMockData: VideoDataType = {
    src: '/inicio.mp4',
    poster: '/inicio.jpg',
    id: '000010001000100010001',
    shapeMap: MShapeMAP.KERAT,
    decisionColor: DESCOLOR.WHITE,
    autoplay: true,
    muted: false,
    keepAsPlayback: false,
    decisions: [],
}
