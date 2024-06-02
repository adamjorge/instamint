/*
  Warnings:

  - You are about to drop the column `defaultLanguage` on the `Minter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Minter" DROP COLUMN "defaultLanguage",
ADD COLUMN     "language" TEXT NOT NULL DEFAULT 'fr';
