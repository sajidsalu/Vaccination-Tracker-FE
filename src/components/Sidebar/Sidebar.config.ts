import { ROUTES } from "../constants/routes";
import { SidebarMenuItemType } from "./Sidebar.types";

export const menuItems: SidebarMenuItemType[] = [
  {
    key: "dashboard",
    name: "Dashboard",
    route: ROUTES.DASHBOARD,
  },
  {
    key: "home",
    name: "Home",
    route: ROUTES.HOME,
  },
  {
    key: "profile",
    name: "Profile",
    route: ROUTES.PROFILE,
  },
  {
    key: "logout",
    name: "Logout",
    route: ROUTES.LOGIN,
  },
];
