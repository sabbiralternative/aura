import { Outlet } from "react-router-dom";
import RightSidebar from "../components/shared/RightSidebar/RightSidebar";
import { useState } from "react";

const MainLayout = () => {
  const [showFullScreen, setShowFullScreen] = useState(true);

  const handleFullScreen = () => {
    if (showFullScreen) {
      document.body.requestFullscreen();
      setShowFullScreen(false);
    }
  };

  return (
    <div
      onClick={handleFullScreen}
      className="min-h-screen max-w-[430px] mx-auto relative"
    >
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default MainLayout;
