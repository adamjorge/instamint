/*
  Warnings:

  - You are about to drop the column `profileurl` on the `TeaBag` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `TeaBag` table. All the data in the column will be lost.
  - Added the required column `name` to the `TeaBag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileUrl` to the `TeaBag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TeaBag" DROP COLUMN "profileurl",
DROP COLUMN "username",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "profileUrl" TEXT NOT NULL;
