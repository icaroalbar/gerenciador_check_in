import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Layout from "./components/ui/partials/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
