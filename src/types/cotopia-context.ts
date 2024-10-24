import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CotopiaContextType {
  sideBarOpen: boolean;
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

export interface CotopiaContextProps {
  children: ReactNode;
}
