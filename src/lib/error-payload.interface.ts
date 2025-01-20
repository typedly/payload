// Interface.
import { Payload } from "./payload.interface";
/**
 * @description Payload with error details - status, its error code, and description.
 * @export
 * @interface ErrorPayload
 * @template [Data=unknown] 
 * @template {number} [Code=number] The `number` type of the code, defaults to `number`.
 * @template {string} [Status=string] The `string` type of the status, defaults to `string`.
 * @extends {Payload<Data>}
 */
export interface ErrorPayload<
  Data = unknown,
  Code extends number = number,
  Status extends string = string
> extends Payload<Data> {
  /**
   * @description The numerical code representing the specific error (e.g., HTTP status code or custom error code).
   * Example: 400, 401
   * @type {Code}
   */
  code: Code;

  /**
   * @description Optional detailed error description.
   * @type {?string}
   */
  description?: string;

  /**
   * @description A descriptive status of the error `code` (e.g., Client error responses, Server error responses).
   * Example: "Bad Request", "Unauthorized", "Forbidden".
   * @type {Status}
   */
  status: Status;
}
