
const BASE_URL = import.meta.env.VITE_BASE_URL;
export async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) throw new Error("API error");
  return res.json();
}
