import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function POST(req) {
  const { name, email, contact, guestCount, message } = await req.json()

  if (!name || !email || !contact || !guestCount) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      { status: 400 }
    )
  }

  const res = await prisma.guest.create({
    data: {
      name,
      email,
      contact,
      guestCount: parseInt(guestCount),
      message
    }
  })

  if(res){
    console.log("API response: ", res);
    return new Response(
    JSON.stringify({ message: "Guest RSVP created" }),
    { status: 201 }
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

