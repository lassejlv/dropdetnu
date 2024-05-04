import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DRIZZLE_DATABASE_URL: z.string(),
  },
  runtimeEnv: process.env,
});