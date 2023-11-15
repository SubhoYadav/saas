import { createBrowserRouter } from "react-router-dom";

// Authenticator
import Authenticate from "../wrappers/Authenticate.jsx";

// Layout
import Layout from "../components/Layout.jsx";

// Pages
import Home from "../pages/home/Home.jsx";
import User from "../pages/user/User.jsx";
import Products from "../pages/products/Products.jsx";
import Chats from "../pages/chats/Chats.jsx";
import TabContent from "../components/tabs/TabContent.jsx";
import Settings from "../pages/settings/Settings.jsx";
import VideoCalling from "../pages/videocall/VideoCalling.jsx";

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
