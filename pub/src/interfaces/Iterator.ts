import { Optional_Value } from "../data/Optional_Value"
import { Abort } from "./Abort"

export type Iterator<Element> = {
    'look': () => Optional_Value<Element>,
    'look ahead': (offset: number) => Optional_Value<Element>
    'consume': <T>(
        callback: (value: Element, position: number) => T,
        abort: Abort<number>
    ) => T,
    'discard': <T>(
        callback: () => T
    ) => T,
    'get position': () => number,
    'assert finished': <T>(
        callback: () => T,
        abort: Abort<null>
    ) => T
}