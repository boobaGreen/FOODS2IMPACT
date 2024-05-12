import { ReactNode } from "react";
import { TUser } from "./lib/types/types";

import Footer from "./Footer";
import Header from "./Header";

type TLayout = {
  user: TUser;
  children: ReactNode;
  handleRemoveUser: () => void;
};

const Layout = ({ user, handleRemoveUser, children }: TLayout) => {
  return (
    <div className="h-[100vh] flex flex-col bg-[#3a908d] pt-4 px-8 ">
      <div className="flex flex-col justify-centerh-full">
        <Header
          user={user}
          handleRemoveUser={handleRemoveUser}
          children={children}
        />
        <main className="min-h-[66vh]">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

// #3e6c6a
// #454444
// #38ded9
// #35c4c4
// #3a908d
