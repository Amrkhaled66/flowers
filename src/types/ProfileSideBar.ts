import { ReactNode } from "react";

type ElementItem = {
  name: string;
  icon: ReactNode;
  link: string;
  show?: boolean;
};

export default ElementItem;
