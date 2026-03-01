/*
  Warnings:

  - Added the required column `questionAreaId` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flashcard" ADD COLUMN     "questionAreaId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "QuestionArea" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "learningText" TEXT,
    "codeSnippet" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_QuestionAreaToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_QuestionAreaToTopic_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_QuestionAreaToTopic_B_index" ON "_QuestionAreaToTopic"("B");

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_questionAreaId_fkey" FOREIGN KEY ("questionAreaId") REFERENCES "QuestionArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionAreaToTopic" ADD CONSTRAINT "_QuestionAreaToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "QuestionArea"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionAreaToTopic" ADD CONSTRAINT "_QuestionAreaToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
