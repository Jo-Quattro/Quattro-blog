import { useEffect, useState } from "react";
import { getAPI } from "./getAPI";

export function useGET<DynamicType>(endpoint: string, dependence: any) {
  const [data, setData] = useState<DynamicType | null>(null);
  useEffect(() => {
    getAPI<DynamicType>(endpoint).then((res: DynamicType | null) =>
      setData(res)
    );
  }, dependence);

  return { data };
}
