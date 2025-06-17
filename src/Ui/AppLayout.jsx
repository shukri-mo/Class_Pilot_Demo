import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
      <div className="bg-gradient-to-b from-[#312e83] to-[#4c48a3] row-span-2 pt-0 text-white">
        <Sidebar />
      </div>
      <div className="col-start-2 row-start-1 flex gap-[2.4rem] items-center justify-end">
        <Header />
      </div>
      <main className="col-start-2 row-start-2 pt-16 px-[4.8rem] pb-[6.4rem] overflow-scroll bg-gray-300">
        <div className="flex flex-col gap-[2.3rem] mx-auto max-w-[120rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
