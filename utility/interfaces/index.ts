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

export interface SEOI {
  title?: string;
  description?: string;
  sameAs?: string;
  canonical?: string;
  article?: any;
}

export interface TagI {
  id: string;
  name: string;
  slug: string;
}

export interface CarouselDataI {
  id: string;
  title: string;
  slug: string;
  feature_image: string;
  created_at: string;
  excerpt: string;
  tag: TagI;
}
export interface PostDataI {
  id: string;
  uuid?: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  excerpt: string;
  tagss: TagI[];
}
export interface CmsData {
  bodyClass: string;
  carouselPosts: CarouselDataI[];
}

export interface UauSettings {
  storage?: StorageTypes;
  toolbarMenus: MenusI[];
  socialItens: ToolbarSocialsI[];
  menusCategories: MenusI[];
  tags: MenusI[];
  seo: SEOI;
}
