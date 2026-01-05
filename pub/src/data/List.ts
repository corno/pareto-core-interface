import { Abort } from "../interfaces/Abort"
import { Optional_Value } from "./Optional_Value"

/**
 * A List for Pareto.
 * unmutable and minimal by design
 */
export interface List<T> {
    /**
     * 
     * @param handle_element callback to transform an individual entry.
     */
    map<NT>(
        handle_element: ($: T) => NT,
    ): List<NT>

    __get_number_of_elements(): number

    __get_possible_element_at(index: number): Optional_Value<T>
    
    __get_element_at(
        index: number,
        abort: Abort<null>
    ): T

    /**
     * This method is only to be used by resources
     * iterates over all entries
     * 
     * @param $handle_value callback to process the entry
     */
    __for_each(
        handle_element: ($: T) => void
    ): void

    __get_raw_copy(): readonly T[]

}