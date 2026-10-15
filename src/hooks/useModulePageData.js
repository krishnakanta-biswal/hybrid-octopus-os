
import { useMemo } from "react";
import modulePages from "../data/modulePages.json";

export default function useModulePageData(pageKey) {
  return useMemo(() => {
    const data = modulePages[pageKey];

    return {
      data: data || null,
      loading: false,
      error: data ? null : `No configuration found for "${pageKey}".`,
    };
  }, [pageKey]);
}
