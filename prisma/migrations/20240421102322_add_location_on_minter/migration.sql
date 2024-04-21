-- AlterTable
ALTER TABLE "Minter" ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "Nft" ALTER COLUMN "location" DROP NOT NULL;
