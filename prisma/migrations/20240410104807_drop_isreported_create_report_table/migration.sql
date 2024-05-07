/*
  Warnings:

  - You are about to drop the column `isReported` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `isReported` on the `Minter` table. All the data in the column will be lost.
  - You are about to drop the column `isReported` on the `TeaBag` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "isReported";

-- AlterTable
ALTER TABLE "Minter" DROP COLUMN "isReported";

-- AlterTable
ALTER TABLE "TeaBag" DROP COLUMN "isReported";

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commentId" INTEGER,
    "minterId" INTEGER,
    "teaBagId" INTEGER,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "Minter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_teaBagId_fkey" FOREIGN KEY ("teaBagId") REFERENCES "TeaBag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
