import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient

export default function createClient() {
  if (!prisma) {
    prisma = new PrismaClient()
  }
  return prisma
}