import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

export default createRoute(async (c) => {
  const info = await c.var.elastic.info();

  return c.render(
    <div class="mt-48 max-w-md mx-auto border border-black p-4">
      <Counter />
      <hr class="border-[0.5px] border-gray-100 my-4" />
      <h1 class="bg-blue-200 px-2">Hello, drew! tailwind is working!</h1>
      <a href="/info" class="underline">
        Info page
      </a>
      <div>elasticsearch v{info.version.number}</div>
    </div>
  );
});
