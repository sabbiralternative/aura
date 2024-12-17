import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex items-center justify-center lg:h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;
