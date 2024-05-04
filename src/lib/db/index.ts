import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { env } from "../env";
import postgres from "postgres";

const client = postgres(env.DRIZZLE_DATABASE_URL, { max: 1 });

export const db = drizzle(client, { schema, logger: true });
