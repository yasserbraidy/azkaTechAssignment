export default interface IAuthState {
    username?: string | null,
    token: string | null,
    isAuthenticated: boolean;
}