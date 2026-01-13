import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.19.2
 * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly contests: "contests";
    readonly mcq_questions: "mcq_questions";
    readonly mcq_submissions: "mcq_submissions";
    readonly dsa_problems: "dsa_problems";
    readonly test_cases: "test_cases";
    readonly dsa_submissions: "dsa_submissions";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "contests" | "mcq_questions" | "mcq_submissions" | "dsa_problems" | "test_cases" | "dsa_submissions";
        txIsolationLevel: never;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.UserFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.UserAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        contests: {
            payload: Prisma.$contestsPayload<ExtArgs>;
            fields: Prisma.contestsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.contestsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.contestsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload>;
                };
                findFirst: {
                    args: Prisma.contestsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.contestsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload>;
                };
                findMany: {
                    args: Prisma.contestsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload>[];
                };
                create: {
                    args: Prisma.contestsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload>;
                };
                createMany: {
                    args: Prisma.contestsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.contestsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload>;
                };
                update: {
                    args: Prisma.contestsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload>;
                };
                deleteMany: {
                    args: Prisma.contestsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.contestsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.contestsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contestsPayload>;
                };
                aggregate: {
                    args: Prisma.ContestsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContests>;
                };
                groupBy: {
                    args: Prisma.contestsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestsGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.contestsFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.contestsAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.contestsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestsCountAggregateOutputType> | number;
                };
            };
        };
        mcq_questions: {
            payload: Prisma.$mcq_questionsPayload<ExtArgs>;
            fields: Prisma.mcq_questionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mcq_questionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mcq_questionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload>;
                };
                findFirst: {
                    args: Prisma.mcq_questionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mcq_questionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload>;
                };
                findMany: {
                    args: Prisma.mcq_questionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload>[];
                };
                create: {
                    args: Prisma.mcq_questionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload>;
                };
                createMany: {
                    args: Prisma.mcq_questionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.mcq_questionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload>;
                };
                update: {
                    args: Prisma.mcq_questionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload>;
                };
                deleteMany: {
                    args: Prisma.mcq_questionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mcq_questionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.mcq_questionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_questionsPayload>;
                };
                aggregate: {
                    args: Prisma.Mcq_questionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMcq_questions>;
                };
                groupBy: {
                    args: Prisma.mcq_questionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mcq_questionsGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.mcq_questionsFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.mcq_questionsAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.mcq_questionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mcq_questionsCountAggregateOutputType> | number;
                };
            };
        };
        mcq_submissions: {
            payload: Prisma.$mcq_submissionsPayload<ExtArgs>;
            fields: Prisma.mcq_submissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mcq_submissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mcq_submissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload>;
                };
                findFirst: {
                    args: Prisma.mcq_submissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mcq_submissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload>;
                };
                findMany: {
                    args: Prisma.mcq_submissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload>[];
                };
                create: {
                    args: Prisma.mcq_submissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload>;
                };
                createMany: {
                    args: Prisma.mcq_submissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.mcq_submissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload>;
                };
                update: {
                    args: Prisma.mcq_submissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.mcq_submissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mcq_submissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.mcq_submissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mcq_submissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Mcq_submissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMcq_submissions>;
                };
                groupBy: {
                    args: Prisma.mcq_submissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mcq_submissionsGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.mcq_submissionsFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.mcq_submissionsAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.mcq_submissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mcq_submissionsCountAggregateOutputType> | number;
                };
            };
        };
        dsa_problems: {
            payload: Prisma.$dsa_problemsPayload<ExtArgs>;
            fields: Prisma.dsa_problemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.dsa_problemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.dsa_problemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload>;
                };
                findFirst: {
                    args: Prisma.dsa_problemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.dsa_problemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload>;
                };
                findMany: {
                    args: Prisma.dsa_problemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload>[];
                };
                create: {
                    args: Prisma.dsa_problemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload>;
                };
                createMany: {
                    args: Prisma.dsa_problemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.dsa_problemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload>;
                };
                update: {
                    args: Prisma.dsa_problemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload>;
                };
                deleteMany: {
                    args: Prisma.dsa_problemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.dsa_problemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.dsa_problemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_problemsPayload>;
                };
                aggregate: {
                    args: Prisma.Dsa_problemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDsa_problems>;
                };
                groupBy: {
                    args: Prisma.dsa_problemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Dsa_problemsGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.dsa_problemsFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.dsa_problemsAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.dsa_problemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Dsa_problemsCountAggregateOutputType> | number;
                };
            };
        };
        test_cases: {
            payload: Prisma.$test_casesPayload<ExtArgs>;
            fields: Prisma.test_casesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.test_casesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.test_casesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload>;
                };
                findFirst: {
                    args: Prisma.test_casesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.test_casesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload>;
                };
                findMany: {
                    args: Prisma.test_casesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload>[];
                };
                create: {
                    args: Prisma.test_casesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload>;
                };
                createMany: {
                    args: Prisma.test_casesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.test_casesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload>;
                };
                update: {
                    args: Prisma.test_casesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload>;
                };
                deleteMany: {
                    args: Prisma.test_casesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.test_casesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.test_casesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$test_casesPayload>;
                };
                aggregate: {
                    args: Prisma.Test_casesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTest_cases>;
                };
                groupBy: {
                    args: Prisma.test_casesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Test_casesGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.test_casesFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.test_casesAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.test_casesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Test_casesCountAggregateOutputType> | number;
                };
            };
        };
        dsa_submissions: {
            payload: Prisma.$dsa_submissionsPayload<ExtArgs>;
            fields: Prisma.dsa_submissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.dsa_submissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.dsa_submissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload>;
                };
                findFirst: {
                    args: Prisma.dsa_submissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.dsa_submissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload>;
                };
                findMany: {
                    args: Prisma.dsa_submissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload>[];
                };
                create: {
                    args: Prisma.dsa_submissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload>;
                };
                createMany: {
                    args: Prisma.dsa_submissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.dsa_submissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload>;
                };
                update: {
                    args: Prisma.dsa_submissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.dsa_submissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.dsa_submissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.dsa_submissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsa_submissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Dsa_submissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDsa_submissions>;
                };
                groupBy: {
                    args: Prisma.dsa_submissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Dsa_submissionsGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.dsa_submissionsFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.dsa_submissionsAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.dsa_submissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Dsa_submissionsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $runCommandRaw: {
                args: Prisma.InputJsonObject;
                result: JsonObject;
            };
        };
    };
};
/**
 * Enums
 */
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly role: "role";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ContestsScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly creator_id: "creator_id";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContestsScalarFieldEnum = (typeof ContestsScalarFieldEnum)[keyof typeof ContestsScalarFieldEnum];
export declare const Mcq_questionsScalarFieldEnum: {
    readonly id: "id";
    readonly contest_id: "contest_id";
    readonly question_text: "question_text";
    readonly options: "options";
    readonly correct_option_index: "correct_option_index";
    readonly points: "points";
    readonly createdAt: "createdAt";
};
export type Mcq_questionsScalarFieldEnum = (typeof Mcq_questionsScalarFieldEnum)[keyof typeof Mcq_questionsScalarFieldEnum];
export declare const Mcq_submissionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly question_id: "question_id";
    readonly selected_option_index: "selected_option_index";
    readonly is_correct: "is_correct";
    readonly points_earned: "points_earned";
    readonly submitted_at: "submitted_at";
};
export type Mcq_submissionsScalarFieldEnum = (typeof Mcq_submissionsScalarFieldEnum)[keyof typeof Mcq_submissionsScalarFieldEnum];
export declare const Dsa_problemsScalarFieldEnum: {
    readonly id: "id";
    readonly contest_id: "contest_id";
    readonly title: "title";
    readonly description: "description";
    readonly tags: "tags";
    readonly points: "points";
    readonly time_limit: "time_limit";
    readonly memory_limit: "memory_limit";
    readonly created_at: "created_at";
};
export type Dsa_problemsScalarFieldEnum = (typeof Dsa_problemsScalarFieldEnum)[keyof typeof Dsa_problemsScalarFieldEnum];
export declare const Test_casesScalarFieldEnum: {
    readonly id: "id";
    readonly problem_id: "problem_id";
    readonly input: "input";
    readonly expected_output: "expected_output";
    readonly is_hidden: "is_hidden";
    readonly created_at: "created_at";
};
export type Test_casesScalarFieldEnum = (typeof Test_casesScalarFieldEnum)[keyof typeof Test_casesScalarFieldEnum];
export declare const Dsa_submissionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly problem_id: "problem_id";
    readonly code: "code";
    readonly language: "language";
    readonly status: "status";
    readonly points_earned: "points_earned";
    readonly test_cases_passed: "test_cases_passed";
    readonly total_test_cases: "total_test_cases";
    readonly execution_time: "execution_time";
    readonly submitted_at: "submitted_at";
};
export type Dsa_submissionsScalarFieldEnum = (typeof Dsa_submissionsScalarFieldEnum)[keyof typeof Dsa_submissionsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    contests?: Prisma.contestsOmit;
    mcq_questions?: Prisma.mcq_questionsOmit;
    mcq_submissions?: Prisma.mcq_submissionsOmit;
    dsa_problems?: Prisma.dsa_problemsOmit;
    test_cases?: Prisma.test_casesOmit;
    dsa_submissions?: Prisma.dsa_submissionsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map