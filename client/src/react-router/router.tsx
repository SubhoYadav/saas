import { createBrowserRouter } from "react-router-dom";

// Authenticator
import Authenticate from "../wrappers/Authenticate.tsx";

// Layout
import Layout from "../components/Layout.tsx";

// Pages
import Home from "../pages/home/Home.tsx";
import User from "../pages/user/User.tsx";
import Products from "../pages/products/Products.tsx";
import Chats from "../pages/chats/Chats.tsx";
import TabContent from "../components/tabs/TabContent.tsx";
import Settings from "../pages/settings/Settings.tsx";
import VideoCalling from "../pages/videocall/VideoCalling.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticate>
        <Layout />
      </Authenticate>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/users",
        element: <User></User>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
    ],
  },
  {
    path: "/chats",
    element: (
      <Authenticate>
        <Chats />
      </Authenticate>
    ),
  },
  {
    path: "/videocall",
    element: (
      <Authenticate>
        <VideoCalling />
      </Authenticate>
    ),
  },
]);

export default router;
