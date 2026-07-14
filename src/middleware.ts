import { defineMiddleware } from "astro:middleware";
import { sessions } from "./lib/auth";

export const onRequest = defineMiddleware(
  async (context, next) => {
    const pathname = context.url.pathname;

    const protectedRoutes = [
      "/user",
      "/admin",
    ];

    const needsAuth =
      protectedRoutes.includes(pathname);

    if (!needsAuth) {
      return next();
    }

    const sessionId =
      context.cookies
        .get("sessionId")
        ?.value;

    if (!sessionId) {
      return context.redirect("/login");
    }

    const session =
      sessions.get(sessionId);

    if (!session) {
      return context.redirect("/login");
    }

    if (
      pathname === "/admin" &&
      session.role !== "admin"
    ) {
      return new Response(
        "Forbidden",
        {
          status: 403,
        }
      );
    }

    (context.locals as any).user = session;

    return next();
  }
);