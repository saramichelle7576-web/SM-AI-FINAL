import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteProjectClientCertRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The certificate identifier
     */
    certId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/**
 * Client certificate deleted successfully
 */
export type DeleteProjectClientCertResponseBody = {
    origin: string;
    certId: string;
};
/** @internal */
export declare const DeleteProjectClientCertRequest$inboundSchema: z.ZodType<DeleteProjectClientCertRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteProjectClientCertRequest$Outbound = {
    idOrName: string;
    certId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteProjectClientCertRequest$outboundSchema: z.ZodType<DeleteProjectClientCertRequest$Outbound, z.ZodTypeDef, DeleteProjectClientCertRequest>;
export declare function deleteProjectClientCertRequestToJSON(deleteProjectClientCertRequest: DeleteProjectClientCertRequest): string;
export declare function deleteProjectClientCertRequestFromJSON(jsonString: string): SafeParseResult<DeleteProjectClientCertRequest, SDKValidationError>;
/** @internal */
export declare const DeleteProjectClientCertResponseBody$inboundSchema: z.ZodType<DeleteProjectClientCertResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteProjectClientCertResponseBody$Outbound = {
    origin: string;
    certId: string;
};
/** @internal */
export declare const DeleteProjectClientCertResponseBody$outboundSchema: z.ZodType<DeleteProjectClientCertResponseBody$Outbound, z.ZodTypeDef, DeleteProjectClientCertResponseBody>;
export declare function deleteProjectClientCertResponseBodyToJSON(deleteProjectClientCertResponseBody: DeleteProjectClientCertResponseBody): string;
export declare function deleteProjectClientCertResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteProjectClientCertResponseBody, SDKValidationError>;
//# sourceMappingURL=deleteprojectclientcertop.d.ts.map