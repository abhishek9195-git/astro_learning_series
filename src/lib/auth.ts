export const users = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    username: "john",
    password: "user123",
    role: "user",
  },
];

export const sessions = new Map<
  string,
  {
    userId: number;
    role: string;
    username: string;
  }
>();