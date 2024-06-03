import React, { createContext, useState, useContext } from "react";

export interface IFilterObject {
  [key: string]: string;
}

interface IFilterContext {
  filterObject: IFilterObject;
  setFilterObject: React.Dispatch<React.SetStateAction<IFilterObject>>;
}

const FilterContext = createContext<IFilterContext>({
  filterObject: {} as IFilterObject,
  setFilterObject: () => {},
});

const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filterObject, setFilterObject] = useState<IFilterObject>({});

  return (
    <FilterContext.Provider value={{ filterObject, setFilterObject }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

export const FilterStore = () => {
  return useContext(FilterContext);
};
