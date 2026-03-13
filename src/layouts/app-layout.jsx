
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container px-4 sm:px-8 lg:px-20">
        <Header/>
        <Outlet />
      </main>
      <div className="px-4 py-6 sm:px-10 sm:py-8 text-center bg-gray-800 mt-10">
        Made with 💗 by Sayak
      </div>
    </div>
  );
};

export default AppLayout;
