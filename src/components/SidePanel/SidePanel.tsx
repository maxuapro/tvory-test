"use client";
import { useState } from "react";
import Link from "next/link";
//* app context
import { AppStore } from "@/src/context/AppContext";
//* components
import Selector from "../Selector";
//* icons
import { FiDisc } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";

const SidePanel = ({
  setShowSidePanel,
}: {
  setShowSidePanel: (state: boolean) => void;
}) => {
  const { tags } = AppStore();

  const tagsSelectors = tags.map((tag) => {
    return { title: tag };
  });

  const [tagsToShow, setTagsToShow] = useState(tagsSelectors);

  // console.log("fake tags", tagsToShow);

  return (
    <div className="">
      <h1 className="my-5 text-center">Invitations</h1>
      <div>
        <Selector
          icon={<FiDisc />}
          label="All"
          filteringStatus="all"
          setShowSidePanel={setShowSidePanel}
        />
        <Selector
          icon={<FiSend />}
          label="Sent"
          filteringStatus="sent"
          setShowSidePanel={setShowSidePanel}
        />
        <Selector
          icon={<FiEdit />}
          label="Drafts"
          filteringStatus="draft"
          setShowSidePanel={setShowSidePanel}
        />
        <Selector
          icon={<FiBookOpen />}
          label="Opened"
          filteringStatus="all"
          setShowSidePanel={setShowSidePanel}
        />

        <hr className="m-3" />

        {tagsToShow.length > 0 &&
          tagsToShow.map((selector, index) => (
            <Selector
              key={index}
              label={selector.title}
              filteringTag={selector.title}
              filteringStatus="all"
              setShowSidePanel={setShowSidePanel}
            />
          ))}
      </div>
      <Link
        href="https://maxuapro.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="m-3 rounded-lg bg-black/50 p-3 text-center text-sm">
          2024 © maxuapro
        </div>
      </Link>
    </div>
  );
};

export default SidePanel;
