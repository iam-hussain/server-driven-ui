import { randomId } from "@/lib/utils";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import * as builderComponents from "./ui";

const builderComponents: any = {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Input,
  Label,
};

function Section({ children, settings, ...props }: any) {
  const Comp =
    builderComponents[props._component] || builderComponents.container;

  if (children && children.length) {
    return (
      <Comp {...settings} {...props}>
        <Builder layout={children} />
      </Comp>
    );
  }
  return <Comp {...settings} {...props} />;
}

function Builder({ layout }: any) {
  return (
    <>
      {layout.map(({ key, ...props }: any) => {
        const uniqueKey = key || randomId(props._component);
        return <Section key={uniqueKey} {...props} />;
      })}
    </>
  );
}

Builder.displayName = "Builder";

export default Builder;
