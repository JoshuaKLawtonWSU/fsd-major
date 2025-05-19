import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function isLoggedIn() {
    const userCookies = await cookies();

    return userCookies.has("auth_token");
}

export async function logIn(formData: FormData) {
    "use server";
    if (formData.get("username") === "admin" && formData.get("password") === "123") {
        (await cookies()).set("auth_token", "admin", {
            path: "/",
            maxAge: 60 * 60, // 1 hour
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
    }
    redirect("/");
}

export async function logOut() {
    "use server";
    (await cookies()).set("auth_token", "", {
        path: "/",
        maxAge: 0, // Expire immediately
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });
    redirect("/");
}