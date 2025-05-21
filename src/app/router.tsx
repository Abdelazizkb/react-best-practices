import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "layout/errors/no-match";
import AuthLayout from "layout/auth";

const Auth = lazy(() => import("../features/auth"));

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="auth" />} />
      <Route
        path="/auth/*"
        element={
          <AuthLayout>
            <Auth />
          </AuthLayout>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRouter;
