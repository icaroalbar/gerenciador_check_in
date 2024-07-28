import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Layout from "./components/partials/layout";
import ProtectedRoute from "./middlewares/protected.router";
import RedirectHomeRoute from "./middlewares/redirectHome.router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout>
          <Home />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <RedirectHomeRoute>
        <Login />
      </RedirectHomeRoute>
    ),
  },
]);
