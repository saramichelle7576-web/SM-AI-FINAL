import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UpdateAttackChallengeModeRequestBody = {
    projectId: string;
    attackModeEnabled: boolean;
    attackModeActiveUntil?: number | null | undefined;
};
export type UpdateAttackChallengeModeRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: UpdateAttackChallengeModeRequestBody;
};
export type UpdateAttackChallengeModeResponseBody = {
    attackModeEnabled: boolean;
    attackModeUpdatedAt: number;
};
/** @internal */
export declare const UpdateAttackChallengeModeRequestBody$inboundSchema: z.ZodType<UpdateAttackChallengeModeRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttackChallengeModeRequestBody$Outbound = {
    projectId: string;
    attackModeEnabled: boolean;
    attackModeActiveUntil?: number | null | undefined;
};
/** @internal */
export declare const UpdateAttackChallengeModeRequestBody$outboundSchema: z.ZodType<UpdateAttackChallengeModeRequestBody$Outbound, z.ZodTypeDef, UpdateAttackChallengeModeRequestBody>;
export declare function updateAttackChallengeModeRequestBodyToJSON(updateAttackChallengeModeRequestBody: UpdateAttackChallengeModeRequestBody): string;
export declare function updateAttackChallengeModeRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateAttackChallengeModeRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateAttackChallengeModeRequest$inboundSchema: z.ZodType<UpdateAttackChallengeModeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttackChallengeModeRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateAttackChallengeModeRequestBody$Outbound;
};
/** @internal */
export declare const UpdateAttackChallengeModeRequest$outboundSchema: z.ZodType<UpdateAttackChallengeModeRequest$Outbound, z.ZodTypeDef, UpdateAttackChallengeModeRequest>;
export declare function updateAttackChallengeModeRequestToJSON(updateAttackChallengeModeRequest: UpdateAttackChallengeModeRequest): string;
export declare function updateAttackChallengeModeRequestFromJSON(jsonString: string): SafeParseResult<UpdateAttackChallengeModeRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAttackChallengeModeResponseBody$inboundSchema: z.ZodType<UpdateAttackChallengeModeResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttackChallengeModeResponseBody$Outbound = {
    attackModeEnabled: boolean;
    attackModeUpdatedAt: number;
};
/** @internal */
export declare const UpdateAttackChallengeModeResponseBody$outboundSchema: z.ZodType<UpdateAttackChallengeModeResponseBody$Outbound, z.ZodTypeDef, UpdateAttackChallengeModeResponseBody>;
export declare function updateAttackChallengeModeResponseBodyToJSON(updateAttackChallengeModeResponseBody: UpdateAttackChallengeModeResponseBody): string;
export declare function updateAttackChallengeModeResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateAttackChallengeModeResponseBody, SDKValidationError>;
//# sourceMappingURL=updateattackchallengemodeop.d.ts.map