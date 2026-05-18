/*
  Warnings:

  - You are about to drop the `Books` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "BookCategory" AS ENUM ('MATH', 'READING', 'WRITING', 'GRAMMAR', 'GENERAL');

-- DropTable
DROP TABLE "Books";

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "img" TEXT,
    "link" TEXT NOT NULL,
    "category" "BookCategory",
    "order" INTEGER NOT NULL DEFAULT 0,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "books_category_idx" ON "books"("category");

-- CreateIndex
CREATE INDEX "books_isPublished_order_idx" ON "books"("isPublished", "order");
