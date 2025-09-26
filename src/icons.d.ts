declare module "react-icons/*" {
  import { ComponentType, SVGProps } from "react";
  export type IconType = ComponentType<SVGProps<SVGSVGElement>>;
  const Icon: IconType;
  export default Icon;
}