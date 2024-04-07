import * as elasticsearch from "@elastic/elasticsearch";
import { env } from "./env";

export const elastic = new elasticsearch.Client({
  node: env.ELASTIC_NODE,
  auth: {
    username: "elastic",
    password: env.ELASTIC_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
