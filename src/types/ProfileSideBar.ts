import { ReactNode } from "react";

type ElementItem = {
  nameEn: string;
  nameAr: string;
  icon: ReactNode;
  link: string;
  show?: boolean;
};

export default ElementItem;
