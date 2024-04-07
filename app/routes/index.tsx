import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

export default createRoute(async (c) => {
  const info = await c.var.elastic.info();

  return c.render(
    <div class="mt-48 max-w-md mx-auto border border-black p-4">
      <Counter />
      <h1 class="bg-blue-200">Hello, drew! tailwind is working!</h1>
      <a href="/info" class="underline">
        Info page
      </a>
      <div>elasticsearch v{info.version.number}</div>
    </div>
  );
});
