import { Optional_Value } from "../data/Optional_Value"
import { Abort } from "./Abort"

export type Iterator<Element> = {
    'look': () => Optional_Value<Element>,
    'look ahead': (offset: number) => Optional_Value<Element>
    'consume': (
        abort: Abort<null>
    ) => Element,
    'discard': () => void,
    'get position': () => number,
}