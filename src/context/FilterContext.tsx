import { useContext, createContext, useState } from "react";

type FilterStatus = "all" | "draft" | "sent";
type FilterTag = string | undefined;

// interface FilterObject {
//   status: FilterStatus;
//   tag: FilterTag;
// }

interface FilterRule {
  filterStatus: FilterStatus;
  setFilterStatus: (state: FilterStatus) => void;
  filterTag: FilterTag;
  setFilterTag: (state: FilterTag) => void;
}

const FilterContext = createContext<FilterRule>({
  filterStatus: "all",
  setFilterStatus: () => undefined,
  filterTag: undefined,
  setFilterTag: () => undefined,
});

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [filterTag, setFilterTag] = useState<FilterTag | undefined>(undefined);
  // const [filter, setFilter] = useState<FilterObject>({status: "all", tag: undefined});

  // const standAloneFilter = ({key, value}: {key: }) => {

  // }

  return (
    <FilterContext.Provider
      value={{ filterStatus, setFilterStatus, filterTag, setFilterTag }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

export const FilterStore = () => {
  return useContext(FilterContext);
};
