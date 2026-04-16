import { APIClient } from './api-client';
export class EmployeeService {
  constructor(private apiClient: APIClient) {}
  async getEmployees(): Promise<any> { return this.apiClient.get('/employees'); }
  async createEmployee(data: any): Promise<any> { return this.apiClient.post('/employees', data); }
}
