-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "expiry" SET DEFAULT NOW() + interval '1 day';
