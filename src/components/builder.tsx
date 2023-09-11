import { randomId } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Container } from "./ui/container";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
// import * as builderComponents from "./ui";

const builderComponents: any = {
  button: Button,
  card: Card,
  container: Container,
  //   form: Form,
  input: Input,
  label: Label,
};

function Section({ model }: any) {
  const { key, children, ...props } = model;
  const Comp = builderComponents[model._type] || builderComponents.container;

  if (model.children && model.children.length) {
    return (
      <Comp {...model.settings}>
        <Builder model={model.children} />
      </Comp>
    );
  }
  return <Comp {...props} />;
}

function Builder({ model }: any) {
  return (
    <>
      {model.map(({ key, ...props }: any) => {
        const uniqueKey = key || randomId(props._type);
        return <Section model={props} key={uniqueKey} />;
      })}
    </>
  );
}

Builder.displayName = "Builder";

export default Builder;
