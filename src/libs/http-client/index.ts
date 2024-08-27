export interface HttpClientOptions {
  method?: string;
  body?: unknown;
  headers?: Record<string, string>;
}

export async function httpClient<R = unknown>(
  url: string,
  options: HttpClientOptions = {},
) {
  const response = await fetch(url, {
    method: options.method || 'GET',
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers: options.headers || {},
  });

  const data = (await response.json()) as R;

  return { data };
}
