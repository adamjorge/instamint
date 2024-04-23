/*
  Warnings:

  - You are about to drop the column `password` on the `Minter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Minter" DROP COLUMN "password";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;
