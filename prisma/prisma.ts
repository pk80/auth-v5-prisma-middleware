import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisam = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisam.prisma || new PrismaClient({ log: ["error", "warn"] });

if (process.env.NODE_ENV !== "production") globalForPrisam.prisma = prisma;
