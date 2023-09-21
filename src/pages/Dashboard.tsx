import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Outlet } from "../components/Outlet";

export const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("first-tab");

  return (
    <>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Outlet activeTab={activeTab} isVisible={isVisible} />
    </>
  );
};
