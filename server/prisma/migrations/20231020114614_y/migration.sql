/*
  Warnings:

  - Added the required column `rating` to the `flights` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `flights` ADD COLUMN `rating` INTEGER NOT NULL;
