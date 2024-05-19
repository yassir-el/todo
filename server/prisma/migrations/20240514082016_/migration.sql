/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Todo` table. All the data in the column will be lost.
  - You are about to alter the column `content` on the `Todo` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `updateAt` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "createdAt",
DROP COLUMN "status",
ADD COLUMN     "repeat" TEXT NOT NULL DEFAULT 'none',
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "content" SET DATA TYPE VARCHAR(255);
