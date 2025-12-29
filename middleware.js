import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
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

export const config = {
  matcher: ["/admin/:path*"]
}
