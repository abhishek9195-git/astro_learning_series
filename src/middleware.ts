import { defineMiddleware }
from "astro:middleware";

export const onRequest =
  defineMiddleware(
    async (context, next) => {

      const path =
        context.url.pathname;

      const role =
        context.cookies
          .get("role")
          ?.value;

      /*
       * Authentication
       */

      const protectedRoutes = [
        "/user",
        "/admin",
      ];

      const requiresAuth =
        protectedRoutes.includes(
          path
        );

      if (
        requiresAuth &&
        !role
      ) {
        return context.redirect(
          "/login"
        );
      }

      /*
       * Authorization
       */

      if (
        path === "/admin" &&
        role !== "admin"
      ) {
        return new Response(
          "Forbidden",
          {
            status: 403,
          }
        );
      }

      return next();
    }
  );