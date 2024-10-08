export const locatorPositions = [
    {
        target: 'A_shape',
        cx: 432,
        cy: 568,
        origin: '260 318',
        r: 187,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'B_shape',
        cx: 224,
        cy: 552,
        origin: '24 280',
        r: -80,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'C_shape',
        cx: 300,
        cy: 244,
        origin: '270 124',
        r: 235,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'D_shape',
        cx: 250,
        cy: 580,
        origin: '150 480',
        r: 205,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'E_shape',
        cx: 475,
        cy: 580,
        origin: '350 500',
        r: -190,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'F_shape',
        cx: 527,
        cy: 472,
        origin: '460 340',
        r: 112,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'G_shape',
        cx: 505,
        cy: 343,
        origin: '470 200',
        r: 65,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'H_shape',
        cx: 518,
        cy: 506,
        origin: '430 450',
        r: 120,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'I_shape',
        cx: 171,
        cy: 240,
        origin: '90 170',
        r: -55,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'J_shape',
        cx: 219,
        cy: 695,
        origin: '150 580',
        r: 190,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'K_shape',
        cx: 514,
        cy: 147,
        origin: '420 70',
        r: 45,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'L_shape',
        cx: 177,
        cy: 208,
        origin: '110 40',
        r: -30,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'M_shape',
        cx: 80,
        cy: 538,
        origin: '10 480',
        r: -130,
        a1: '8,8,0,0,1-9-5.5',
        a2: '8,8,0,0,0-9-5.5',
    },
    {
        target: 'N_shape',
        cx: 435,
        cy: 105,
        origin: '320 -20',
        r: 15,
        a1: '16,16,0,0,1-12-4',
        a2: '16,16,0,0,0-14-3',
    },
    {
        target: 'O_shape',
        cx: 288,
        cy: 64,
        origin: '200 -30',
        r: -15,
        a1: '28,28,0,0,1-14-2',
        a2: '38,38,0,0,0-14-2',
    },
    {
        target: 'P_shape',
        cx: 138,
        cy: 165,
        origin: '-30 120',
        r: -45,
        a1: '18,18,0,0,1-9-5.5',
        a2: '18,18,0,0,0-9-5.5',
    },
]

export enum MShapeMAP {
    AARAT,
    BURAT,
    CARAT,
    DERAT,
    EERAT,
    FERAT,
    GERAT,
    HERAT,
    IERAT,
    JERAT,
    KERAT,
    LARAT,
    MURAT,
}

export const maps = {
    [MShapeMAP.AARAT]: [9, 4, 3, 8, 1, 0, 2, 5, 7, 6, 10, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.BURAT]: [10, 9, 0, 4, 5, 1, 2, 3, 6, 7, 8, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.CARAT]: [0, 3, 2, 4, 9, 1, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.DERAT]: [0, 3, 8, 7, 4, 5, 1, 2, 6, 9, 10, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.EERAT]: [0, 2, 5, 8, 7, 3, 1, 4, 6, 9, 10, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.FERAT]: [10, 3, 2, 6, 4, 0, 1, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.GERAT]: [16, 14, 10, 0, 5, 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 15],
    [MShapeMAP.HERAT]: [9, 4, 5, 2, 3, 0, 1, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.IERAT]: [3, 1, 7, 4, 9, 0, 2, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.JERAT]: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.KERAT]: [14, 1, 0, 2, 5, 4, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16],
    [MShapeMAP.LARAT]: [2, 3, 1, 6, 5, 0, 7, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [MShapeMAP.MURAT]: [0, 1, 13, 7, 6, 2, 3, 4, 5, 8, 9, 10, 11, 12, 14, 15, 16],
}

export const mainShapes = [
    {
        id: 'A_shape',
        d: 'M303,461.09c14,24,13,44,41,68s48.37,33.06,63,43c11.67,7.93,28.47,31.17,55-15,27-47,35.36-60.11,46-92,11-33,19.9-50,21-64,.73-9.38-10.09-19.16-17-25-14-11.79-24.1-24.75-32-29-19.79-10.66-56-1-96,0s-46.37-9.76-64,2c-12,8-43,35-46,42C268.48,404,288.35,436,303,461.09Z',
    },
    {
        id: 'B_shape',
        d: 'M98,320.09c-19,4-52,4-55,22-1.82,10.89-5,62-3,95,1.66,27.41,9.73,60.43,15,68,16,23,24,5,85,28,28.41,10.71,68,32,80,37s24-7,46-19c20.94-11.42,57-20,57-32,0-9.08-12.58-33.54-26-60-13.62-26.85-32.12-60.45-46-68-27.58-15-86-64.87-104-70C133,317.09,118.18,315.84,98,320.09Z',
    },
    {
        id: 'C_shape',
        d: 'M419,126.09c16.2-3.38,51,11,64.57,17.63,6.24,3,13.77,13.87,16.43,22.37,5,16,20.42,58.65,29,72,9,14,8.18,20.89-5,37-18,22-30.31,50.5-40,58-7.92,6.11-14.06.65-29,3-51,8-111.16,9.22-123-6-5.67-7.28-46-60-46-83S395,131.09,419,126.09Z',
    },
    {
        id: 'D_shape',
        d: 'M234.83,577.51c-2.65,6.17,12.42,21.71,21.17,42.58,13,31,7.46,39.42,25,42,34,5,74.95,14.1,87,16,19,3,33.09,7.11,38.09-2.53,4.91-9.47,24.07-63.31,22.91-71.47-2-14-25-30-58-48-31.09-17-30-33-49-25C302,539.51,240.66,563.94,234.83,577.51Z',
    },
    {
        id: 'E_shape',
        d: 'M464,565.09c-17.77,21.87-27,28-30,40-2.77,11.06-25,67-24,84s4,53,11,60c11,11,50.47-1.57,77-8,33-8,67-26,98-46,13.78-8.89-9.7-51.85-28-68-17-15-29.1-19.8-48-36C492,567.09,477,549.09,464,565.09Z',
    },
    {
        id: 'F_shape',
        d: 'M748,367.09c14.15-8.76,12.23,32,10,60-2,25-8.72,51.85-11,61-3,12-3,21-16,29-21,12.94-63,28-83,30-6.3.63-11-2-18-8-10.23-8.77-28.39-20.83-48-31-30.85-16-63-23-67-32-2-4.56,1-15,3-23,4.17-16.69,9-28,15-41,3.7-8,8.06-11.89,14-11,20,3,65.23,0,99-5C680,391.09,727,380.09,748,367.09Z',
    },
    {
        id: 'G_shape',
        d: 'M712,251.09c5.22-.43,15-2.77,19.76,7,9.24,19,19,52.36,22.61,80.62C756,351,756.29,355.08,746,363.09c-9,7-40,16-57,21-15.17,4.46-100,21-138,10-23.31-6.75-45.16-27.95-58-44-12-15,37.31-71.9,47-84,4-5,13.11-12,22-11C607,260.09,673.86,254.24,712,251.09Z',
    },
    {
        id: 'H_shape',
        d: 'M596,520.09c20,13,39,31.43,48,32,11.47.71,44.4-8,64-17,13-6,17.9-8.92,22-4,5,6-18.9,50.2-45,85-26.61,35.46-66.37,73.63-75,65-8-8-13-38-42-60-26.52-20.12-53-35-83-69-8.43-9.55,6.55-37.26,19-58,3-5,8.81-6.33,15.89-5.22C542.13,492.36,581.57,510.71,596,520.09Z',
    },
    {
        id: 'I_shape',
        d: 'M177,228.09c-18.4-3.24-19,3-22,30-3.1,27.83-8.67,43.37,8,62,17,19,70.76,56.12,90,65,13,6,27.44-8.24,40-20,16-15,39.3-22.71,20-56-29-50-32-66-65-68C229.92,240,200.85,232.29,177,228.09Z',
    },
    {
        id: 'J_shape',
        d: 'M199.44,698.83c-12.09-7.6-7.44-11,19.56-16.38s49-20.36,75-15.36,98,19,98,19,13.91-.25,16.15,20.1c2.85,25.9,9.85,50.9-3.15,49.9C391.13,755,297,760.09,199.44,698.83Z',
    },
    {
        id: 'K_shape',
        d: 'M574,92.09c-19,12-48,28.89-67,42-6.49,4.47-9,10-7,17,4.43,15.5,23.5,73,40.26,89S623.43,252,660.71,250.53,714,247.66,717,237.09c4-14-12-36-39-71C654.85,136.09,594.36,79.23,574,92.09Z',
    },
    {
        id: 'L_shape',
        d: 'M153,131.09c23-24,78.74-59.71,96.36-61,13.64-1,48.64,20,56.64,33,8.85,14.39,22.88,43.21,26,65,1,7,0,10-4,16-12.62,18.93-37.25,49.79-52,54-13.69,3.9-61-4-96-13-7.91-2-18.12-5.37-19-10-2.86-15-2-38-7-58C152.07,149.38,146.54,137.83,153,131.09Z',
    },
    {
        id: 'M_shape',
        d: 'M67.89,528.21C77.06,502.38,209.56,565.1,224,578.09c10,9,24,34.71,28,44,3,7,21.44,41.25,2,47s-66.14,20.62-81,9c-6.51-5.09-31.2-26.26-54-54C89.71,588.47,62.33,543.88,67.89,528.21Z',
    },
    {
        id: 'N_shape',
        d: 'M420,40.09c-2.3,3.1-2,28.92-2,36,0,21.22,0,36,10,42,12.74,7.65,48,16.29,57,18s16-3,37-17,54-28,50-37c-3.1-7-29-19-64-30C469.34,39.94,427.09,30.51,420,40.09Z',
    },
    {
        id: 'O_shape',
        d: 'M340,164.09c3,10,26.16-9.84,39.08-19.42s33.11-19.39,34-42c.72-18.06.91-38.56.91-53.59,0-12-4-13.78-15-15-27-3-77.8,7.95-77.8,7.95S242,60.09,263,67.09c17.41,5.8,38.68,17,48,31C321,113.09,333.67,143,340,164.09Z',
    },
    {
        id: 'P_shape',
        d: 'M53,317.09c14.26,5.35,88.85-3.58,91-15,3-16,11-71,11-92,0-31.32-6-63-11-66-10.1-6.06-58,64-70,92S37,311.09,53,317.09Z',
    },
]
export const rectangles = [
    {
        id: 'rect-0',
        d: 'M411.23,14.06S406,13.88,401,13.88s-10,.18-10,.18l-.36-7.37s6.1-.12,10.33-.12,10.57.12,10.57.12Z',
    },
    {
        id: 'rect-1',
        d: 'M370.76,15.1s-5.25.37-10.17.89-9.9,1.22-9.9,1.22l-1.13-7.29s6.05-.76,10.26-1.2,10.53-1,10.53-1Z',
    },
    {
        id: 'rect-2',
        d: 'M84.46,622.64s3,4.33,5.94,8.31,6.09,7.9,6.09,7.9l-5.71,4.68s-3.73-4.83-6.25-8.23-6.2-8.56-6.2-8.56Z',
    },
    {
        id: 'rect-3',
        d: 'M126.53,128.21s-3.74,3.7-7.13,7.31-6.7,7.38-6.7,7.38l-5.62-4.78s4.09-4.53,7-7.61,7.34-7.62,7.34-7.62Z',
    },
    {
        id: 'rect-4',
        d: 'M49.67,239s-2.23,4.76-4.18,9.31-3.76,9.24-3.76,9.24L34.81,255s2.29-5.66,4-9.55S43,235.81,43,235.81Z',
    },
    {
        id: 'rect-5',
        d: 'M378.88,786.57s5.25.34,10.2.49,10,.13,10,.13l.14,7.38s-6.1-.07-10.33-.2-10.56-.44-10.56-.44Z',
    },
    {
        id: 'rect-6',
        d: 'M212.14,738s4.57,2.61,9,4.91,8.91,4.48,8.91,4.48L226.9,754s-5.45-2.73-9.2-4.7-9.3-5-9.3-5Z',
    },
    {
        id: 'rect-7',
        d: 'M248.46,755.86s4.82,2.11,9.42,3.94,9.33,3.52,9.33,3.52l-2.39,7s-5.71-2.14-9.65-3.71-9.77-4-9.77-4Z',
    },
    {
        id: 'rect-8',
        d: 'M760.6,258.62s-1.89-4.91-3.83-9.47-4.07-9.1-4.07-9.1l6.64-3.22s2.5,5.57,4.16,9.46,4,9.77,4,9.77Z',
    },
    {
        id: 'rect-9',
        d: 'M286.4,769.84s5,1.6,9.78,2.94,9.64,2.52,9.64,2.52l-1.64,7.2s-5.91-1.54-10-2.68-10.15-3-10.15-3Z',
    },
    {
        id: 'rect-10',
        d: 'M178.94,717.1s4.28,3.06,8.41,5.79,8.41,5.36,8.41,5.36L192,734.59s-5.15-3.27-8.68-5.61-8.74-5.93-8.74-5.93Z',
    },
    {
        id: 'rect-11',
        d: 'M786.42,430.69s.46-5.24.71-10.19.33-10,.33-10l7.38,0s-.19,6.1-.41,10.33-.66,10.55-.66,10.55Z',
    },
    {
        id: 'rect-12',
        d: 'M696.94,649.33s3.42-4,6.5-7.88,6.07-7.91,6.07-7.91l6,4.31s-3.7,4.85-6.34,8.16-6.68,8.19-6.68,8.19Z',
    },
    {
        id: 'rect-13',
        d: 'M721.33,617s3-4.33,5.64-8.51,5.21-8.5,5.21-8.5l6.41,3.66s-3.18,5.21-5.45,8.77-5.79,8.85-5.79,8.85Z',
    },
    {
        id: 'rect-14',
        d: 'M34.77,276.48s-1.73,5-3.19,9.7-2.78,9.58-2.78,9.58l-7.15-1.83s1.69-5.87,2.94-9.91S27.84,274,27.84,274Z',
    },
    {
        id: 'rect-15',
        d: 'M17.07,354.54s-.67,5.21-1.13,10.15-.74,9.94-.74,9.94l-7.37-.32s.44-6.09.83-10.3,1.1-10.52,1.1-10.52Z',
    },
    {
        id: 'rect-16',
        d: 'M704,160.45s-3.24-4.15-6.41-7.94-6.54-7.54-6.54-7.54l5.42-5s4,4.6,6.72,7.85,6.69,8.18,6.69,8.18Z',
    },
    {
        id: 'rect-17',
        d: 'M207.88,65.58s-4.58,2.59-8.8,5.18-8.41,5.36-8.41,5.36L186.51,70s5.14-3.29,8.75-5.49,9.08-5.42,9.08-5.42Z',
    },
    {
        id: 'rect-18',
        d: 'M467.23,781.48s5.19-.86,10-1.84,9.74-2.15,9.74-2.15l1.81,7.16s-6,1.32-10.1,2.16-10.39,2-10.39,2Z',
    },
    {
        id: 'rect-19',
        d: 'M506.7,772.46s5.07-1.4,9.79-2.88,9.46-3.15,9.46-3.15l2.55,6.92s-5.78,1.94-9.82,3.21-10.13,3-10.13,3Z',
    },
    {
        id: 'rect-20',
        d: 'M667.36,120.34s-3.78-3.65-7.46-7-7.53-6.54-7.53-6.54l4.67-5.71s4.61,4,7.75,6.82,7.77,7.17,7.77,7.17Z',
    },
    {
        id: 'rect-21',
        d: 'M765.86,528.37s1.78-5,3.29-9.66,2.88-9.55,2.88-9.55l7.12,1.9s-1.74,5.85-3,9.88-3.34,10-3.34,10Z',
    },
    {
        id: 'rect-22',
        d: 'M777.23,489.52s1.25-5.11,2.26-10,1.86-9.8,1.86-9.8l7.29,1.15s-1.13,6-2,10.14-2.28,10.33-2.28,10.33Z',
    },
    {
        id: 'rect-23',
        d: 'M286.14,31.36s-5,1.52-9.72,3.12S267,37.86,267,37.86L264.32,31s5.74-2.08,9.74-3.44,10.05-3.29,10.05-3.29Z',
    },
    {
        id: 'rect-24',
        d: 'M519.41,32.51s-5-1.65-9.74-3-9.62-2.63-9.62-2.63l1.72-7.17s5.89,1.6,10,2.78,10.11,3.09,10.11,3.09Z',
    },
    {
        id: 'rect-25',
        d: 'M480.28,22.14s-5.14-1.12-10-2-9.84-1.61-9.84-1.61l1-7.32s6,1,10.19,1.74S482,15,482,15Z',
    },
    {
        id: 'rect-26',
        d: 'M34.81,524.77s1.65,5,3.37,9.64,3.62,9.29,3.62,9.29L35,546.59s-2.23-5.68-3.69-9.65-3.55-10-3.55-10Z',
    },
    {
        id: 'rect-27',
        d: 'M592.27,64.57s-4.55-2.64-8.92-5-8.88-4.54-8.88-4.54l3.16-6.67s5.44,2.77,9.17,4.77,9.26,5.09,9.26,5.09Z',
    },
    {
        id: 'rect-28',
        d: 'M556.09,46.41s-4.8-2.15-9.39-4-9.31-3.59-9.31-3.59l2.44-7s5.7,2.18,9.62,3.78,9.75,4.09,9.75,4.09Z',
    },
    {
        id: 'rect-29',
        d: 'M17.14,447.16s.59,5.23,1.32,10.12,1.64,9.84,1.64,9.84l-7.24,1.44s-1-6-1.63-10.2-1.44-10.48-1.44-10.48Z',
    },
    {
        id: 'rect-30',
        d: 'M61.67,215.15s-2.55,4.6-4.81,9-4.39,9-4.39,9l-6.72-3s2.67-5.48,4.6-9.25,4.93-9.35,4.93-9.35Z',
    },
    {
        id: 'rect-31',
        d: 'M91.12,169.28s-3.18,4.19-6,8.24-5.61,8.25-5.61,8.25l-6.23-4s3.42-5.05,5.86-8.51,6.2-8.57,6.2-8.57Z',
    },
    {
        id: 'rect-32',
        d: 'M744.86,577.26s2.44-4.65,4.58-9.12,4.16-9.06,4.16-9.06l6.8,2.86s-2.53,5.56-4.37,9.37-4.69,9.47-4.69,9.47Z',
    },
    {
        id: 'rect-33',
        d: 'M573.64,746.5s4.72-2.31,9.09-4.64,8.72-4.85,8.72-4.85l3.78,6.33s-5.33,3-9.06,5-9.39,4.86-9.39,4.86Z',
    },
    {
        id: 'rect-34',
        d: 'M786.38,369.86s-.38-5.25-.9-10.17-1.24-9.9-1.24-9.9l7.29-1.14s.77,6.05,1.22,10.26,1,10.53,1,10.53Z',
    },
    {
        id: 'rect-35',
        d: 'M151.3,695.79s4,3.43,7.86,6.53,7.89,6.09,7.89,6.09l-4.32,6s-4.84-3.72-8.14-6.37-8.18-6.7-8.18-6.7Z',
    },
    {
        id: 'rect-36',
        d: 'M656.4,690.8s4-3.44,7.6-6.81,7.19-6.92,7.19-6.92l5.28,5.16s-4.39,4.24-7.49,7.12-7.83,7.1-7.83,7.1Z',
    },
]

export const squares = [
    {
        id: 'sqr-0',
        d: 'M422.18,14.5s-2-.15-3.72-.23-3.63-.1-3.63-.1l.32-7.37,3.64.17,3.73.17Z',
    },
    {
        id: 'sqr-1',
        d: 'M78.29,613.59s1.06,1.67,2,3.11,2.09,3,2.09,3l-6.11,4.12-2-3-2.08-3.09Z',
    },
    {
        id: 'sqr-2',
        d: 'M103.46,647.52s1.23,1.55,2.36,2.88,2.4,2.74,2.4,2.74l-5.62,4.76-2.36-2.78-2.41-2.84Z',
    },
    {
        id: 'sqr-3',
        d: 'M110.84,656.15s1.28,1.51,2.44,2.81,2.48,2.66,2.48,2.66l-5.48,4.93-2.44-2.71-2.49-2.77Z',
    },
    {
        id: 'sqr-4',
        d: 'M122.43,668.73s1.34,1.45,2.56,2.7,2.59,2.55,2.59,2.55l-5.25,5.17-2.55-2.6-2.61-2.66Z',
    },
    {
        id: 'sqr-5',
        d: 'M75.68,191.55s-1.1,1.64-2,3.12-1.89,3.11-1.89,3.11l-6.24-3.92,1.94-3.08,2-3.16Z',
    },
    {
        id: 'sqr-6',
        d: 'M368,785.79s2,.21,3.71.34,3.63.22,3.63.22l-.55,7.35-3.63-.28-3.72-.28Z',
    },
    {
        id: 'sqr-7',
        d: 'M410.19,787.09s2,0,3.72-.06,3.63-.18,3.63-.18l.25,7.36-3.64.13-3.72.12Z',
    },
    {
        id: 'sqr-8',
        d: 'M421.53,786.66s2-.07,3.72-.18,3.62-.29,3.62-.29l.47,7.36-3.64.23L422,794Z',
    },
    {
        id: 'sqr-9',
        d: 'M438.58,785.37s2-.15,3.71-.34,3.61-.45,3.61-.45l.8,7.33-3.63.39-3.7.4Z',
    },
    {
        id: 'sqr-10',
        d: 'M202.66,732.48s1.67,1,3.18,1.93,3.17,1.78,3.17,1.78l-3.71,6.37-3.15-1.84-3.22-1.88Z',
    },
    {
        id: 'sqr-11',
        d: 'M764.2,268.1s-.63-1.87-1.25-3.5-1.33-3.39-1.33-3.39l6.89-2.6L769.8,262l1.31,3.49Z',
    },
    {
        id: 'sqr-12',
        d: 'M778.6,317.6s-.39-1.94-.78-3.64-.87-3.53-.87-3.53l7.18-1.66.82,3.55.83,3.63Z',
    },
    {
        id: 'sqr-13',
        d: 'M538.28,762s1.86-.67,3.49-1.3,3.36-1.38,3.36-1.38l2.69,6.86-3.39,1.33L541,768.86Z',
    },
    {
        id: 'sqr-14',
        d: 'M276,766.45s1.86.67,3.51,1.22,3.48,1.09,3.48,1.09l-2.31,7-3.46-1.15-3.54-1.17Z',
    },
    {
        id: 'sqr-15',
        d: 'M785.42,441.6s.25-2,.42-3.7.29-3.62.29-3.62l7.34.7-.36,3.63-.36,3.71Z',
    },
    {
        id: 'sqr-16',
        d: 'M787.57,395.66s0-2,0-3.72-.14-3.64-.14-3.64l7.37-.17.08,3.64.08,3.73Z',
    },
    {
        id: 'sqr-17',
        d: 'M787.26,384.31s0-2-.13-3.72-.25-3.63-.25-3.63l7.36-.38.19,3.63.19,3.73Z',
    },
    {
        id: 'sqr-18',
        d: 'M767.57,277.72s-.59-1.88-1.16-3.53-1.25-3.42-1.25-3.42l7-2.42,1.19,3.45,1.22,3.52Z',
    },
    {
        id: 'sqr-19',
        d: 'M689.78,657.62s1.34-1.45,2.49-2.77,2.34-2.78,2.34-2.78l5.56,4.84-2.39,2.75-2.45,2.81Z',
    },
    {
        id: 'sqr-20',
        d: 'M38.43,266.15s-.72,1.84-1.32,3.48-1.17,3.45-1.17,3.45L29,270.59l1.23-3.43,1.27-3.51Z',
    },
    {
        id: 'sqr-21',
        d: 'M25.93,306.51s-.52,1.91-.93,3.61-.79,3.55-.79,3.55L17,312l.85-3.54.87-3.63Z',
    },
    {
        id: 'sqr-22',
        d: 'M23.33,317.56s-.46,1.92-.82,3.63-.69,3.57-.69,3.57l-7.22-1.5.75-3.57.77-3.65Z',
    },
    {
        id: 'sqr-23',
        d: 'M20,334.35s-.38,1.93-.66,3.66-.53,3.6-.53,3.6l-7.28-1.19.59-3.59.61-3.68Z',
    },
    {
        id: 'sqr-24',
        d: 'M18.52,343.68s-.33,1.95-.57,3.67-.44,3.62-.44,3.62l-7.3-1,.5-3.61.51-3.69Z',
    },
    {
        id: 'sqr-25',
        d: 'M14.6,385.75s-.12,2-.17,3.71,0,3.64,0,3.64L7,392.9l.11-3.65.1-3.72Z',
    },
    {
        id: 'sqr-26',
        d: 'M14.33,397.09s-.06,2-.06,3.73.07,3.63.07,3.63H7v-7.37Z',
    },
    {
        id: 'sqr-27',
        d: 'M14.56,414.2s0,2,.1,3.72.23,3.63.23,3.63l-7.37.34-.16-3.64-.17-3.73Z',
    },
    {
        id: 'sqr-28',
        d: 'M710.69,169.13s-1.15-1.6-2.21-3-2.25-2.86-2.25-2.86l5.86-4.47,2.21,2.9,2.26,3Z',
    },
    {
        id: 'sqr-29',
        d: 'M683.59,136.72s-1.32-1.47-2.52-2.74-2.55-2.59-2.55-2.59l5.33-5.09,2.52,2.64,2.57,2.7Z',
    },
    {
        id: 'sqr-30',
        d: 'M675.72,128.54s-1.36-1.44-2.6-2.66-2.62-2.52-2.62-2.52l5.18-5.24,2.59,2.56,2.65,2.63Z',
    },
    {
        id: 'sqr-31',
        d: 'M718.2,179.54s-1.1-1.65-2.11-3.07-2.15-2.93-2.15-2.93l6-4.28,2.11,3,2.16,3Z',
    },
    {
        id: 'sqr-32',
        d: 'M217.45,60.24s-1.76.91-3.29,1.75S211,63.8,211,63.8l-3.56-6.45,3.19-1.76,3.26-1.8Z',
    },
    {
        id: 'sqr-33',
        d: 'M181.41,82.3s-1.65,1.09-3.08,2.09-2.94,2.15-2.94,2.15l-4.25-6,3-2.09,3-2.15Z',
    },
    {
        id: 'sqr-34',
        d: 'M172.16,88.88s-1.62,1.14-3,2.18-2.88,2.23-2.88,2.23l-4.42-5.89,2.91-2.19,3-2.23Z',
    },
    {
        id: 'sqr-35',
        d: 'M158.6,99.31s-1.57,1.2-2.92,2.31-2.77,2.35-2.77,2.35l-4.68-5.69L151.05,96l2.88-2.37Z',
    },
    {
        id: 'sqr-36',
        d: 'M456.41,783.21s2-.25,3.68-.51,3.59-.62,3.59-.62l1.13,7.28-3.6.56-3.68.57Z',
    },
    {
        id: 'sqr-37',
        d: 'M640,704.49s1.58-1.19,2.94-2.28,2.8-2.32,2.8-2.32l4.62,5.75-2.84,2.28-2.91,2.33Z',
    },
    {
        id: 'sqr-38',
        d: 'M732.6,201.8s-1-1.71-1.89-3.2-2-3.07-2-3.07l6.28-3.86,1.9,3.11,1.95,3.18Z',
    },
    {
        id: 'sqr-39',
        d: 'M619.31,719.64s1.66-1.08,3.09-2.08,2.94-2.13,2.94-2.13l4.23,6-3,2.09-3.05,2.13Z',
    },
    {
        id: 'sqr-40',
        d: 'M745.47,225s-.86-1.77-1.67-3.32-1.74-3.2-1.74-3.2l6.54-3.42,1.68,3.24,1.73,3.3Z',
    },
    {
        id: 'sqr-41',
        d: 'M643.82,99.71s-1.51-1.27-2.88-2.36-2.89-2.21-2.89-2.21l4.57-5.78,2.85,2.26,2.93,2.31Z',
    },
    {
        id: 'sqr-42',
        d: 'M634.88,92.71s-1.55-1.23-3-2.27S629,88.31,629,88.31l4.4-5.91,2.92,2.17,3,2.23Z',
    },
    {
        id: 'sqr-43',
        d: 'M621,82.66s-1.6-1.15-3-2.13-3-2-3-2l4.13-6.1,3,2,3.09,2.1Z',
    },
    {
        id: 'sqr-44',
        d: 'M762.1,538.66s.74-1.83,1.35-3.46,1.21-3.43,1.21-3.43l6.91,2.56-1.27,3.41-1.3,3.5Z',
    },
    {
        id: 'sqr-45',
        d: 'M296.65,28.25s-1.91.5-3.59,1-3.48,1.08-3.48,1.08l-2.06-7.08,3.5-1,3.58-1Z',
    },
    {
        id: 'sqr-46',
        d: 'M256.65,41.86s-1.85.7-3.46,1.37-3.34,1.44-3.34,1.44L247,37.86l3.36-1.39L253.84,35Z',
    },
    {
        id: 'sqr-47',
        d: 'M246.18,46.25s-1.83.75-3.42,1.47-3.29,1.54-3.29,1.54l-3-6.72,3.32-1.49,3.4-1.53Z',
    },
    {
        id: 'sqr-48',
        d: 'M230.66,53.44s-1.79.84-3.35,1.62-3.22,1.69-3.22,1.69l-3.32-6.59L224,48.53l3.33-1.68Z',
    },
    {
        id: 'sqr-49',
        d: 'M529.8,36s-1.85-.7-3.5-1.27-3.46-1.12-3.46-1.12l2.38-7,3.45,1.18,3.52,1.2Z',
    },
    {
        id: 'sqr-50',
        d: 'M31.44,514.34s.54,1.9,1.07,3.57,1.16,3.44,1.16,3.44l-7,2.25-1.11-3.48-1.13-3.55Z',
    },
    {
        id: 'sqr-51',
        d: 'M46.06,554s.74,1.83,1.45,3.43,1.53,3.3,1.53,3.3l-6.73,3-1.48-3.33L39.32,557Z',
    },
    {
        id: 'sqr-52',
        d: 'M50.72,564.34s.8,1.8,1.55,3.38S53.9,571,53.9,571l-6.65,3.19-1.57-3.28-1.61-3.36Z',
    },
    {
        id: 'sqr-53',
        d: 'M58.3,579.67s.88,1.77,1.7,3.3,1.77,3.18,1.77,3.18l-6.49,3.49-1.72-3.22-1.76-3.28Z',
    },
    {
        id: 'sqr-54',
        d: 'M601.71,70.12s-1.66-1.06-3.16-2-3.16-1.81-3.16-1.81L599.15,60l3.13,1.86,3.21,1.91Z',
    },
    {
        id: 'sqr-55',
        d: 'M16,436.27s.14,2,.32,3.7.43,3.61.43,3.61l-7.33.76L9,440.72,8.64,437Z',
    },
    {
        id: 'sqr-56',
        d: 'M22.16,478.06s.36,1.94.73,3.65.82,3.54.82,3.54l-7.21,1.56-.76-3.57L15,479.6Z',
    },
    {
        id: 'sqr-57',
        d: 'M24.6,489.15s.41,1.93.83,3.62.93,3.52.93,3.52l-7.16,1.77-.87-3.54-.89-3.62Z',
    },
    {
        id: 'sqr-58',
        d: 'M28.89,505.71s.5,1.91,1,3.58S31,512.77,31,512.77l-7.07,2.08-1-3.5-1.05-3.58Z',
    },
    {
        id: 'sqr-59',
        d: 'M68.44,203.26s-1,1.68-1.92,3.19-1.77,3.18-1.77,3.18l-6.38-3.7,1.83-3.15,1.87-3.22Z',
    },
    {
        id: 'sqr-60',
        d: 'M782.89,460.72s.35-2,.61-3.67.47-3.61.47-3.61l7.29,1.07-.53,3.6-.55,3.69Z',
    },
    {
        id: 'sqr-61',
        d: 'M758,548.86s.79-1.8,1.45-3.42,1.31-3.4,1.31-3.4l6.83,2.76-1.36,3.38-1.4,3.45Z',
    },
    {
        id: 'sqr-62',
        d: 'M787.54,407.34s.08-2,.09-3.72,0-3.64,0-3.64l7.37,0,0,3.65,0,3.72Z',
    },
    {
        id: 'sqr-63',
        d: 'M548.38,758s1.84-.71,3.45-1.39,3.33-1.48,3.33-1.48l2.88,6.79-3.36,1.42-3.43,1.45Z',
    },
    {
        id: 'sqr-64',
        d: 'M103.71,153.3s-1.29,1.49-2.39,2.84S99.06,159,99.06,159l-5.71-4.65,2.3-2.83L98,148.64Z',
    },
    {
        id: 'sqr-65',
        d: 'M333.82,19.79s-1.95.3-3.67.62-3.56.73-3.56.73l-1.36-7.25,3.58-.66,3.67-.69Z',
    },
    {
        id: 'sqr-66',
        d: 'M323.15,21.83s-1.95.36-3.65.72-3.55.83-3.55.83l-1.56-7.2,3.57-.77,3.64-.79Z',
    },
    {
        id: 'sqr-67',
        d: 'M313.18,24s-1.93.41-3.62.82-3.52.92-3.52.92l-1.75-7.16,3.54-.86,3.62-.88Z',
    },
    {
        id: 'sqr-68',
        d: 'M782.63,338.77s-.27-1.95-.57-3.67-.67-3.58-.67-3.58l7.26-1.25.62,3.59.63,3.67Z',
    },
    {
        id: 'sqr-69',
        d: 'M780.75,328.08s-.33-1.95-.68-3.66-.77-3.55-.77-3.55l7.22-1.46.72,3.57.74,3.66Z',
    },
    {
        id: 'sqr-70',
        d: 'M597.26,733.67s1.72-1,3.22-1.87,3.08-1.93,3.08-1.93l3.81,6.31-3.12,1.88L601.06,740Z',
    },
    {
        id: 'sqr-71',
        d: 'M143,688.6s1.44,1.35,2.75,2.5,2.77,2.36,2.77,2.36L143.71,699,141,696.6l-2.8-2.46Z',
    },
    {
        id: 'sqr-72',
        d: 'M322.12,779.08s1.92.44,3.64.78,3.58.65,3.58.65l-1.43,7.23-3.57-.71-3.66-.72Z',
    },
    {
        id: 'sqr-73',
        d: 'M333.27,781.23s1.93.39,3.65.68,3.6.54,3.6.54l-1.21,7.27-3.6-.6L332,788.5Z',
    },
    {
        id: 'sqr-74',
        d: 'M350.17,783.85s1.95.3,3.68.52,3.62.38,3.62.38l-.89,7.32-3.62-.45-3.7-.45Z',
    },
    {
        id: 'sqr-75',
        d: 'M648.07,697.93s1.55-1.23,2.88-2.36,2.74-2.4,2.74-2.4l4.77,5.62-2.78,2.36-2.85,2.41Z',
    },
    {
        id: 'sqr-76',
        d: 'M679.05,669.19s1.4-1.39,2.6-2.66,2.46-2.68,2.46-2.68l5.35,5.06L687,671.56l-2.56,2.7Z',
    },
    {
        id: 'sqr-77',
        d: 'M739.44,587.43s1-1.71,1.82-3.24,1.68-3.23,1.68-3.23l6.49,3.49-1.73,3.21-1.77,3.28Z',
    },
    {
        id: 'sqr-78',
        d: 'M734.16,596.7s1-1.69,1.91-3.2,1.76-3.18,1.76-3.18l6.39,3.67-1.81,3.16-1.86,3.23Z',
    },
]
