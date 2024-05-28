/*
  Warnings:

  - You are about to drop the column `avatarUrl` on the `Minter` table. All the data in the column will be lost.
  - Added the required column `avatarKey` to the `Minter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Minter" DROP COLUMN "avatarUrl",
ADD COLUMN     "avatarKey" TEXT NOT NULL;
