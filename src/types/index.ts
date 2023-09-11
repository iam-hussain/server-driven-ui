import { ForwardedRef } from "react";
import { ButtonProps } from "./../components/ui/button";
import { ContainerProps } from "@/components/ui/container";
import { Metadata } from "next/types";

export interface BaseComponent {
  children?: BuilderLayout[] | [];
}

interface ButtonComponent extends BaseComponent {
  _component: "Button";
  settings: ButtonProps;
}

interface CardComponent extends BaseComponent {
  _component: "Card" | "CardHeader" | "CardContent" | "CardFooter";
  settings: React.HTMLAttributes<HTMLDivElement>;
}

interface CardTitleComponent extends BaseComponent {
  _component: "CardTitle";
  settings: React.HTMLAttributes<HTMLHeadingElement>;
}

interface CardDescriptionComponent extends BaseComponent {
  _component: "CardDescription";
  settings: React.HTMLAttributes<HTMLParagraphElement>;
}

interface ContainerComponent extends BaseComponent {
  _component: "Container";
  settings: ContainerProps;
}

export type BuilderLayout =
  | ButtonComponent
  | CardComponent
  | CardTitleComponent
  | CardDescriptionComponent
  | ContainerComponent;

export type Page = {
  metaData: Metadata;
  layout: BuilderLayout[];
};
