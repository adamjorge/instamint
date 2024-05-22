/*
  Warnings:

  - You are about to drop the `PasswordChange` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PasswordChange" DROP CONSTRAINT "PasswordChange_userId_fkey";

-- DropTable
DROP TABLE "PasswordChange";

-- CreateTable
CREATE TABLE "ChangePassword" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChangePassword_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChangePassword_token_key" ON "ChangePassword"("token");

-- AddForeignKey
ALTER TABLE "ChangePassword" ADD CONSTRAINT "ChangePassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
