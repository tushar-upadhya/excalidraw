import { Icon, IconChartBubble } from "@tabler/icons-react";

type MenuType = {
  href: string;
  text: string;
  icon: Icon;
  name?: string;
  path?: string;
  havePage: boolean;
};

export type HeaderMenuType = MenuType & {
  children?: Omit<MenuType, "icon">[];
};

const HEADER_MENUS: Array<HeaderMenuType> = [
  {
    href: "/board",
    text: "Board",
    icon: IconChartBubble,
    havePage: true,
  },
];

export const headerMenu = (orgId?: string) => {
  return HEADER_MENUS.map((menu) => {
    return { ...menu, href: menu.href.replace("{{orgId}}", String(orgId)) };
  });
};
