import { Routes, Route, Navigate } from "react-router-dom";
import Todos from "@/pages/Todos";
import Layout from "@/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Todos />} />
        <Route path="todos" element={<Navigate to="/" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
