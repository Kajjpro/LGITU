-- CreateTable
CREATE TABLE "Books" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "img" TEXT,
    "link" TEXT NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
