/**
 * @description Payload for a specific action (e.g., updating or adding a user).
 * @export
 * @interface ActionPayload
 * @template [Data=unknown] The type of data related to the action.
 */
export interface ActionPayload<Data = unknown> {
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
}
