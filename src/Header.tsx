import { FaTrash } from "react-icons/fa";
import { TUser } from "./lib/types/types";
import { ReactNode } from "react";
import Logo from "./Logo";

type THeader = {
  user: TUser;
  children: ReactNode;
  handleRemoveUser: () => void;
};
function Header({ user, handleRemoveUser }: THeader) {
  const handleHome = () => {};
  return (
    <div>
      <header className="flex justify-between px-6">
        <button onClick={handleHome} className="flex justify-center w-[10rem]">
          <Logo />
        </button>
        {user?.name ? (
          <div className="flex flex-col text-xl text-[#454444] w-80 text-pretty">
            <div className="flex justify-end gap-6">
              <div className="flex justify-center gap-2">
                <p>Points</p>
                <p>{user?.singleGamePoints}</p>
              </div>
              <div className="flex justify-center gap-2">
                <p>Level</p>
                <p>{user?.level}</p>
              </div>
            </div>
            <div className="mt-6 flex w-full justify-end text-base gap-2 ">
              <div>{user?.name.toUpperCase()}</div>
              <div>
                <button onClick={handleRemoveUser} className="">
                  <FaTrash color="#35c4c4" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <h1 className="flex justify-center text-3xl text-[#35c4c4] mt-20">
        FOOD
        <span className="text-[#ffff]">(s2i)</span>
        MPACT
      </h1>
    </div>
  );
}

export default Header;
