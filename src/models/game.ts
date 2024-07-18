export type inFn = {
    name: string
    init(
        a: string | number | null,
        b: string | number | null,
        c: string | number | null,
        d: string | number | null
    ): string
}

export type _example = {
    inFn: inFn

    game: {
        pn: string
        _g: inFn
    }
}
