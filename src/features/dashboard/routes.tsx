import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "layout/errors/no-match";
import HomePage from "./home";
import TasksRouter from "./tasks/routes";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/tasks/*" element={<TasksRouter />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default DashboardRouter;
