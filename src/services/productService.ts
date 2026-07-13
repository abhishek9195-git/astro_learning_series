export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

const BASE_URL =
  "https://dummyjson.com";

export async function getProducts() {
  const response = await fetch(
    `${BASE_URL}/products`
  );

  const data = await response.json();

  return data.products as Product[];
}

export async function getProduct(
  id: string
) {
  const response = await fetch(
    `${BASE_URL}/products/${id}`
  );

  return response.json() as Promise<Product>;
}