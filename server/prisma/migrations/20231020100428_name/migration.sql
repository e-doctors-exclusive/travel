/*
  Warnings:

  - You are about to drop the column `status` on the `users` table. All the data in the column will be lost.
  - Added the required column `rating` to the `brands` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `brands` ADD COLUMN `rating` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `status`;
