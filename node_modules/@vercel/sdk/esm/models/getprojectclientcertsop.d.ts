import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetProjectClientCertsRequest = {
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
};
export type ClientCerts = {
    origin: string;
    id: string;
};
/**
 * Client certificates retrieved successfully
 */
export type GetProjectClientCertsResponseBody = {
    clientCerts: Array<ClientCerts>;
};
/** @internal */
export declare const GetProjectClientCertsRequest$inboundSchema: z.ZodType<GetProjectClientCertsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectClientCertsRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetProjectClientCertsRequest$outboundSchema: z.ZodType<GetProjectClientCertsRequest$Outbound, z.ZodTypeDef, GetProjectClientCertsRequest>;
export declare function getProjectClientCertsRequestToJSON(getProjectClientCertsRequest: GetProjectClientCertsRequest): string;
export declare function getProjectClientCertsRequestFromJSON(jsonString: string): SafeParseResult<GetProjectClientCertsRequest, SDKValidationError>;
/** @internal */
export declare const ClientCerts$inboundSchema: z.ZodType<ClientCerts, z.ZodTypeDef, unknown>;
/** @internal */
export type ClientCerts$Outbound = {
    origin: string;
    id: string;
};
/** @internal */
export declare const ClientCerts$outboundSchema: z.ZodType<ClientCerts$Outbound, z.ZodTypeDef, ClientCerts>;
export declare function clientCertsToJSON(clientCerts: ClientCerts): string;
export declare function clientCertsFromJSON(jsonString: string): SafeParseResult<ClientCerts, SDKValidationError>;
/** @internal */
export declare const GetProjectClientCertsResponseBody$inboundSchema: z.ZodType<GetProjectClientCertsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectClientCertsResponseBody$Outbound = {
    clientCerts: Array<ClientCerts$Outbound>;
};
/** @internal */
export declare const GetProjectClientCertsResponseBody$outboundSchema: z.ZodType<GetProjectClientCertsResponseBody$Outbound, z.ZodTypeDef, GetProjectClientCertsResponseBody>;
export declare function getProjectClientCertsResponseBodyToJSON(getProjectClientCertsResponseBody: GetProjectClientCertsResponseBody): string;
export declare function getProjectClientCertsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetProjectClientCertsResponseBody, SDKValidationError>;
//# sourceMappingURL=getprojectclientcertsop.d.ts.map