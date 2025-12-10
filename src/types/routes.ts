export interface Route {
  name: string;
  notes?: string;
}

export type RouteIcon =
  | "route"
  | "activity"
  | "settings2"
  | "moveHorizontal"
  | "layers"
  | "mountainSnow"
  | "listCheck"
  | "snowflake"
  | "userX"
  | "multiSport";

export interface RouteCategory {
  id: number;
  icon: RouteIcon;
  title: string;
  description?: string;
  routes: Route[];
}
