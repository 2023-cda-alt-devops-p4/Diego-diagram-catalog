import styles from "./Outlet.module.css";
import { AllDiagrams } from "./allTabs/AllDiagrams";
import { EssentialDiagrams } from "./allTabs/EssentialDiagrams";
import { MeriseDiagrams } from "./allTabs/MeriseDiagrams";
import { UMLDiagrams } from "./allTabs/UMLDiagrams";
import { TabContent } from "./tabComponents/TabContent";

type OutletProps = {
  activeTab: string;
  isVisible: boolean;
};

export const Outlet = ({ activeTab, isVisible }: OutletProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={!isVisible ? "page" : "page page-with-navbar"}>
          <TabContent id="first-tab" activeTab={activeTab}>
            <AllDiagrams />
          </TabContent>
        </div>
        <div className={!isVisible ? "page" : "page page-with-navbar"}>
          <TabContent id="second-tab" activeTab={activeTab}>
            <EssentialDiagrams />
          </TabContent>
        </div>
        <div className={!isVisible ? "page" : "page page-with-navbar"}>
          <TabContent id="third-tab" activeTab={activeTab}>
            <UMLDiagrams />
          </TabContent>
        </div>
        <div className={!isVisible ? "page" : "page page-with-navbar"}>
          <TabContent id="fourth-tab" activeTab={activeTab}>
            <MeriseDiagrams />
          </TabContent>
        </div>
      </div>
    </div>
  );
};
