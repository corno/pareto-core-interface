import { Non_Void } from "../interfaces/Non_Void"


/**
 * Why this type and not use for example 'null | T'?
 * the 'null | T' is vulnerable. If you have a parametrized function 'foo<T>() null | T' and T is null | number,
 * you cannot discern if a return value is null because of the function or because of the data
 * this 'Optional_Value' type makes it possible to have recursive optional types like this: Optional_Value<Optional_Value<number>>
 */
export interface Optional_Value<T> {
    /**
     * @param set what to do when the value was set, returns the new type
     * @param not_set  what to do when the value was not set, returns the new type
     */
    transform<NT>(
        set: ($: T) => Non_Void<NT>,
        not_set: () => Non_Void<NT>,
    ): NT
    /**
     * 
     */
    map<NT>( //this one should be called 'map'
        set: ($: T) => Non_Void<NT>,
    ): Optional_Value<NT>

    is_set(): boolean

    _extract_data(
        set: ($: T) => void,
        not_set: () => void,
    ): void

}