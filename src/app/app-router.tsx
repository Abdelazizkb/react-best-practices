import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "layout/errors/no-match";
import AuthLayout from "layout/auth";
import Layout from "layout/dashboard";

const AuthRouter = lazy(() => import("../features/auth/routes"));
const DashboardRouter = lazy(() => import("../features/dashboard/routes"));

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" />} />
      <Route
        path="/auth/*"
        element={
          <AuthLayout>
            <AuthRouter />
          </AuthLayout>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <Layout>
            <DashboardRouter />
          </Layout>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRouter;
