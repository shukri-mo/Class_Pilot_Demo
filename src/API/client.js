// client.js
const BASE_URL = import.meta.env.VITE_BASE_URL; // "/api"
console.log(BASE_URL, "BASE_URL from env");
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  console.log("Calling API:", `${BASE_URL}${endpoint}`);
  const res = await fetch(`${BASE_URL}${endpoint}`, { headers, ...options });

  if (!res.ok) {
    // Read the full text once
    const text = await res.text();

    // Try to parse JSON, else leave as text
    let errBody;
    try {
      errBody = JSON.parse(text);
    } catch {
      errBody = text;
    }

    console.error(`❌ [${res.status}] ${endpoint} →`, errBody);
    throw new Error(`API ${res.status}: ${typeof errBody === 'string' ? errBody : JSON.stringify(errBody)}`);
  }

  return res.json();
}












// export async function apiFetch(endpoint, options = {}) {
//   // Get token from localStorage (adjust if you store it differently)
//   const token = localStorage.getItem('token');

//   // Prepare headers, add Authorization if token exists
//   const headers = {
//     "Content-Type": "application/json",
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//     ...options.headers,
//   };
// console.log("Calling API:", `${BASE_URL}${endpoint}`);

//   const res = await fetch(`${BASE_URL}${endpoint}`, {
//     headers,
//     ...options,
//   });

//   if (!res.ok) throw new Error("API error");
//   return res.json();
// }
