import { useMemo } from "react";

const useSearch = ({ data, filterText, key }) => {
  const filteredData = useMemo(() => {
    if (!filterText) return data;

    return data.filter(item => {
      const value = item[key];
      if (typeof value === "string") {
        return value.toLowerCase().includes(filterText.toLowerCase());
      }
      return false;
    });
  }, [data, filterText, key]);

  return filteredData;
};

export default useSearch;
