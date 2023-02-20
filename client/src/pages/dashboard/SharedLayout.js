import { Outlet } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

import Navbar from "../../components/Navbar";
import "./Sidebar.css";

const SharedLayout = () => {
  const { sidebarState } = useAppContext();
  return (
    <>
      <Navbar />
      <div className="shared">
        <div className={sidebarState ? "sidebar-visible" : "sidebar"}>
          someed
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
