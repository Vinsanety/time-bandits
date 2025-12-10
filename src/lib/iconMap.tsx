import { ReactNode } from "react";
import { RouteIcon } from "@/types/routes";
import {
  Route,
  MountainSnow,
  Activity,
  Settings2,
  Layers,
  MoveHorizontal,
  ListCheck,
  Snowflake,
  Footprints,
  Bike,
  UserX,
} from "lucide-react";

const baseClass = "w-6 h-6 text-blue-600";

export const iconMap: Record<RouteIcon, ReactNode> = {
  route: <Route className={baseClass} />,
  activity: <Activity className={baseClass} />,
  settings2: <Settings2 className={baseClass} />,
  moveHorizontal: <MoveHorizontal className={baseClass} />,
  layers: <Layers className={baseClass} />,
  mountainSnow: <MountainSnow className={baseClass} />,
  listCheck: <ListCheck className={baseClass} />,
  snowflake: <Snowflake className={baseClass} />,
  userX: <UserX className={baseClass} />,
  multiSport: (
    <div className="flex gap-1">
      <Bike className={baseClass} />
      <Footprints className={baseClass} />
    </div>
  ),
};
