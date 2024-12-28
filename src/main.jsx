import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import ProjectPage from "./pages/project/ProjectPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import ProjectForm from "./pages/admin/projectForm/ProjectForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }

      />
        <Route
        path="/admin/projects/:id"
        element={
          <ProtectedRoute>
            <ProjectForm />
          </ProtectedRoute>
        }

      />
        <Route path="/work/:id" element={<ProjectPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
