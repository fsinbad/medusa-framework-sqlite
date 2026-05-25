import path from "node:path";

const defaultRelativeDatabasePath = "data/medusa-monolith.sqlite";

export const databaseFilePath = process.env.DATABASE_FILE_PATH
  ? path.resolve(process.cwd(), process.env.DATABASE_FILE_PATH)
  : path.join(process.cwd(), defaultRelativeDatabasePath);

export const databaseFileLabel =
  path.relative(process.cwd(), databaseFilePath) || defaultRelativeDatabasePath;
