import { prisma } from "../../../../lib/prisma"
import bcrypt from "bcrypt"

export async function POST(req) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password required" }),
      { status: 400 }
    )
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    return new Response(
      JSON.stringify({ message: "Email already in use" }),
      { status: 400 }
    )
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword
    }
  })

  return new Response(
    JSON.stringify({ message: "User created" }),
    { status: 201 }
  )
}
