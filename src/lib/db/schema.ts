import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const goals = pgTable("goals", {
  id: serial("id").primaryKey(),
  goal: varchar("goal").notNull(),
  days: integer("days").default(20),
  kinde_userId: varchar("kinde_userId").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});
