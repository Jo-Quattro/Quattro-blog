const baseURL = import.meta.env.VITE_API_URL;

export async function postFormDataAPI<DynamicType>(
  endpoint: string,
  formData: FormData
): Promise<DynamicType | null> {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    if (!res.ok) {
    }
    const data: DynamicType = await res.json();
    return data;
  } catch (err) {
    console.error("Erreur lors de l'envoi des donnees:", err);
    return null;
  }
}
