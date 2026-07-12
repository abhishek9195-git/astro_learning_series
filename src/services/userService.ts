import type { User } from "../types/User";

const BASE_URL =
  import.meta.env.PUBLIC_API_BASE_URL;

export async function getUsers(): Promise<User[]> {

    console.log('==> BASE_URL', BASE_URL)

  const response = await fetch(
    `${BASE_URL}/users`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch users"
    );
  }

  return response.json();
}

export async function getUser(
  id: string
): Promise<User> {
  const response = await fetch(
    `${BASE_URL}/users/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch user"
    );
  }

  return response.json();
}