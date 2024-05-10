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
    <>
      <header className="flex justify-between">
        <button onClick={handleHome} className="flex justify-center w-[10rem]">
          <Logo />
        </button>
        {user?.name ? (
          <div className="flex flex-col w-40 text-xl text-[#454444] text-pretty text">
            <div className="flex justify-around">
              <p>PTS</p>
              <p>{user?.singleGamePoints}</p>
            </div>
            <div className="flex justify-around">
              <p>LVL</p>
              <p>{user?.level}</p>
            </div>
            <div className="flex w-full justify-between ">
              <div>{user?.name}</div>
              <div>
                <button onClick={handleRemoveUser} className="">
                  <FaTrash color="#35c4c4" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <h1 className="mt-8 flex justify-center text-4xl text-[#454444]">
        FOOD(S2)IMPACT
      </h1>
    </>
  );
}

export default Header;
