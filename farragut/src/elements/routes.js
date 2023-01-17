import Dashboard from "../component/Dashboard";
import Login from "../pages/Login";
import LandingPageNew from "../pages/LandingPageNew";

export const authProtectedRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    element: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    element: Dashboard,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Reports",
    icon: "nc-icon nc-notes",
    element: Dashboard,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Application",
    icon: "nc-icon nc-paper-2",
    element: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Feature Set",
    icon: "nc-icon nc-atom",
    element: Dashboard,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Logout",
    icon: "nc-icon nc-pin-3",
    element: Dashboard,
    layout: "/admin",
  },
];

export const publicRoutes = [
  {
    path: "/",
    // name: "LandingPage",
    element: LandingPageNew,
  },
  {
    path: "/login",
    // name: "Login",
    element: Login,
  },
];
