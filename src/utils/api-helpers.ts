export async function getRequest(endpoint: string): Promise<any> {
  const response = await fetch(endpoint);
  return response.json();
}
