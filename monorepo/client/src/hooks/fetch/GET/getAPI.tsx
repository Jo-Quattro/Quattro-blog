const baseURL = import.meta.env.VITE_API_URL;

export async function getAPI<DynamicType>(
  endpoint: string
): Promise<DynamicType | null> {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      credentials: "include",
    });
    if (!res.ok) {
      console.error("Erreur HTTP", res.status);
      return null;
    }
    const data: DynamicType = await res.json();
    return data;
  } catch (err) {
    console.error("Erreur lors de la récupération des données:", err);
    return null;
  }
}