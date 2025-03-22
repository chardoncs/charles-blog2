import { ComponentChild } from "preact";

export interface Link {
  name: string;
  href?: string;
  icon?: ComponentChild;
}
