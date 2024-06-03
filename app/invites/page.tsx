"use client";
import { useState, useEffect } from "react";
//* context
import { AppStore } from "@/src/context/AppContext";
import { FilterStore, IFilterObject } from "@/src/context/FilterContext";
//* types
//* components
import InviteCard from "@/src/components/InviteCard";
import { IInviteCard } from "@/src/types/dataTypes";

const InvitesPage = () => {
  const { invites } = AppStore();
  const { filterObject } = FilterStore();

  const [invitesToShow, setInvitesToShow] = useState(invites);

  useEffect(() => {
    console.log("filterObject", filterObject);
    const universalFilter = (filt: IFilterObject) => {
      const arrayKeys = Object.keys(filt);

      //* if no filters provided -> return all data !
      if (arrayKeys.length < 1) {
        console.log("arrayKeys.length =", arrayKeys.length);
        setInvitesToShow(invites);
        return;
      }

      const filtered: IInviteCard[] = [];

      for (let key of arrayKeys) {
        if (key === "tag") {
          const tempArray: IInviteCard[] = invites.filter((invite) => {
            return invite.tags.includes(filt[key]);
          });
          filtered.push(...tempArray);
        } else {
          const tempArray: IInviteCard[] = invites.filter((invite) => {
            return invite[key as keyof IInviteCard] === filt[key];
          });
          filtered.push(...tempArray);
        }
      }
      setInvitesToShow(filtered);
    };
    universalFilter(filterObject);
  }, [filterObject, invites]);

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
