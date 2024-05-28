/*
  Warnings:

  - A unique constraint covering the columns `[imageUrl]` on the table `OriginalContent` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OriginalContent_imageUrl_key" ON "OriginalContent"("imageUrl");
