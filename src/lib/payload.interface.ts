/**
 * @description A generic payload interface for flexibility.
 * @export
 * @interface Payload
 * @template [Data=unknown] The type of the payload data.
 */
export interface Payload<Data = unknown> {
  /**
   * @description General data of generic type variable `Data`.
   * @type {?Data}
   */
  data?: Data;
  
  /**
   * @description Additional metadata of `Record` type.
   * @type {?Record<string, any>}
   */
  meta?: Record<string, any>;
}
