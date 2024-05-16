// Importing necessary libraries and components
import { FaTrash } from "react-icons/fa";
import { TUser } from "./lib/types/types";
import { ReactNode } from "react";
import Logo from "./Logo";

// Type definition for the props of Header component
type THeader = {
  user: TUser;
  children: ReactNode;
  handleRemoveUser: () => void;
};

// Header component
function Header({ user, handleRemoveUser }: THeader) {
  // Handler for home button click (currently empty)
  const handleHome = () => {};

  // Rendering the header with user information and a trash button to remove user
  return (
    <div>
      <header className="flex justify-between">
        <button
          onClick={handleHome}
          className="flex justify-center w-[8rem] ml-[-2rem] mt-[-1rem]"
        >
          <Logo />
        </button>
        {user?.name ? (
          <div className="flex flex-col text-sm text-[#454444] w-80 text-pretty">
            <div className="flex justify-end gap-6">
              <div className="flex justify-center gap-2 ">
                <p className="font-press-start">Points</p>
                <p className="font-press-start">{user?.singleGamePoints}</p>
              </div>
              <div className="flex justify-center gap-2">
                <p className="font-press-start">Level</p>
                <p className="font-press-start">{user?.level}</p>
              </div>
            </div>
            <div className="mt-6 flex w-full justify-end text-base gap-2 ">
              <div className="font-press-start">{user?.name.toUpperCase()}</div>
              <div>
                <button onClick={handleRemoveUser} className="">
                  <FaTrash color="#35c4c4" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <h1 className="flex justify-center text-xl md:2xl  text-[#35c4c4] mt-10 font-press-start">
        FOOD
        <span className="text-[#ffff]">(s2i)</span>
        MPACT
      </h1>
    </div>
  );
}

export default Header;
