import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import router from "./Routes.tsx";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "@/routes/root";
import Contact, { loader as contactLoader } from "@/routes/contact";
import EditContact, { action as editAction } from "@/routes/edit";
import ErrorPage from "@/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "/contacts/:id/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
