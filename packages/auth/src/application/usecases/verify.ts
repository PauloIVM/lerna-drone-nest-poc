import { TokenManager } from "../../domain/token-manager";

export class VerifyUsecase {
    constructor() {}

    exec(token: string): string {
        if (!token) {
            throw new Error("Missing token.");
        }
        const tokenGenerator = new TokenManager();
        const { userId } = tokenGenerator.verify(token);
        return userId;
    }
}