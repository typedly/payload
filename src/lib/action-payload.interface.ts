// Interface.
import { Payload } from "./payload.interface";
/**
 * @description Payload for a specific action (e.g., updating or adding a user). Provides the data associated with performing the action.
 * @export
 * @interface ActionPayload
 * @template [Data=unknown] The type of data related to the action.
 * @template {string} [Status=string] The type of action `status`. Defaults to, `string`.
 * @extends {Payload<Data>}
 */
export interface ActionPayload<
  Data = unknown,
  Status extends string = string
> extends Payload<Data> {
  /**
   * @description The data related to the action (e.g., user data, form data).
   * @type {Data}
   */
  data: Data;

  /**
   * @description Optional ID (e.g., user ID).
   * @type {?(string | number)}
   */
  id?: string | number;

  /**
   * @description A descriptive status of the error (e.g., "failed", "pending", "success").
   * @type {Status}
   */
  status: Status;
}
