import type { Config } from 'drizzle-kit';

const config: Config =  { 
	schema: "./src/db/schema",
	out: "./migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!
	}
};

export default config;