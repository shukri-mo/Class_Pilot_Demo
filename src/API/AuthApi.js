//login function
//signup function

import { apiFetch } from "./client";
export async function login(email, password) {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}
export async function signup(name, email, password) {
  console.log("Signing up with:", { name, email, password });
  return apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

export async function getCurrentUser() {
  return apiFetch("/auth/me");
}





