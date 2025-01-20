/**
 * @description A generic payload interface.
 * @export
 * @interface Payload
 * @template [Data=unknown] The type of the payload data. Defaults to, `unknown`.
 */
export interface Payload<Data = unknown> {
  /**
   * @description General data of generic type variable `Data`.
   * Example: 
   * @type {?Data}
   */
  data?: Data;
  
  /**
   * @description The descriptive information about the `data` of `Record` type.
   * Example: 
   * @type {?Record<string, any>}
   */
  meta?: Record<string, any>;
}
