export const defineDesicions = (decisions: any[]) => {
    const stopSteps: number[] = decisions.map((decision) => decision.start)
    return { decisions, stopSteps }
}

export const fnEv = (item: number, time: number) => {
    const apx = Math.round(time - item)
    return apx > -50 && apx < 50
}

export const isTimeForDesicion = (stopSteps: number[], timeLineVal: number) => {
    let assigned = -1

    const triggerDecision = stopSteps.some((step, i) => {
        const value = fnEv(step, timeLineVal)
        if (value) {
            assigned = i
            return true
        }
        return false
    })

    return { assigned, triggerDecision }
}

export const getVal = (val: number) => {
    let a = Math.round(val * 100)
    let b = a / 100
    let c = b.toFixed(2)
    let d = parseFloat(c)
    return { limited: d < 0.1 ? 0.1 : d > 1 ? 1 : d, raw: b, round: parseFloat(b.toFixed(1)) }
}

export const smoothRef = (value: number, step: number, step2?: number, value2?: number) => ({
    value: value,
    step: step,
    value2: value2 !== undefined ? value2 : value,
    step2: step2,
    increment: function () {
        this.value = parseFloat((this.value + this.step).toFixed(5))
        if (this.step2 !== undefined) {
            this.value2 = parseFloat((this.value2 + this.step2).toFixed(5))
        }
    },
})
