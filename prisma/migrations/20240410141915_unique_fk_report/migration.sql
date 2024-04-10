/*
  Warnings:

  - A unique constraint covering the columns `[commentId]` on the table `Report` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[minterId]` on the table `Report` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teaBagId]` on the table `Report` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Report_commentId_key" ON "Report"("commentId");

-- CreateIndex
CREATE UNIQUE INDEX "Report_minterId_key" ON "Report"("minterId");

-- CreateIndex
CREATE UNIQUE INDEX "Report_teaBagId_key" ON "Report"("teaBagId");
