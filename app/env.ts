// src/env.mjs
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    ELASTIC_NODE: z.string().url(),
    ELASTIC_PASSWORD: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  // client: {
  //   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  // },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnvStrict: {
    ELASTIC_NODE: import.meta.env.VITE_ELASTIC_NODE,
    ELASTIC_PASSWORD: import.meta.env.VITE_ELASTIC_PASSWORD,
  },
});
