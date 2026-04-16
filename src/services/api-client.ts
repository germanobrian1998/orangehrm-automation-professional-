export class APIClient {
  constructor(private baseURL: string) {}
  async get(endpoint: string): Promise<any> { return fetch(`${this.baseURL}${endpoint}`).then(r => r.json()); }
  async post(endpoint: string, data: any): Promise<any> { return fetch(`${this.baseURL}${endpoint}`, { method: 'POST', body: JSON.stringify(data) }).then(r => r.json()); }
  async put(endpoint: string, data: any): Promise<any> { return fetch(`${this.baseURL}${endpoint}`, { method: 'PUT', body: JSON.stringify(data) }).then(r => r.json()); }
  async delete(endpoint: string): Promise<any> { return fetch(`${this.baseURL}${endpoint}`, { method: 'DELETE' }).then(r => r.json()); }
}
