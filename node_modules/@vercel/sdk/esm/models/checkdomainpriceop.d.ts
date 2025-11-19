import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * In which status of the domain the price needs to be checked.
 */
export declare const QueryParamType: {
    readonly New: "new";
    readonly Renewal: "renewal";
    readonly Transfer: "transfer";
    readonly Redemption: "redemption";
};
/**
 * In which status of the domain the price needs to be checked.
 */
export type QueryParamType = ClosedEnum<typeof QueryParamType>;
export type CheckDomainPriceRequest = {
    /**
     * The name of the domain for which the price needs to be checked.
     */
    name: string;
    /**
     * In which status of the domain the price needs to be checked.
     */
    type?: QueryParamType | undefined;
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
 * Successful response which returns the price of the domain and the period.
 */
export type CheckDomainPriceResponseBody = {
    /**
     * The domain price in USD.
     */
    price: number;
    /**
     * The number of years the domain could be held before paying again.
     */
    period: number;
};
/** @internal */
export declare const QueryParamType$inboundSchema: z.ZodNativeEnum<typeof QueryParamType>;
/** @internal */
export declare const QueryParamType$outboundSchema: z.ZodNativeEnum<typeof QueryParamType>;
/** @internal */
export declare const CheckDomainPriceRequest$inboundSchema: z.ZodType<CheckDomainPriceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDomainPriceRequest$Outbound = {
    name: string;
    type?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const CheckDomainPriceRequest$outboundSchema: z.ZodType<CheckDomainPriceRequest$Outbound, z.ZodTypeDef, CheckDomainPriceRequest>;
export declare function checkDomainPriceRequestToJSON(checkDomainPriceRequest: CheckDomainPriceRequest): string;
export declare function checkDomainPriceRequestFromJSON(jsonString: string): SafeParseResult<CheckDomainPriceRequest, SDKValidationError>;
/** @internal */
export declare const CheckDomainPriceResponseBody$inboundSchema: z.ZodType<CheckDomainPriceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDomainPriceResponseBody$Outbound = {
    price: number;
    period: number;
};
/** @internal */
export declare const CheckDomainPriceResponseBody$outboundSchema: z.ZodType<CheckDomainPriceResponseBody$Outbound, z.ZodTypeDef, CheckDomainPriceResponseBody>;
export declare function checkDomainPriceResponseBodyToJSON(checkDomainPriceResponseBody: CheckDomainPriceResponseBody): string;
export declare function checkDomainPriceResponseBodyFromJSON(jsonString: string): SafeParseResult<CheckDomainPriceResponseBody, SDKValidationError>;
//# sourceMappingURL=checkdomainpriceop.d.ts.map