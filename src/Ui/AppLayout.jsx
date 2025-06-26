import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[18rem_1fr] grid-rows-[auto_1fr] h-screen">

{/* border-r border-gray-300 rounded-tr-lg rounded-br-lg */}
      <div className="bg-gradient-to-b from-indigo-900 via-[#4432b8] to-[#5B1A85] row-span-2 pt-0 text-gray-300
      ">
        <Sidebar />
      </div>
      <div className="col-start-2 row-start-1 flex gap-[2.4rem] items-center justify-between border-b-1 border-gray-300 bg-white p-4">
        <Header />
      </div>
      <main className="col-start-2 row-start-2 pt-6 px-[2rem] pb-[6.4rem] overflow-scroll">
        <div className="flex flex-col gap-[2.3rem] mx-auto max-w-[120rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
