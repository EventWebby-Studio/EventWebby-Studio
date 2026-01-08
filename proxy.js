import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

// This function can be marked `async` if using `await` inside
export async function proxy(req) {
    const { pathname } = req.nextUrl

    if (!pathname.startsWith("/admin")) {
        return NextResponse.next()
    }


    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
    })

    console.log("token details check: " + token?.role)
    // Not logged in OR not admin
    if (!token || token.role !== "ADMIN") {
        return NextResponse.redirect(
            new URL("/login", req.url),
        )
    }

    return NextResponse.next()

}

// The matcher option allows you to target specific paths for the Proxy to run on
export const config = {
    matcher: '/admin/:path*',
}