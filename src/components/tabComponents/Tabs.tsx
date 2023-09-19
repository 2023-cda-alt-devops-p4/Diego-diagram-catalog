import { useState } from "react";
import { Outlet } from "../Outlet";
import styles from "./Tabs.module.css";
import { TabItem } from "./TabItem";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("first-tab");

  console.log(activeTab);

  return (
    <div className={styles.tabs}>
      <ul className={styles.nav}>
        <TabItem
          title="Diagrammes indispensables"
          id="first-tab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Diagrammes UML"
          id="second-tab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Diagrammes Merise"
          id="third-tab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className={styles.outlet}>
        <Outlet activeTab={activeTab} />
      </div>
    </div>
  );
};
