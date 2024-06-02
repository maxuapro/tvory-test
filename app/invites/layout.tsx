"use client";
import { useState } from "react";
//* context (app state)
import AppContextProvider from "@/src/context/AppContext";
import FilterContextProvider from "@/src/context/FilterContext";
//* components
import { Header } from "@/src/components/Header";
import { SidePanel } from "@/src/components/SidePanel";

export default function InvitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidePanel, setShowSidePanel] = useState<boolean>(false);

  const onClickOnblack = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === "fon") {
      setShowSidePanel(false);
    }
  };

  return (
    <AppContextProvider>
      <FilterContextProvider>
        <div className="bg-red-500">
          <Header
            showSidePanel={showSidePanel}
            setShowSidePanel={setShowSidePanel}
          />

          <div className="flex">
            <div className="fixed bottom-0 top-12 hidden w-72 overflow-auto bg-gradient-to-br from-fuchsia-800 to-indigo-800 lg:block">
              <SidePanel setShowSidePanel={setShowSidePanel} />
            </div>

            {showSidePanel && (
              <div
                id="fon"
                className="fixed bottom-0 top-12 w-full bg-black/50"
                onClick={onClickOnblack}
              >
                <div
                  className="bottom-0 top-12 z-20 h-full w-72 overflow-auto bg-gradient-to-br from-fuchsia-800 to-indigo-800"
                  onClick={() => console.log("jkl")}
                >
                  <SidePanel setShowSidePanel={setShowSidePanel} />
                </div>
              </div>
            )}

            <div className="hidden w-72 lg:block"></div>

            <div className="min-h-screen flex-1 bg-zinc-100">{children}</div>
          </div>

          {/* <Footer /> */}
        </div>
      </FilterContextProvider>
    </AppContextProvider>
  );
}
