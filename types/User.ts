// Base User type
export type User = {
  username: string;
  email: string;
  password: string;
  id: string;
};

// What the client sends to the server // ---
export interface RequestUser {
  email: User["email"];
  username: User["username"];
  password: User["password"];
}

// What the server sends to the client // ---
export interface ResponseUser {
  id: User["id"];
  username: User["username"];
  email: User["email"];
  password: User["password"];
}
