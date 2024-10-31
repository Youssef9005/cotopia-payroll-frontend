"use server"
import { cookies } from "next/headers";

export async function setToken(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("sessionToken", token, {
    maxAge: 1800,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

    setTimeout(() => {
      localStorage.removeItem("sessionToken");
    }, 1800 * 1000);
}
