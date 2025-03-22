import { ComponentChild } from "preact";

export interface Tab {
  id: string;
  name: string;
  onClick?: () => void;
  noSwitch?: boolean;
  pane?: ComponentChild;
}
