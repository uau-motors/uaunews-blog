export type ToolbarProps = {
  menus: {
    title: string;
    pathname: string;
  }[];
};

export type SearchProps = {
  action: string;
  socials: {
    title: string;
    url: string;
    icon: any;
  }[];
};

export type MidleHeaderProps = {
  socials: {
    title: string;
    url: string;
    icon: any;
  }[];
};
