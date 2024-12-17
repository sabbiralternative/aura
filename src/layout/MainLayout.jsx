import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex items-center justify-center lg:h-screen">
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="relative mx-auto bg-black select-none"
      >
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
