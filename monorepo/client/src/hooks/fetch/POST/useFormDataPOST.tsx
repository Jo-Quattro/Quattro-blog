import { useEffect, useState } from "react";
import { postFormDataAPI } from "./postFormDataAPI";

export function useFormDataPOST<DynamicType>(
  endpoint: string,
  formData: FormData,
  dependence: any
) {
  const [data, setData] = useState<DynamicType | null>(null);
  useEffect(() => {
    postFormDataAPI<DynamicType>(endpoint, formData).then(
      (res: DynamicType | null) => setData(res)
    );
  }, dependence);

  return { data };
}
