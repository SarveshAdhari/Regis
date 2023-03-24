import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

import { Navbar } from "../../components";
import "./Sidebar.css";

const SharedLayout = () => {
  const { sidebarState, logoutUser, toggleSidebar } = useAppContext()
  const navigate = useNavigate()

  const resetSidebar = () => {
    if(window.innerWidth < 767){
      toggleSidebar(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="shared">
        <div className={sidebarState ? "sidebar-visible" : "sidebar"}>
          <div className="homepage" onClick={()=>{navigate('/'); resetSidebar()}}>
            Homepage
          </div>
          <div className="my-profile" onClick={()=>{navigate('/profile'); resetSidebar()}}>
            My Profile
          </div>
          <div className="my-applications" onClick={()=>{navigate('/myapplications'); resetSidebar()}}>
            My Applications
          </div>
          <div className="shared-logout" onClick={()=>logoutUser()}>
            Logout
          </div>
        </div>
        <div className={!sidebarState? 'shared-content':"hide-content"}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
