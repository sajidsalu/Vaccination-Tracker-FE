export type SidebarItemKeys = "home" | "dashboard" | "logout" | "profile";

export type SidebarMenuItemType = {
  key: SidebarItemKeys;
  name: string;
  route: string;
};
