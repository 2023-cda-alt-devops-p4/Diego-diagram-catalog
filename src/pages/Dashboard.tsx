import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import data from "../data/diagrams.json";
import { IDiagramJSON } from "../models/diagramjson";

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
      <div className="search-container">
        <SearchBar dataToFilter={data as IDiagramJSON[]} />
      </div>
      <Outlet />
    </>
  );
};
