import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  return (
    <>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Outlet />
    </>
  );
};
