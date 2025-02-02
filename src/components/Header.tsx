
import { FaTrash } from "react-icons/fa";
import { TUser } from "../lib/types/types";
import { ReactNode } from "react";
import Logo from "../elements/Logo";


type THeader = {
  user: TUser;
  children: ReactNode;
  handleRemoveUser: () => void;
};


function Header({ user, handleRemoveUser }: THeader) {

  const handleHome = () => {};


  return (
    <div>
      <header className="flex justify-between">
        <button
          onClick={handleHome}
          className="flex justify-center w-[8rem] ml-[-2rem] mt-[-1rem] animate-wiggle"
        >
          <Logo />
        </button>
        {user?.name ? (
          <div className="flex flex-col text-sm text-customGrey  w-80 text-pretty">
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
                  <FaTrash className="text-customTurquese" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <h1 className="flex justify-center text-xl md:2xl  text-customTurquese mt-10 font-press-start">
        FOOD
        <span className="text-white">(s2i)</span>
        MPACT
      </h1>
    </div>
  );
}

export default Header;
