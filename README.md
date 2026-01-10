This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Setup configuration ###############################################################################################
## project setup command initial
npx create-next-app@latest innohub-boilerplate
cd innohub-boilerplate
npm install next-auth prisma @prisma/client bcrypt
npx prisma init

## prisma migration command
npx prisma migrate dev --name init
npx prisma generate

## install Tailwindcss elements
npm install @tailwindplus/elements

## Framer motion for page interation 
npm install framer-motion

## install toast to display error /success message
npm install react-hot-toast

## to use scss u need npm install smth
npm install sass

## font
npm install @fontsource/playfair-display @fontsource/lora

## .env file
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="dev-secret-change-later"
NEXTAUTH_URL="http://localhost:3000"

File structure
innohub-boilerplate/
├── app/
│   ├── (public)/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   
│   │
│   ├── (auth)/
│   │   └── login/page.jsx
│   │
│   ├── (admin)/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   └── cms/
│   │       ├── page.jsx
│   │       └── [id]/page.jsx
│   │
│   ├── api/
│   │   ├── auth/[...nextauth]/route.js
│   │   └── cms/route.js
│   │
│   ├── layout.jsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   └── Input.jsx
│   └── layout/
│       ├── Navbar.jsx
│       └── AdminSidebar.jsx
│
├── lib/
│   ├── prisma.js
│   └── auth.js
│
├── prisma/
│   └── schema.prisma
│
├── middleware.js
├── tailwind.config.js
├── package.json
└── README.md



🧱 INNOHUB BOILERPLATE — FULL GENERATION

## PHASE 1: CORE FOUNDATION (REQUIRED)

This phase gives you:

✅ App Router setup

✅ Tailwind base styles

✅ Prisma DB connection

✅ Auth foundation

✅ Route protection

Once this is done, everything else plugs in cleanly.

1️⃣ package.json (verify dependencies)

After running create-next-app, ensure you have:

{
  "name": "innohub-boilerplate",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "prisma": "prisma"
  },
  "dependencies": {
    "@prisma/client": "^5.7.1",
    "bcrypt": "^5.1.0",
    "next": "14.1.0",
    "next-auth": "^4.24.5",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "prisma": "^5.7.1"
  }
}


Then run:

npm install

2️⃣ Prisma Setup (Database)
📄 prisma/schema.prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
}

model Post {
  id        String     @id @default(uuid())
  title     String
  slug      String     @unique
  content   String
  status    PostStatus @default(DRAFT)
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}

enum Role {
  USER
  ADMIN
}

enum PostStatus {
  DRAFT
  PUBLISHED
}


Run:

npx prisma migrate dev --name init

3️⃣ Prisma Client Helper
📄 lib/prisma.js
import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis

export const prisma =
  globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

4️⃣ NextAuth Configuration
📄 lib/auth.js
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { prisma } from "./prisma"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) return null

        const valid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!valid) return null

        return {
          id: user.id,
          email: user.email,
          role: user.role
        }
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    }
  }
}

5️⃣ Auth API Route
📄 app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

6️⃣ Route Protection (Admin Guard)
📄 middleware.js
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const token = await getToken({ req })
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin")

  if (isAdminRoute && (!token || token.role !== "ADMIN")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

export const config = {
  matcher: ["/admin/:path*"]
}

7️⃣ Global Layout & Tailwind Base
📄 app/layout.jsx
import "./globals.css"

export const metadata = {
  title: "InnoHub Boilerplate",
  description: "Agency-ready fullstack boilerplate"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}

8️⃣ Tailwind Globals
📄 app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

.input {
  @apply w-full border p-3 rounded;
}

.btn {
  @apply bg-black text-white px-4 py-2 rounded hover:opacity-90;
}

✅ CHECKPOINT (STOP HERE)

At this point you should be able to:

npm run dev


✔ App runs
✔ Database exists
✔ Auth routes load
✔ Middleware works


## database prisma setup 
✅ FIX (Do This Exactly — 3 Minutes)
✅ STEP 1: Create / Fix .env (CRITICAL)

At project root, create a file called:

.env


Put ONLY this inside:

DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="dev-secret-change-later"
NEXTAUTH_URL="http://localhost:3000"


⚠️ Very important

Use double quotes

Use forward slashes

No spaces

✅ STEP 2: Verify schema.prisma

Open prisma/schema.prisma
Make sure it looks exactly like this:

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}


❌ NOT hardcoded
❌ NOT localhost
✅ Must use env("DATABASE_URL")

✅ STEP 3: Reset Prisma State (Safe)

From project root:

rm -rf prisma/migrations


On Windows (PowerShell):

Remove-Item -Recurse -Force prisma/migrations


Then recreate migrations:

npx prisma migrate dev --name init

✅ STEP 4: Verify DB File Exists

After success, you should see:

prisma/
├── dev.db   ✅
└── migrations/

✅ EXPECTED SUCCESS OUTPUT

You should see something like:

✔ SQLite database dev.db created
✔ Generated Prisma Client
✔ Migration init applied


If you see this → you’re unblocked 🎉

## 🧱 PHASE 2 — PUBLIC, AUTH, ADMIN, CMS (REAL CODE)
✅ FINAL STRUCTURE (REFERENCE)
app/
├── (public)/
│   ├── layout.jsx
│   ├── page.jsx
│   └── blog/
│       ├── page.jsx
│       └── [slug]/page.jsx
│
├── (auth)/
│   └── login/page.jsx
│
├── (admin)/
│   ├── layout.jsx
│   └── admin/
│       ├── page.jsx
│       └── cms/
│           ├── page.jsx
│           └── new/page.jsx

🌍 1️⃣ Public Layout (Navbar + Footer)
app/(public)/layout.jsx
import Link from "next/link"

export default function PublicLayout({ children }) {
  return (
    <>
      <nav className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <Link href="/" className="font-bold text-xl">
            InnoHub
          </Link>
          <div className="space-x-4">
            <Link href="/blog">Blog</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>

      <footer className="border-t mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} InnoHub
      </footer>
    </>
  )
}

🏠 2️⃣ Public Home Page
app/(public)/page.jsx
export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">
        Build Faster with InnoHub
      </h1>
      <p className="text-gray-600 mb-8">
        An agency-ready fullstack boilerplate with CMS & Admin.
      </p>
      <a
        href="/login"
        className="btn inline-block"
      >
        Get Started
      </a>
    </section>
  )
}

📰 3️⃣ Public Blog (CMS Driven)
app/(public)/blog/page.jsx
import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" }
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {posts.length === 0 && (
        <p className="text-gray-500">No posts yet.</p>
      )}

      <div className="space-y-4">
        {posts.map(post => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block border p-4 rounded hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

app/(public)/blog/[slug]/page.jsx
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

export default async function BlogPost({ params }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug }
  })

  if (!post || post.status !== "PUBLISHED") {
    notFound()
  }

  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}

🔐 4️⃣ Login Page (NextAuth)
app/(auth)/login/page.jsx
"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false
    })

    if (res?.error) {
      setError("Invalid credentials")
    } else {
      window.location.href = "/admin"
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {error && (
        <p className="text-red-500 text-sm mb-3">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn w-full">Login</button>
      </form>
    </div>
  )
}

🧠 5️⃣ Admin Layout (Sidebar)
app/(admin)/layout.jsx
import Link from "next/link"

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="font-bold text-xl mb-6">Admin</h2>
        <nav className="space-y-3">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/cms">CMS</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  )
}

📊 6️⃣ Admin Dashboard
app/(admin)/admin/page.jsx
export default function AdminDashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">
        Welcome to the InnoHub admin panel.
      </p>
    </>
  )
}

📝 7️⃣ CMS – List Posts
app/(admin)/admin/cms/page.jsx
import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function CMSPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">CMS</h1>
        <Link href="/admin/cms/new" className="btn">
          New Post
        </Link>
      </div>

      <div className="space-y-4">
        {posts.map(post => (
          <div
            key={post.id}
            className="border p-4 rounded bg-white flex justify-between"
          >
            <div>
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

✍️ 8️⃣ CMS – Create Post
app/(admin)/admin/cms/new/page.jsx
"use client"

import { useState } from "react"

export default function NewPostPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    status: "DRAFT"
  })

  async function submit(e) {
    e.preventDefault()

    await fetch("/api/cms", {
      method: "POST",
      body: JSON.stringify(form)
    })

    window.location.href = "/admin/cms"
  }

  return (
    <form onSubmit={submit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">New Post</h1>

      <input
        className="input"
        placeholder="Title"
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <input
        className="input"
        placeholder="Slug"
        onChange={e => setForm({ ...form, slug: e.target.value })}
      />
      <textarea
        className="input"
        rows="8"
        placeholder="Content"
        onChange={e => setForm({ ...form, content: e.target.value })}
      />
      <select
        className="input"
        onChange={e => setForm({ ...form, status: e.target.value })}
      >
        <option value="DRAFT">Draft</option>
        <option value="PUBLISHED">Published</option>
      </select>

      <button className="btn">Save</button>
    </form>
  )
}

🔌 9️⃣ CMS API (FINAL)
app/api/cms/route.js
import { prisma } from "@/lib/prisma"

export async function POST(req) {
  const data = await req.json()

  const post = await prisma.post.create({
    data
  })

  return Response.json(post)
}

export async function GET() {
  const posts = await prisma.post.findMany()
  return Response.json(posts)
}

## 🚀 PHASE 3 — You Push to GitHub (2 minutes)
git init
git add .
git commit -m "Initial InnoHub boilerplate"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/innohub-boilerplate.git
git push -u origin main


🎉 Done. You now have your agency boilerplate repo.



## Supabase Postgres x Prisma setup for hosted DB 
in .env file, after local development all okay, change # DATABASE_URL="file:./prisma/dev.db" to the Supabase connection String under ORMS tab

after u got ur conenction string go to prisma/schema.prisma file and update the datasource to 'postgresql' instead of 'sqlite'
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

once all set, just run npx prisma db push, and check that the table is created in Supabase.
npx prisma db push

test commit



<!--  if there is new changes to the DB schema, follow the steps below -->
Edit schema.prisma
        ↓
prisma migrate dev   ← creates migrations
        ↓
git commit
        ↓
git push
        ↓
prisma migrate deploy ← applies them elsewhere

✅ Flow A: Solo dev (recommended for you now)
1️⃣ Locally (dev machine)
# schema change
npx prisma migrate dev

# commit
git add prisma
git commit -m "Add new schema"
git push

2️⃣ Still locally, but using PROD env
# point env to production Supabase
npx prisma migrate deploy


Done ✅
Then Vercel deploys app.