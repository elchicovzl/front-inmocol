import { getToken, hasExpiredToken } from "../api/token";

export async function authFetch(url, params, logout) {
  const token = getToken();

  if (!token) {
    //user not logged
    logout();
    return;
  }

  if (hasExpiredToken(token)) {
    //token expired
    logout();
    return;
  }

  const paramsTemp = {
    ...params,
    headers: {
      ...params?.headers,
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, paramsTemp);
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  }
}
