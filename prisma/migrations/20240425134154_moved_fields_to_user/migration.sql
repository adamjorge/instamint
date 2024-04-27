/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Minter` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Minter` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Minter` table. All the data in the column will be lost.
  - You are about to drop the column `is2FAEnabled` on the `Minter` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `Minter` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Minter` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Minter` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Minter_email_key";

-- AlterTable
ALTER TABLE "Minter" DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "email",
DROP COLUMN "is2FAEnabled",
DROP COLUMN "isAdmin",
DROP COLUMN "phoneNumber",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "is2FAEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phoneNumber" TEXT;
