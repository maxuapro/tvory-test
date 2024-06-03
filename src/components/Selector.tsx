import React from "react";
import { useRouter } from "next/navigation";
//* context
import { FilterStore, IFilterObject } from "../context/FilterContext";
//* icons
import { FiTag } from "react-icons/fi";

interface ISelector {
  icon?: any;
  label?: string;
  filterObject: IFilterObject;
  setShowSidePanel: (state: boolean) => void;
}

const Selector = ({
  icon,
  label,
  filterObject,
  setShowSidePanel,
}: ISelector) => {
  const { setFilterObject } = FilterStore();
  const router = useRouter();

  return (
    <div
      className="mr-3 block rounded-r-full px-5 py-3 hover:cursor-pointer hover:bg-white/20"
      onClick={() => {
        setFilterObject(filterObject);
        setShowSidePanel(false);
        router.push("/invites");
      }}
    >
      <div className="flex items-center gap-3">
        {icon ? icon : <FiTag />}
        <h1>{label}</h1>
      </div>
    </div>
  );
};

export default Selector;
