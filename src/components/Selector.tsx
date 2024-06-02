import React from "react";
import { useRouter } from "next/navigation";
//* context
import { FilterStore } from "../context/FilterContext";
//* icons
import { FiTag } from "react-icons/fi";

type FilterStatus = "all" | "draft" | "sent";

interface ISelector {
  icon?: any;
  label?: string;
  filteringStatus: FilterStatus;
  filteringTag?: string;
  setShowSidePanel: (state: boolean) => void;
}

const Selector = ({
  icon,
  label,
  filteringStatus,
  filteringTag,
  setShowSidePanel,
}: ISelector) => {
  const { setFilterStatus, setFilterTag } = FilterStore();
  const router = useRouter();

  const chooseFilter = (
    filteringStatus: FilterStatus,
    filteringTag: string | undefined,
  ) => {
    if (filteringTag) {
      setFilterStatus("all");
      setFilterTag(filteringTag);
      router.push("/invites");
      return;
    }

    setFilterStatus(filteringStatus);
    setFilterTag(undefined);
    router.push("/invites");
    return;
  };

  return (
    <div
      className="mr-3 block rounded-r-full px-5 py-3 hover:cursor-pointer hover:bg-white/20"
      onClick={() => {
        chooseFilter(filteringStatus, filteringTag);
        setShowSidePanel(false);
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
