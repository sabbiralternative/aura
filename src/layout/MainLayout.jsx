import { Outlet } from "react-router-dom";
import RightSidebar from "../components/shared/RightSidebar/RightSidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen max-w-[430px] mx-auto relative">
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default MainLayout;
