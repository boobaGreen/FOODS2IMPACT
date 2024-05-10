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
      <header className="flex justify-between">
        <button onClick={handleHome} className="flex justify-center w-[10rem]">
          <Logo />
        </button>
        {user?.name ? (
          <div className="flex flex-col w-40 text-xl text-[#454444] text-pretty">
            <div className="flex justify-center gap-2">
              <p>PTS</p>
              <p>{user?.singleGamePoints}</p>
            </div>
            <div className="flex justify-center gap-2">
              <p>LVL</p>
              <p>{user?.level}</p>
            </div>
            <div className="flex w-full justify-between p-4 text-base gap-2 ">
              <div>{user?.name.toUpperCase()}</div>
              <div>
                <button onClick={handleRemoveUser} className="mr-4">
                  <FaTrash color="#35c4c4" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <h1 className="mt-2 flex justify-center text-3xl text-[#ffff]">
        FOOD(S2)IMPACT
      </h1>
    </div>
  );
}

export default Header;
