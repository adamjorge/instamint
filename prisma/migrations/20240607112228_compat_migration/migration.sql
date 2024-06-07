/*
  Warnings:

  - You are about to drop the column `language` on the `Minter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Minter" DROP COLUMN "language",
ADD COLUMN     "defaultLanguage" TEXT NOT NULL DEFAULT 'fr';
