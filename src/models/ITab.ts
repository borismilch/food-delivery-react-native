import { ReactElement } from "react";

export interface ITab {
  text: string,
  to: string,
  
  ActiveIcon: ReactElement<any, any>
}