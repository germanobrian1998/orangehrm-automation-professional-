import { APIClient } from './api-client';
export class LeaveService {
  constructor(private apiClient: APIClient) {}
  async applyLeave(data: any): Promise<any> { return this.apiClient.post('/leaves/apply', data); }
}
