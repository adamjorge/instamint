/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `PasswordChange` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PasswordChange" ADD COLUMN     "usedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "PasswordChange_token_key" ON "PasswordChange"("token");
