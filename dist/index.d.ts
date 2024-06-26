/// <reference types="node" />
export { Imgix } from "./imgix/Imgix";
export { JsonApiNavigator } from "./jsonApi/JsonApiNavigator";
export { AuthModule } from "./auth/auth.module";
export { JwtAuthGuard } from "./auth/jwt-auth.guard";
export { JwtStrategy } from "./auth/jwt.strategy";
export { OptionalJwtAuthGuard } from "./auth/optional-jwt-auth.guard";
export { JsonApiBuilder } from "./jsonApi/JsonApiBuilder";
export { JsonApiDataInterface, transformFunction, } from "./jsonApi/interfaces/JsonApiDataInterface";
export { Router } from "./routing/Router";
export { DataValidator } from "./validator/DataValidator";
export declare function uuidToBuffer(uuid: string): Buffer;
export declare function bufferToUuid(buffer: Buffer): string;
export { JsonApiPipe } from "./jsonApi/JsonApiPipe";
export { JsonApiBuilderInterface } from "./jsonApi/interfaces/JsonApiBuilderInterface";
