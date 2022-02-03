import { getToken } from "../api/token";

export async function authFetch(url, params, logout) {
  const token = getToken();
}
