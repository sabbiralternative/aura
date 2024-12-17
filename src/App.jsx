import { useLocation } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <MainLayout />;
}

export default App;
