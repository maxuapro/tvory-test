"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
//* context
import { AppStore } from "@/src/context/AppContext";
//* types
import { IInviteCard, Tag } from "@/src/types/dataTypes";

interface IAppData {
  invites: IInviteCard[];
  tags: Tag[];
}

const DEFAULT_FORM_VALUES: IInviteCard = {
  id: "",
  status: "draft",
  email: "",
  phone: "",
  time: "",
  location: "",
  title: "",
  text: "",
  tags: [],
};

const CreatePage = () => {
  const router = useRouter();
  const { invites, tags, setData } = AppStore();

  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

  const onChangeFormValues = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSaveInvitation = (send?: "send") => {
    console.log("Creating invite --->");
    if (send) {
      invites.push({ ...formValues, status: "sent" });
    } else {
      invites.push(formValues);
    }
    const updatedState: IAppData = { tags, invites };
    setData(updatedState);
    router.push("/invites");
  };

  return (
    <div className="p-3 text-black">
      <div className="px-3 sm:px-10 md:px-20 lg:px-28">
        <h1 className="text-3xl font-semibold">Create new Invitation</h1>
        <form>
          <div className="flex flex-col gap-3">
            <label>
              <h1>Title</h1>
              <input
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
                type="button"
                className="btn btn-primary"
                onClick={() => onSaveInvitation("send")}
              >
                Send
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => onSaveInvitation()}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
