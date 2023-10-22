/*
  Warnings:

  - You are about to drop the column `rating` on the `brands` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `flights` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `brands` DROP COLUMN `rating`;

-- AlterTable
ALTER TABLE `flights` DROP COLUMN `rating`;

-- CreateTable
CREATE TABLE `rating` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NOT NULL,
    `flightId` INTEGER NULL,
    `usersId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `rating` ADD CONSTRAINT `seats_ifk_1` FOREIGN KEY (`flightId`) REFERENCES `flights`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rating` ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
