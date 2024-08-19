export interface IAuthRepository {
    find(email: string): Promise<{ id: string, pass: string; }>;
}
