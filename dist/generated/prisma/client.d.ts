import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model contests
 *
 */
export type contests = Prisma.contestsModel;
/**
 * Model mcq_questions
 *
 */
export type mcq_questions = Prisma.mcq_questionsModel;
/**
 * Model mcq_submissions
 *
 */
export type mcq_submissions = Prisma.mcq_submissionsModel;
/**
 * Model dsa_problems
 *
 */
export type dsa_problems = Prisma.dsa_problemsModel;
/**
 * Model test_cases
 *
 */
export type test_cases = Prisma.test_casesModel;
/**
 * Model dsa_submissions
 *
 */
export type dsa_submissions = Prisma.dsa_submissionsModel;
//# sourceMappingURL=client.d.ts.map