// Importing necessary libraries and components
import { ReactNode } from "react";
import { TUser } from "./lib/types/types";

import Footer from "./Footer";
import Header from "./Header";

// Type definition for the props of Layout component
type TLayout = {
  user: TUser;
  children: ReactNode;
  handleRemoveUser: () => void;
};

// Layout component
const Layout = ({ user, handleRemoveUser, children }: TLayout) => {
  // Rendering the layout with Header, main content, and Footer
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
