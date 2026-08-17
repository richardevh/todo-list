import { Routes, Route } from "react-router-dom";
import Todos from "@/pages/Todos";
import Layout from "@/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="tareas" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
