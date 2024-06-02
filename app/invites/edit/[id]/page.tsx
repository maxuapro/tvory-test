"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
//* context
import { AppStore } from "@/src/context/AppContext";
//* types
import { IInviteCard } from "@/src/types/dataTypes";

const EditPage = () => {
  const params = useParams();
  // console.log("PARAMS", params);
  //* getting invite ID from params
  const inviteID = params.id;

  const { invites, tags, setData } = AppStore();

  const router = useRouter();

  const [formValues, setFormValues] = useState<IInviteCard | undefined>(
    undefined,
  );
  const [editingAllowed, setEditingAllowed] = useState(false);

  useEffect(() => {
    //* get invite data by ID
    const getInviteByID = (id: string | string[]) => {
      const selectedInvites = invites.filter((invite) => {
        return invite.id === id;
      });
      if (selectedInvites.length > 0) {
        setFormValues(selectedInvites[0]);
        console.log(selectedInvites[0]);
        if (selectedInvites[0].status !== "sent") {
          setEditingAllowed(true);
        }
        return;
      }
      setFormValues(undefined);
      return;
    };
    getInviteByID(inviteID);
  }, []);

  const onChangeFormValues = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (formValues) {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      });
    }
  };

  const onSaveInvitation = (send?: "send") => {
    // console.log("Saving invite ID:", inviteID);
    if (formValues) {
      let updatedItems: IInviteCard[];
      if (send) {
        updatedItems = invites.map((invite) =>
          invite.id === formValues.id
            ? { ...formValues, status: "sent" }
            : invite,
        );
      } else {
        updatedItems = invites.map((invite) =>
          invite.id === formValues.id ? formValues : invite,
        );
      }
      const updatedData = { tags, invites: updatedItems };
      setData(updatedData);
      router.push("/invites");
    }
  };

  const onDeleteInvitation = () => {
    let updatedItems: IInviteCard[];
    updatedItems = invites.filter((invite) => {
      return invite.id !== inviteID;
    });

    const updatedData = { tags, invites: updatedItems };
    setData(updatedData);
    router.push("/invites");
  };

  return (
    <div className="p-3 text-black">
      <div className="px-3 sm:px-10 md:px-20 lg:px-28">
        <h1 className="text-3xl font-semibold">Edit existing Invitation</h1>
        {formValues && (
          <form>
            <div className="flex flex-col gap-3">
              {!editingAllowed && (
                <h1 className="rounded-md bg-gradient-to-br from-sky-300 to-green-300 p-3">
                  This invitation is already SENT, you can not edit it!
                </h1>
              )}
              <label>
                <h1>Title</h1>
                <input
                  disabled={!editingAllowed}
                  type="text"
                  required
                  name="title"
                  value={formValues.title}
                  className="w-full"
                  onChange={onChangeFormValues}
                />
              </label>

              <label>
                <h1>Email</h1>
                <input
                  disabled={!editingAllowed}
                  type="email"
                  required
                  name="email"
                  value={formValues.email}
                  className="w-full"
                  onChange={onChangeFormValues}
                />
              </label>

              <label>
                <h1>Phone</h1>
                <input
                  disabled={!editingAllowed}
                  type="number"
                  name="phone"
                  min="100000000"
                  max="999999999"
                  // pattern="[0-9]{10}"
                  onInvalid={() => console.log("invalid...")}
                  required
                  value={formValues.phone}
                  className="w-full"
                  onChange={onChangeFormValues}
                />
              </label>

              <label>
                <h1>Location</h1>
                <input
                  disabled={!editingAllowed}
                  type="text"
                  required
                  name="location"
                  value={formValues.location}
                  className="w-full"
                  onChange={onChangeFormValues}
                />
              </label>

              <label>
                <h1>Time</h1>
                <input
                  disabled={!editingAllowed}
                  type="datetime-local"
                  required
                  name="time"
                  value={formValues.time}
                  className="w-full"
                  onChange={onChangeFormValues}
                />
              </label>

              <label>
                <h1>Message</h1>
                <textarea
                  disabled={!editingAllowed}
                  required
                  rows={3}
                  name="text"
                  value={formValues.text}
                  className="w-full"
                  onChange={onChangeFormValues}
                />
              </label>

              <div className="flex gap-3">
                <button
                  disabled={!editingAllowed}
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onSaveInvitation("send")}
                >
                  Send
                </button>
                <button
                  disabled={!editingAllowed}
                  type="button"
                  className="btn btn-success"
                  onClick={() => onSaveInvitation()}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onDeleteInvitation()}
                >
                  Delete
                </button>
              </div>
            </div>
          </form>
        )}
        {!formValues && (
          <div>
            <h1>NO INVITES FOUND</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditPage;
