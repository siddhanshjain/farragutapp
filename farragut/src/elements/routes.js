import Dashboard from "../component/Dashboard";
import Reports from "../component/Reports";
import Login from "../pages/Login";
import LandingPageNew from "../pages/LandingPageNew";
import icon1 from "../assets/img/icons/7icon.svg";
import icon2 from "../assets/img/icons/6icon.svg";
import icon3 from "../assets/img/icons/5icon.svg";
import icon4 from "../assets/img/icons/4icon.svg";
import icon5 from "../assets/img/icons/3icon.svg";
import icon6 from "../assets/img/icons/2icon.svg";
import icon7 from "../assets/img/icons/1icon.svg";
import DashboardTest from "../pages/DashboardTest";

export const authProtectedRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: icon1,
    element: Dashboard,
  },
  {
    path: "/users",
    name: "Users",
    icon: icon2,
    element: Reports,
  },
  {
    path: "/reports",
    name: "Reports",
    icon: icon3,
    element: Reports,
  },
  {
    path: "/application",
    name: "Application",
    icon: icon4,
    element: Dashboard,
  },
  {
    path: "/featureset",
    name: "Feature Set",
    icon: icon5,
    element: Dashboard,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: icon6,
    element: Dashboard,
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
  {
    path: "/dashboardtest",
    // name: "Login",
    element: DashboardTest,
  },
];
