import { useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { EssentialDiagrams } from "../components/allTabs/EssentialDiagrams";
import { AllDiagrams } from "../components/allTabs/AllDiagrams";
import { UMLDiagrams } from "../components/allTabs/UMLDiagrams";
import { MeriseDiagrams } from "../components/allTabs/MeriseDiagrams";
import { Diagram } from "../pages/Diagram";

export const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "/", element: <AllDiagrams /> },
        { path: "/essentials", element: <EssentialDiagrams />},
        { path: "/uml-diagrams", element: <UMLDiagrams /> },
        { path: "/merise-diagrams", element: <MeriseDiagrams /> },
        { path: "/:parent/:id", element: <Diagram /> },
      ],
    },
  ]);
  return element;
};
