"use client";
import Link from "next/link";
//* types
import { IInviteCard } from "../types/dataTypes";
//* components
import Tag from "./Tag";
//* icons
import { FiMapPin } from "react-icons/fi"; //* location
import { FiPhone } from "react-icons/fi"; //* phone
import { FiCalendar } from "react-icons/fi"; //* time
import { FiMail } from "react-icons/fi"; //* email
import { FiEdit } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

const InviteCard = ({ invite }: { invite: IInviteCard }) => {
  const { id, status, email, phone, time, location, title, text, tags } =
    invite;
  return (
    <Link
      href={`invites/edit/${id}`}
      className="flex flex-col justify-between gap-2 rounded-lg border border-black bg-white p-5 text-black hover:cursor-pointer hover:bg-zinc-100"
    >
      <div>
        <h1 className="line-clamp-2 text-2xl font-bold leading-7">{title}</h1>
        <div className="m-2">
          {email && (
            <div className="flex items-center gap-3 text-sm">
              <h1>
                <FiMail />
              </h1>
              <h1>{email}</h1>
            </div>
          )}

          {phone && (
            <div className="flex items-center gap-3 text-sm">
              <h1>
                <FiPhone />
              </h1>
              <h1>{phone}</h1>
            </div>
          )}

          {time && (
            <div className="flex items-center gap-3 text-sm">
              <h1>
                <FiCalendar />
              </h1>
              <h1>{time}</h1>
            </div>
          )}

          {location && (
            <div className="flex items-center gap-3 text-sm">
              <h1>
                <FiMapPin />
              </h1>
              <h1 className="line-clamp-1">{location}</h1>
            </div>
          )}
        </div>
        <p className="line-clamp-3">{text}</p>
      </div>

      <div>
        <div className="inline">
          <div
            className={`${status === "sent" ? "bg-gradient-to-br from-sky-300 to-green-300" : "bg-gradient-to-br from-red-300 to-purple-300"} flex w-min items-center gap-2 rounded-lg px-2 py-1 text-sm`}
          >
            <h1 className="inline-block">
              {status === "sent" ? <FiSend /> : <FiEdit />}
            </h1>
            <h1 className="">{status}</h1>
          </div>
        </div>

        <hr className="my-2 border border-zinc-300" />
        {/* //* tags */}
        <div className=" flex flex-wrap gap-2">
          {tags.length > 0 &&
            tags.map((tag, index) => <Tag key={index} tag={tag} />)}
        </div>
      </div>
    </Link>
  );
};

export default InviteCard;
