const baseURL = import.meta.env.VITE_API_URL;

export async function isUserAuthenticated() {
  try {
    const res = await fetch(`${baseURL}/api/auth`, {
      credentials: "include",
    });
    return res.ok;
  } catch (err) {
    return false;
  }
}
