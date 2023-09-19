import styles from "./Outlet.module.css";
import { EssentialDiagrams } from "./allTabs/EssentialDiagrams";
import { MeriseDiagrams } from "./allTabs/MeriseDiagrams";
import { UMLDiagrams } from "./allTabs/UMLDiagrams";
import { TabContent } from "./tabComponents/TabContent";

type OutletProps = {
  activeTab: string;
};

export const Outlet = ({ activeTab }: OutletProps) => {
  return (
    <div className={styles.container}>
      <TabContent id="first-tab" activeTab={activeTab}>
        <EssentialDiagrams />
      </TabContent>
      <TabContent id="second-tab" activeTab={activeTab}>
        <UMLDiagrams />
      </TabContent>
      <TabContent id="third-tab" activeTab={activeTab}>
        <MeriseDiagrams />
      </TabContent>
    </div>
  );
};
