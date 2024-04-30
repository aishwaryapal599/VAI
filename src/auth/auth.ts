import "server-only";

import { Lucia } from "lucia";

import drizzleMySQLAdapter from "./drizzleMySQLAdapter";

export const lucia = new Lucia(drizzleMySQLAdapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },

  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
      id: attributes.id,
      role: attributes.role,
      firstName: attributes.first_name,
      lastName: attributes.last_name,
    };
  },
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

type UserRole = "user" | "admin";

type DatabaseUserAttributes = {
  username: string;
  id: string;
  role: UserRole;
  first_name: string;
  last_name: string;
};
