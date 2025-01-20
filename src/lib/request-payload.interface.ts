// Interface.
import { Payload } from "./payload.interface";
/**
 * @description Represents the type of payload for the requests.
 * @export
 * @interface RequestPayload
 * @template [Data=unknown] The type of data associated with the request.
 */
export interface RequestPayload<Data = unknown> extends Payload<Data> {
  /**
   * @description The data associated with the request (e.g., user data, form data).
   * @type {Data}
   */
  data: Data;
  
  /**
   * @description Optional headers for the request
   * @type {?Record<string, string>}
   */
  headers?: Record<string, string>;
  
  /**
   * @description Optional query parameters.
   * @type {?Record<string, string>}
   */
  queryParams?: Record<string, string>;
  
  /**
   * @description Additional metadata for the request.
   * @type {?Record<string, any>}
   */
  meta?: Record<string, any>;
}
