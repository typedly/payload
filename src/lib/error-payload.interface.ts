/**
 * @description Payload with error details - status, its error code, and description.
 * @export
 * @interface ErrorPayload
 * @template {number} [Code=number] The `number` type of the code, defaults to `number`.
 * @template {string} [Status=string] The `string` type of the status, defaults to `string`.
 */
export interface ErrorPayload<
  Code extends number = number,
  Status extends string = string
> {
  /**
   * @description The numerical code representing the specific error (e.g., HTTP status code or custom error code).
   * @type {Code}
   */
  code: Code;

  /**
   * @description Optional detailed error description.
   * @type {?string}
   */
  description?: string;

  /**
   * @description A descriptive status of the error (e.g., "failed", "pending", "success").
   * @type {Status}
   */
  status: Status;
}
