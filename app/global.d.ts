import {} from "hono";
import { elastic } from "./elastic";

type Head = {
  title?: string;
};

declare module "hono" {
  interface Env {
    // Variables: {};
    // Bindings: {};
  }

  interface ContextVariableMap {
    elastic: typeof elastic;
  }

  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head):
      | Response
      | Promise<Response>;
  }
}
