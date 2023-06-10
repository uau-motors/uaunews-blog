export interface StorageTypes {
  theme?: string;
  subscribe?: string;
  search?: string;
}
export interface MenusI {
  title: string;
  pathname: string;
}

export interface ToolbarSocialsI {
  title: string;
  url: string;
  icon: any;
}

export interface MenusCategoriesI {
  title: string;
  url: string;
  icon: any;
}

export interface UauSettings {
  storage?: StorageTypes;
  toolbarMenus: MenusI[];
  socialItens: ToolbarSocialsI[];
  menusCategories: MenusI[];
  tags: MenusI[];
}
