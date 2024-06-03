-- CreateEnum
CREATE TYPE "NotificationTypeEnum" AS ENUM ('COMMENT_REPLY', 'COMMENT_ON_POST', 'MENTION_IN_COMMENT', 'LIKE', 'NEW_FOLLOWER', 'FOLLOW_REQUEST', 'FOLLOW_REQUEST_ACCEPTED');

-- CreateTable
CREATE TABLE "NotificationType" (
    "name" "NotificationTypeEnum" NOT NULL,

    CONSTRAINT "NotificationType_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Notification" (
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "minterId" INTEGER NOT NULL,
    "type" "NotificationTypeEnum" NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("minterId","type")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_minterId_fkey" FOREIGN KEY ("minterId") REFERENCES "Minter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_type_fkey" FOREIGN KEY ("type") REFERENCES "NotificationType"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
