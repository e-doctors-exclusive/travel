-- AlterTable
ALTER TABLE `brands` MODIFY `name` VARCHAR(255) NULL,
    MODIFY `description` VARCHAR(255) NULL,
    MODIFY `image` VARCHAR(255) NULL,
    MODIFY `rating` INTEGER NULL DEFAULT 0;
