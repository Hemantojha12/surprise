// No database connection needed for this static site
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@shared/schema";

// Dummy connection to satisfy imports if needed, but won't be used
export const pool = new Pool({ connectionString: "postgres://dummy:dummy@localhost:5432/dummy" });
export const db = drizzle(pool, { schema });
