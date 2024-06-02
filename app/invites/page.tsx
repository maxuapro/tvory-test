"use client";
import { useState, useEffect } from "react";
//* context
import { AppStore } from "@/src/context/AppContext";
import { FilterStore } from "@/src/context/FilterContext";

//* components
import InviteCard from "@/src/components/InviteCard";

const InvitesPage = () => {
  const { invites } = AppStore();
  const { filterStatus, filterTag } = FilterStore();

  const [invitesToShow, setInvitesToShow] = useState(invites);

  const filterInvitesByStatus = (status: string) => {
    let filtered;
    if (status === "sent") {
      filtered = invites.filter((invite) => {
        return invite.status === "sent";
      });
      setInvitesToShow(filtered);
      return;
    }
    if (status === "draft") {
      filtered = invites.filter((invite) => {
        return invite.status === "draft";
      });
      setInvitesToShow(filtered);
      return;
    }
    filtered = [...invites];
    setInvitesToShow(filtered);
    return;
  };

  const filterInvitesByTag = (tag?: string) => {
    if (!tag) return;
    let filtered = invites.filter((invite) => {
      return invite.tags.includes(tag);
    });
    setInvitesToShow(filtered);
  };

  useEffect(() => {
    filterInvitesByStatus(filterStatus);
  }, [filterStatus]);

  useEffect(() => {
    filterInvitesByTag(filterTag);
  }, [filterTag]);

  return (
    <div className="text-black">
      <h1 className="mx-3 my-5 text-3xl xl:mx-24">Invitations</h1>
      <div className="px-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:px-24">
          {invitesToShow.length > 0 &&
            invitesToShow.map((card, index) => (
              <InviteCard key={index} invite={card} />
            ))}
        </div>
        <div className="p-3">
          <p className="text-center">2024 - MAXUAPRO</p>
        </div>
      </div>
    </div>
  );
};

export default InvitesPage;
