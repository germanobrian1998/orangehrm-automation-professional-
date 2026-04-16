import { APIClient } from './api-client';
export class AuthService {
  constructor(private apiClient: APIClient) {}
  async login(username: string, password: string): Promise<any> { return this.apiClient.post('/auth/login', { username, password }); }
  async logout(): Promise<any> { return this.apiClient.post('/auth/logout', {}); }
}
