import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users",{
	id:				text("id").primaryKey().notNull(),
	name:			text("name").notNull(),
	mobile:		text("mobile").notNull().unique(),
	email:		text("email").notNull().unique(),
	passHash: text("password_hash").notNull(),
	role:			text("role"),
	photoUrl: text("photo_url"),
	location: text("location"),
	status:		text("status"),
	fcmToken: text("fcm_token"),
	createdAt:timestamp("creaetd_at")
});
