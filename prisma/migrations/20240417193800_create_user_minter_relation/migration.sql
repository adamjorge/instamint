-- AlterTable
ALTER TABLE "User" ADD COLUMN     "minterId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "Minter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
