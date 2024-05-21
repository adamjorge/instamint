-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordResetToken" VARCHAR(255),
ADD COLUMN     "passwordResetTokenExpires" TIMESTAMP(3);
