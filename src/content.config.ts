import { defineCollection, z } from "astro:content";

const BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

const users = defineCollection({
    loader: async () => {
        const response = await fetch(
            `${BASE_URL}/users`
        );

        const users = await response.json();

        return users.map((user: any) => ({
            ...user,
            id: user.id.toString()
        }));

    },

    schema: z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        website: z.string(),
        company: z.object({
            name: z.string()
        })
    })
});

export const collections = {
    users
};