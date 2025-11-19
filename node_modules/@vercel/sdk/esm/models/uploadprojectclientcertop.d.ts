import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UploadProjectClientCertRequestBody = {
    /**
     * The client certificate in PEM format
     */
    cert: string;
    /**
     * The private key in PEM format
     */
    key: string;
    /**
     * The certificate authority in PEM format
     */
    ca: string;
    /**
     * The origin this certificate should be used for. If not specified, the certificate will be project-wide.
     */
    origin?: string | undefined;
    /**
     * Skip validation of the certificate
     */
    skipValidation?: boolean | undefined;
};
export type UploadProjectClientCertRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UploadProjectClientCertRequestBody | undefined;
};
/**
 * Client certificate uploaded successfully
 */
export type UploadProjectClientCertResponseBody = {
    updated: boolean;
    origin: string;
    certId: string;
};
/** @internal */
export declare const UploadProjectClientCertRequestBody$inboundSchema: z.ZodType<UploadProjectClientCertRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadProjectClientCertRequestBody$Outbound = {
    cert: string;
    key: string;
    ca: string;
    origin?: string | undefined;
    skipValidation?: boolean | undefined;
};
/** @internal */
export declare const UploadProjectClientCertRequestBody$outboundSchema: z.ZodType<UploadProjectClientCertRequestBody$Outbound, z.ZodTypeDef, UploadProjectClientCertRequestBody>;
export declare function uploadProjectClientCertRequestBodyToJSON(uploadProjectClientCertRequestBody: UploadProjectClientCertRequestBody): string;
export declare function uploadProjectClientCertRequestBodyFromJSON(jsonString: string): SafeParseResult<UploadProjectClientCertRequestBody, SDKValidationError>;
/** @internal */
export declare const UploadProjectClientCertRequest$inboundSchema: z.ZodType<UploadProjectClientCertRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadProjectClientCertRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UploadProjectClientCertRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UploadProjectClientCertRequest$outboundSchema: z.ZodType<UploadProjectClientCertRequest$Outbound, z.ZodTypeDef, UploadProjectClientCertRequest>;
export declare function uploadProjectClientCertRequestToJSON(uploadProjectClientCertRequest: UploadProjectClientCertRequest): string;
export declare function uploadProjectClientCertRequestFromJSON(jsonString: string): SafeParseResult<UploadProjectClientCertRequest, SDKValidationError>;
/** @internal */
export declare const UploadProjectClientCertResponseBody$inboundSchema: z.ZodType<UploadProjectClientCertResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadProjectClientCertResponseBody$Outbound = {
    updated: boolean;
    origin: string;
    certId: string;
};
/** @internal */
export declare const UploadProjectClientCertResponseBody$outboundSchema: z.ZodType<UploadProjectClientCertResponseBody$Outbound, z.ZodTypeDef, UploadProjectClientCertResponseBody>;
export declare function uploadProjectClientCertResponseBodyToJSON(uploadProjectClientCertResponseBody: UploadProjectClientCertResponseBody): string;
export declare function uploadProjectClientCertResponseBodyFromJSON(jsonString: string): SafeParseResult<UploadProjectClientCertResponseBody, SDKValidationError>;
//# sourceMappingURL=uploadprojectclientcertop.d.ts.map