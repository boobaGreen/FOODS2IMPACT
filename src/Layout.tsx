import { ReactNode } from "react";
import { GameStatus } from "./lib/types/types";
import { TUser } from "./lib/types/types";
import { FaTrash } from "react-icons/fa";

type TLayout = {
  user: TUser;
  gameStatus: GameStatus;
  children: ReactNode;
  handleRemoveUser: () => void;
};

const Layout = ({ user, handleRemoveUser, gameStatus, children }: TLayout) => {
  return (
    <div className="h-[100vh] flex flex-col bg-violet-300 p-4">
      <div className="flex flex-col justify-between h-full">
        <header>
          <div className="flex justify-between">
            HEADER
            {user?.name !== "" ? (
              <div className="flex gap-3">
                <div>{user?.name}</div>

                <button onClick={handleRemoveUser}>
                  <FaTrash />
                </button>
              </div>
            ) : null}
          </div>
          <div className="flex justify-end">
            {user?.name !== "" ? (
              <div className="flex gap-3">
                <div>points {user?.singleGamePoints}</div>
                <div>level {user?.level}</div>
              </div>
            ) : null}
          </div>
          <h1 className="mt-8 flex justify-center text-3xl">
            {gameStatus.toUpperCase()}
          </h1>
        </header>
        <main>{children}</main>
        <footer>FOOTER</footer>
      </div>
    </div>
  );
};
export default Layout;
