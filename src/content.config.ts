import { defineCollection, z } from "astro:content";
import type { IProduct } from "./types/Product";

const BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

const products = defineCollection({
    loader: async () => {
        const response = await fetch(
            `${BASE_URL}/products`
        );

        const products = (await response.json()).products;

        return products.map((product: any) => ({
            ...product,
            id: product.id.toString()
        }));

    },
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string()
    })
});

export const collections = {
    products
};