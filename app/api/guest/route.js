import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { Prisma } from "@prisma/client"

// API to add guest
export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, contact, guestCount, message } = body

    // Basic validation
    if (!name || !email || !contact || !guestCount) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All required fields must be filled"
        }),
        { status: 400 }
      )
    }

    // Optional: validate guestCount is a number
    const parsedGuestCount = parseInt(guestCount)
    if (isNaN(parsedGuestCount) || parsedGuestCount <= 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Guest count must be a valid number"
        }),
        { status: 400 }
      )
    }

    const guest = await prisma.guest.create({
      data: {
        name,
        email,
        contact,
        guestCount: parsedGuestCount,
        message
      }
    })

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "RSVP submitted successfully",
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
            message: "This email has already RSVP’d"
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
  const guests = await prisma.guest.findMany()
  return new Response(
    JSON.stringify({ guests }),
    { status: 200 }
  )
}

