-- CreateEnum
CREATE TYPE "BookDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- AlterTable
ALTER TABLE "books" ADD COLUMN     "difficulty" "BookDifficulty" NOT NULL DEFAULT 'MEDIUM';
