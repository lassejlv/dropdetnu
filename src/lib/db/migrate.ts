import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { env } from "../env";
import postgres from "postgres";

const migrationClient = postgres(env.DRIZZLE_DATABASE_URL, {
  max: 1,
});

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./src/lib/db/migrations",
  });

  await migrationClient.end();
}

main();
