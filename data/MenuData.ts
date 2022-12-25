export interface SubMenuItem {
  id: number;
  title: string;
  subtitle: string;
  link: string;
}

export interface MenuDataItem {
  id: number;
  title: string;
  dropdown: boolean;
  subMenus: SubMenuItem[];
}

export const menuData: MenuDataItem[] = [
  { id: 1, title: "Home", dropdown: false, subMenus: [] },
  {
    id: 2,
    title: "Company",
    dropdown: true,
    subMenus: [
      {
        id: 1,
        title: "About us",
        subtitle: "Get to know who we are",
        link: "/",
      },
      {
        id: 2,
        title: "Mission",
        subtitle: "What and how we do",
        link: "/",
      },
      {
        id: 3,
        title: "Vision",
        subtitle: "Where we are going",
        link: "/",
      },
      {
        id: 4,
        title: "Team",
        subtitle: " Where we are going",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Products",
    dropdown: true,
    subMenus: [
      {
        id: 1,
        title: "Youth",
        subtitle: "Get to know who we are",
        link: "/",
      },
      {
        id: 2,
        title: "Yog rooms",
        subtitle: "What and how we do",
        link: "/",
      },
      {
        id: 3,
        title: "General",
        subtitle: "Where we are going",
        link: "/",
      },
      {
        id: 4,
        title: "Future modules",
        subtitle: "Where we are going",
        link: "/",
      },
    ],
  },
  { id: 4, title: "Contact us", dropdown: false, subMenus: [] },
];
