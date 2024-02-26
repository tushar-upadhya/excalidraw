import { Icon, IconLayoutDashboard, IconSettings } from "@tabler/icons-react";

type MenuType = {
  href: string;
  text: string;
  icon: Icon;
  name?: string;
  path?: string;
  havePage: boolean;
};

export type SideNavMenuType = MenuType & {
  children?: Omit<MenuType, "icon">[];
};

const SIDE_NAV_MENUS: Array<SideNavMenuType> = [
  {
    href: "/organizations/{{orgId}}",
    text: "Dashboard",
    icon: IconLayoutDashboard,
    name: "organization",
    path: "organization",
    havePage: true,
  },
  {
    href: "/organizations/{{orgId}}/settings",
    text: "Settings",
    icon: IconSettings,
    path: "settings",
    havePage: true,
  },
];

export const sideNavMenu = (orgId: string) => {
  return SIDE_NAV_MENUS.map((menu) => {
    return { ...menu, href: menu.href.replace("{{orgId}}", orgId) };
  });
};

const findItemByPath = (
  data: Array<SideNavMenuType>,
  path: string
): Omit<MenuType, "icon"> | null => {
  for (const item of data) {
    if (item.path === path) {
      return item;
    }
    if (item.children) {
      const result: Omit<MenuType, "icon"> | null = findItemByPath(
        item.children as SideNavMenuType[],
        path
      );
      if (result) {
        return result;
      }
    }
  }
  return null;
};
