export { Imgix } from "./imgix/Imgix";
export { JsonApiNavigator } from "./jsonApi/JsonApiNavigator";

export { AuthModule } from "./auth/auth.module";
export { JwtAuthGuard } from "./auth/jwt-auth.guard";
export { JwtStrategy } from "./auth/jwt.strategy";
export { OptionalJwtAuthGuard } from "./auth/optional-jwt-auth.guard";
export { JsonApiBuilder } from "./jsonApi/JsonApiBuilder";
export { JsonApiDataInterface, transformFunction } from "./jsonApi/interfaces/JsonApiDataInterface";
export { Router } from "./routing/Router";
export { DataValidator } from "./validator/DataValidator";

export function uuidToBuffer(uuid: string): Buffer {
	const hex = uuid.replace(/-/g, "");
	return Buffer.from(hex, "hex");
}

export function bufferToUuid(buffer: Buffer): string {
	const hex = buffer.toString("hex");
	const uuid = [
		hex.substring(0, 8),
		hex.substring(8, 12),
		hex.substring(12, 16),
		hex.substring(16, 20),
		hex.substring(20, 32),
	].join("-");

	return uuid;
}
