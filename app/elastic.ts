import * as elasticsearch from "@elastic/elasticsearch";
import { env } from "./env";

var elastic: elasticsearch.Client;

try {
  elastic = new elasticsearch.Client({
    node: env.ELASTIC_NODE,
    auth: {
      username: "elastic",
      password: env.ELASTIC_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
} catch (err) {
  console.error(err);
}

export { elastic };
