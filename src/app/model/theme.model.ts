export interface ThemeModel {
  name: string;
  'background': string;
  'surface': string;
  'nav-color': string;
  'main-color': string;
  'accent-color': string;
  'main-darker': string;
  'shadow': string;
  'shadow-opacity': number;
  'text-highlight': string;
  'text-main': string;
  'text-main-opacity': number;
  'text-secondary': string;
  'text-secondary-opacity': number;
  'text-on-img': string;
  'nav-height': string;
  'home-img': string;
}
export interface ThemeList{
  default: string;
  themes: ThemeModel[];
}
