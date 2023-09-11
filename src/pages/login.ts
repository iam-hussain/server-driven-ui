import { Page } from "@/types";

export const LoginPage: Page = {
  metaData: {
    title: "Authentication",
    description: "Authentication forms built using the components.",
  },
  layout: [
    {
      _component: "Container",
      settings: {
        variant: "hero",
      },
      children: [
        {
          _component: "Container",
          settings: {
            variant: "half",
            className: "bg-zinc-900",
          },
          children: [
            {
              _component: "Container",
              settings: {
                variant: "float-to-center",
                className: "bg-blue-900",
              },
              children: [
                {
                  _component: "Button",
                  settings: {
                    dangerouslySetInnerHTML: {
                      __html: "hey",
                    },
                  },
                },
                {
                  _component: "Button",
                  settings: {
                    dangerouslySetInnerHTML: {
                      __html: "test",
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          _component: "Container",
          settings: {
            variant: "half",
          },
          children: [
            {
              _component: "Card",
              settings: {
                className: "w-[350px]",
              },
              children: [
                {
                  _component: "CardHeader",
                  settings: {},
                  children: [
                    {
                      _component: "CardTitle",
                      settings: {
                        dangerouslySetInnerHTML: {
                          __html: "Create project",
                        },
                      },
                    },
                    {
                      _component: "CardDescription",
                      settings: {
                        dangerouslySetInnerHTML: {
                          __html: "Deploy your new project in one-click.",
                        },
                      },
                    },
                  ],
                },
                {
                  _component: "CardContent",
                  settings: {},
                  children: [
                    {
                      _component: "Button",
                      settings: {},
                    },
                  ],
                },
                {
                  _component: "CardFooter",
                  settings: {
                    className: "flex justify-between",
                  },
                  children: [
                    {
                      _component: "Button",
                      settings: {
                        variant: "outline",
                        dangerouslySetInnerHTML: {
                          __html: "Cancel",
                        },
                      },
                    },
                    {
                      _component: "Button",
                      settings: {
                        variant: "secondary",
                        dangerouslySetInnerHTML: {
                          __html: "Cancel",
                        },
                      },
                    },
                    {
                      _component: "Button",
                      settings: {
                        dangerouslySetInnerHTML: {
                          __html: "Deploy",
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
