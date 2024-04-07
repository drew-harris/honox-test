import { elastic } from "../elastic";

export default async function ElasticInfoPage() {
  const info = await elastic.info();

  return (
    <div class="p-4">
      <a href="/" class="underline cursor-pointer">
        Back
      </a>
      <pre class="p-4 border border-black max-w-lg whitespace-pre-wrap break-words m-auto mt-48">
        {JSON.stringify(info)}
      </pre>
    </div>
  );
}
