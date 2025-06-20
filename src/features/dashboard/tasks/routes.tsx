import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "layout/errors/no-match";
import Tasks from ".";

const TasksRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="all" />} />
      <Route path=":scope" element={<Tasks />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default TasksRouter;
