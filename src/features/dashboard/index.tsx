import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "layout/errors/no-match";
import HomePage from "./home";
import Sidebar from "layout/dashboard/sidebar";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="home" />} />
      <Route
        path="/home"
        element={
          <Sidebar currentLink="home">
            <HomePage />
          </Sidebar>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default Router;
