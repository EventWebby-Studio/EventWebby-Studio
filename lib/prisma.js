import { PrismaClient } from "@prisma/client";

// Use globalThis to persist PrismaClient across hot reloads & serverless invocations
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error"], // optional: helps debug in Vercel logs
  });

// Reuse in all environments (production + dev)
globalForPrisma.prisma = prisma;
