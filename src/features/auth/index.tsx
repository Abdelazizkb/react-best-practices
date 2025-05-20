import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./login";
import NoMatch from "../../layout/errors/no-match";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default Router;
