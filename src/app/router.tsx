import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "layout/errors/no-match";
import AuthLayout from "layout/auth";
import Layout from "layout/dashboard";

const Auth = lazy(() => import("../features/auth"));
const Dashboard = lazy(() => import("../features/dashboard"));

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" />} />
      <Route
        path="/auth/*"
        element={
          <AuthLayout>
            <Auth />
          </AuthLayout>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRouter;
