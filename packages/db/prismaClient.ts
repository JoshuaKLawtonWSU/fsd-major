import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient

export default function createClient() {
  if (!prisma) {
    prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL
        },
      },
    })
  }
  return prisma
}