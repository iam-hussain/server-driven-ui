import { ButtonProps } from "./../components/ui/button";
import { ContainerProps } from "@/components/ui/container";

export interface BaseComponent {
  children?: BuilderModel[] | [];
}

interface ContainerComponent extends BaseComponent {
  _type: "container";
  settings: ContainerProps;
}

interface ButtonComponent extends BaseComponent {
  _type: "button";
  settings: ButtonProps;
}

export type BuilderModel = ContainerComponent | ButtonComponent;
