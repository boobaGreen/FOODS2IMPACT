import { ReactNode } from "react";

type TLayout = {
  userName: string;
  points: number;
  level: number;
  handleRemoveUser: () => void;
  gameStatus: string;
  children: ReactNode;
};

const Layout = ({
  userName,
  points,
  level,
  handleRemoveUser,
  gameStatus,
  children,
}: TLayout) => {
  return (
    <div className="h-[100vh] flex flex-col bg-violet-300 p-4">
      <div className="flex flex-col justify-between h-full">
        <header>
          <div className="flex justify-between">
            HEADER
            {userName !== "" ? (
              <div className="flex gap-3">
                <div>{userName}</div>

                <button onClick={handleRemoveUser}>R</button>
              </div>
            ) : null}
          </div>
          <div className="flex justify-end">
            {userName !== "" ? (
              <div className="flex gap-3">
                <div>points {points}</div>
                <div>level {level}</div>
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
