import { elastic } from "../elastic";

export default async function ElasticInfoPage() {

  const info = await elastic.info();

  return (
    <div class="p-4">
      <a href="/" class="underline cursor-pointer">
        Back
      </a>
      <pre class="max-w-lg whitespace-pre-wrap break-words m-auto my-56 border">
        {JSON.stringify(info)}
      </pre>
    </div>
  );
}
