import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetProjectClientCertsRequest, GetProjectClientCertsResponseBody } from "../models/getprojectclientcertsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get client certificates for a project
 *
 * @remarks
 * Retrieve client certificates configured for a project's mTLS egress authentication.
 */
export declare function projectsGetProjectClientCerts(client: VercelCore, request: GetProjectClientCertsRequest, options?: RequestOptions): APIPromise<Result<GetProjectClientCertsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=projectsGetProjectClientCerts.d.ts.map