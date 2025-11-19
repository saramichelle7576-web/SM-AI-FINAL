import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The grant type, when using x-www-form-urlencoded content type
 */
export declare const ExchangeSsoTokenGrantType: {
    readonly AuthorizationCode: "authorization_code";
};
/**
 * The grant type, when using x-www-form-urlencoded content type
 */
export type ExchangeSsoTokenGrantType = ClosedEnum<typeof ExchangeSsoTokenGrantType>;
export type ExchangeSsoTokenRequestBody = {
    /**
     * The sensitive code received from Vercel
     */
    code: string;
    /**
     * The state received from the initialization request
     */
    state?: string | undefined;
    /**
     * The integration client id
     */
    clientId: string;
    /**
     * The integration client secret
     */
    clientSecret: string;
    /**
     * The integration redirect URI
     */
    redirectUri?: string | undefined;
    /**
     * The grant type, when using x-www-form-urlencoded content type
     */
    grantType?: ExchangeSsoTokenGrantType | undefined;
};
export type ExchangeSsoTokenResponseBody = {
    idToken: string;
    accessToken: string | null;
    tokenType: string | null;
    expiresIn?: number | undefined;
};
/** @internal */
export declare const ExchangeSsoTokenGrantType$inboundSchema: z.ZodNativeEnum<typeof ExchangeSsoTokenGrantType>;
/** @internal */
export declare const ExchangeSsoTokenGrantType$outboundSchema: z.ZodNativeEnum<typeof ExchangeSsoTokenGrantType>;
/** @internal */
export declare const ExchangeSsoTokenRequestBody$inboundSchema: z.ZodType<ExchangeSsoTokenRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ExchangeSsoTokenRequestBody$Outbound = {
    code: string;
    state?: string | undefined;
    client_id: string;
    client_secret: string;
    redirect_uri?: string | undefined;
    grant_type?: string | undefined;
};
/** @internal */
export declare const ExchangeSsoTokenRequestBody$outboundSchema: z.ZodType<ExchangeSsoTokenRequestBody$Outbound, z.ZodTypeDef, ExchangeSsoTokenRequestBody>;
export declare function exchangeSsoTokenRequestBodyToJSON(exchangeSsoTokenRequestBody: ExchangeSsoTokenRequestBody): string;
export declare function exchangeSsoTokenRequestBodyFromJSON(jsonString: string): SafeParseResult<ExchangeSsoTokenRequestBody, SDKValidationError>;
/** @internal */
export declare const ExchangeSsoTokenResponseBody$inboundSchema: z.ZodType<ExchangeSsoTokenResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ExchangeSsoTokenResponseBody$Outbound = {
    id_token: string;
    access_token: string | null;
    token_type: string | null;
    expires_in?: number | undefined;
};
/** @internal */
export declare const ExchangeSsoTokenResponseBody$outboundSchema: z.ZodType<ExchangeSsoTokenResponseBody$Outbound, z.ZodTypeDef, ExchangeSsoTokenResponseBody>;
export declare function exchangeSsoTokenResponseBodyToJSON(exchangeSsoTokenResponseBody: ExchangeSsoTokenResponseBody): string;
export declare function exchangeSsoTokenResponseBodyFromJSON(jsonString: string): SafeParseResult<ExchangeSsoTokenResponseBody, SDKValidationError>;
//# sourceMappingURL=exchangessotokenop.d.ts.map