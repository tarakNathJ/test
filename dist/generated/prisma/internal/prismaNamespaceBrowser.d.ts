import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map