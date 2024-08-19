export interface IAuthGateway {
    verify(token: string): string;
    login(email: string, password: string): {};
}
