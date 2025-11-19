import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DeleteProjectClientCertRequest, DeleteProjectClientCertResponseBody } from "../models/deleteprojectclientcertop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete client certificate for egress mTLS
 *
 * @remarks
 * Delete a client certificate for mTLS authentication to external origins.
 */
export declare function projectsDeleteProjectClientCert(client: VercelCore, request: DeleteProjectClientCertRequest, options?: RequestOptions): APIPromise<Result<DeleteProjectClientCertResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=projectsDeleteProjectClientCert.d.ts.map