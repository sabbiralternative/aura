import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen max-w-[430px] mx-auto">
      <Outlet />
    </div>
  );
};

export default MainLayout;
