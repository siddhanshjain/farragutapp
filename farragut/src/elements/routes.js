import Dashboard from "../component/Dashboard";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Reports",
    icon: "nc-icon nc-notes",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Application",
    icon: "nc-icon nc-paper-2",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Feature Set",
    icon: "nc-icon nc-atom",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Logout",
    icon: "nc-icon nc-pin-3",
    component: Dashboard,
    layout: "/admin",
  },
];

export default dashboardRoutes;
