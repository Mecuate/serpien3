import { MShapeMAP } from "components/DecisionCanvas/dataCollections";
import { DESCOLOR } from "components/DecisionCanvas/DecisionCanvas";
import { VideoDataType } from "models/video";

export const videoMockData: VideoDataType = {
    root: {
        src: '/nude.mp4',
        poster: '/vid_1.jpg',
        id: 'eeeee',
        shapeMap: MShapeMAP.AARAT,
        decisionColor: DESCOLOR.COLD,
        decisions: [
            {
                id: 'desicion_001',
                start: 32000,
                end: 38000,
                slow: true,
                duration: 42,
            },
            {
                id: 'desicion_002',
                start: 4650,
                end: 10000,
                slow: true,
                duration: 44,
            },
            {
                id: 'desicion_003',
                start: 90000,
                end: 98000,
                slow: true,
                duration: 42,
            },
        ],
    },
    next: {
        [0]: {
            src: '/vid_B.mp4',
            poster: '/vid_2.jpg',
            id: 'aaaaa',
        },
        [1]: {
            src: '/vid_C.mp4',
            poster: '/vid_3.jpg',
            id: 'bbbbb',
        },
    },
}