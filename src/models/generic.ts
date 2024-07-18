export type GenericObject<T> = {
    [key: number | string | symbol]: keyof T
}
