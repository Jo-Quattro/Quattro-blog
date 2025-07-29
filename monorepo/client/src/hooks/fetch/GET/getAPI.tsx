const baseURL = import.meta.env.VITE_API_URL;

export async function getAPI<DynamicType>(
  endpoint: string
): Promise<DynamicType | null> {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      credentials: "include",
    });
    if (!res.ok) {
    }
    const data: DynamicType = await res.json();
    return data;
  } catch (err) {
    console.error("Erreur lors de la récuperation des donnees:", err);
    return null;
  }
}
