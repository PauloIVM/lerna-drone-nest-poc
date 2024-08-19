import { TokenManager } from "../../domain/token-manager";
import { IAuthRepository } from "../repositories/i-auth-repository";

export class LoginUsecase {
    private authRepository: IAuthRepository;
    constructor(repository: IAuthRepository) {
        this.authRepository = repository;
    }

    async exec(email: string, password: string, date: Date = new Date()) {
        if (!email || !password) {
            throw new Error("Missing required fields");
        }
        const result = await this.authRepository.find(email);
        // INFO: This is just a test... pass should be hashad
        if (result?.pass !== password) {
            throw new Error("Bad email/password.");
        }
        const tokenManager = new TokenManager();
        return tokenManager.sign(result.id, date);
    }
}
