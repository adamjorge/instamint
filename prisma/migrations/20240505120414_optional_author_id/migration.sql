-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropForeignKey
ALTER TABLE "OriginalContent" DROP CONSTRAINT "OriginalContent_minterId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_minterId_fkey";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OriginalContent" ALTER COLUMN "minterId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Minter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "Minter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OriginalContent" ADD CONSTRAINT "OriginalContent_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "Minter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
