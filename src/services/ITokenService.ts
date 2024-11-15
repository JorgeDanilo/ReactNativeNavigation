export interface ITokenService {
  getToken(): Promise<string | null>;
  setToken( token: string ): Promise<void>;
  removeToken(): Promise<void>;
}