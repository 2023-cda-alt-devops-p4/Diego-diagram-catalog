import { Navigate, useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const Routes = () => {
    const element = useRoutes([
        {path: "dashboard", element: <Dashboard />},
        {path: "/", element: <Navigate to='/dashboard' replace />}
    ])
  return element;
}
