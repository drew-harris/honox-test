import { useState } from "hono/jsx";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div class="flex justify-between gap-2">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}
