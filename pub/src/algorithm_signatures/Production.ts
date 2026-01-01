import { Abort } from "../abort"
import { Iterator } from "../interfaces/Iterator"

export type Production<Iterator_Element, Result, Error> = (
    iterator: Iterator<Iterator_Element>,
    abort: Abort<Error>,
) => Result

export type Production_With_Parameters<Iterator_Element, Result, Error, Parameters> = (
    iterator: Iterator<Iterator_Element>,
    abort: Abort<Error>,
    $p: Parameters,
) => Result

export type Production_Without_Error<Iterator_Element, Result> = (
    iterator: Iterator<Iterator_Element>,
) => Result

export type Production_Without_Error_With_Parameters<Iterator_Element, Result, Parameters> = (
    iterator: Iterator<Iterator_Element>,
    $p: Parameters,
) => Result
