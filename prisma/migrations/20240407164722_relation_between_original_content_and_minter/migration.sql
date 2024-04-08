/*
  Warnings:

  - Added the required column `minterId` to the `OriginalContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OriginalContent" ADD COLUMN     "minterId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "OriginalContent" ADD CONSTRAINT "OriginalContent_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "Minter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
