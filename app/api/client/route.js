import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { Prisma } from "@prisma/client"

// API to add guest
export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, contact, message } = body

    // Basic validation
    if (!name || !email || !contact) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All required fields must be filled"
        }),
        { status: 400 }
      )
    }

    const guest = await prisma.client.create({
      data: {
        name,
        email,
        contact,
        message
      }
    })

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Interest form submitted successfully",
        data: guest
      }),
      { status: 201 }
    )

  } catch (error) {
    console.error("RSVP API Error:", error)

    // Handle Prisma known errors (e.g. duplicate email)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return new Response(
          JSON.stringify({
            success: false,
            message: "This email/contact has already existed"
          }),
          { status: 409 } // Conflict
        )
      }
    }

    // Generic server error
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong. Please try again later."
      }),
      { status: 500 }
    )
  }
}

export async function GET(req) {
  const clients = await prisma.client.findMany()
  return new Response(
    JSON.stringify({ clients }),
    { status: 200 }
  )
}

