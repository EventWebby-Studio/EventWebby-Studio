/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Guest` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Guest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "guestCount" INTEGER,
    "message" TEXT,
    "checkIn" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Guest" ("checkIn", "contact", "createdAt", "email", "guestCount", "id", "name") SELECT coalesce("checkIn", false) AS "checkIn", "contact", "createdAt", "email", "guestCount", "id", "name" FROM "Guest";
DROP TABLE "Guest";
ALTER TABLE "new_Guest" RENAME TO "Guest";
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");
CREATE UNIQUE INDEX "Guest_contact_key" ON "Guest"("contact");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
