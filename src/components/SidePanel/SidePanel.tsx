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

  const [tagsToShow] = useState(tags);

  return (
    <div className="text-white">
      <h1 className="my-5 text-center">Invitations</h1>
      <div>
        <Selector
          icon={<FiDisc />}
          label="All"
          filterObject={{}}
          setShowSidePanel={setShowSidePanel}
        />
        <Selector
          icon={<FiSend />}
          label="Sent"
          filterObject={{ status: "sent" }}
          setShowSidePanel={setShowSidePanel}
        />
        <Selector
          icon={<FiEdit />}
          label="Drafts"
          filterObject={{ status: "draft" }}
          setShowSidePanel={setShowSidePanel}
        />
        <Selector
          icon={<FiBookOpen />}
          label="Opened"
          filterObject={{}}
          setShowSidePanel={setShowSidePanel}
        />

        <hr className="m-3" />

        {tagsToShow.length > 0 &&
          tagsToShow.map((tag, index) => (
            <Selector
              key={index}
              label={tag}
              filterObject={{ tag: tag }}
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
