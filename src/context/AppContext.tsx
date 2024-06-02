import { useContext, createContext, useState } from "react";
//* types
import { IInviteCard, Tag } from "../types/dataTypes";
//* fake data
import { invitesFakeData, fakeTags } from "../data/fakedata";

interface IAppData {
  invites: IInviteCard[];
  tags: Tag[];
}

interface IAppDataContext extends IAppData {
  setData: (state: IAppData) => void;
}

const AppContext = createContext<IAppDataContext>({
  invites: [],
  tags: [],
  setData: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<IAppData>({
    invites: [...invitesFakeData],
    tags: [...fakeTags],
  });

  const { invites, tags } = data;

  return (
    <AppContext.Provider value={{ invites, tags, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const AppStore = () => {
  return useContext(AppContext);
};
