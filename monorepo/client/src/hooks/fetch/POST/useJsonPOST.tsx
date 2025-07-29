import { useEffect, useState } from "react";
import { postJsonAPI } from "./postJsonAPI";

export function useJsonPOST<DynamicType, BodyType>(
  endpoint: string,
  body: BodyType,
  dependence: any
) {
  const [data, setData] = useState<DynamicType | null>(null);
  useEffect(() => {
    postJsonAPI<DynamicType, BodyType>(endpoint, body).then(
      (res: DynamicType | null) => setData(res)
    );
  }, dependence);

  return { data };
}
