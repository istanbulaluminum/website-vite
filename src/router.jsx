import { createBrowserRouter } from "react-router";
import { HomePage } from "./views/pages/HomePage";
import { AboutPage } from "./views/pages/AboutPage";
import { NotFound } from "./views/NotFound";
import { GuestLayout } from "./views/layouts/GuestLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);
