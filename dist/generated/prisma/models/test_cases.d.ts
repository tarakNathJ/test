import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model test_cases
 *
 */
export type test_casesModel = runtime.Types.Result.DefaultSelection<Prisma.$test_casesPayload>;
export type AggregateTest_cases = {
    _count: Test_casesCountAggregateOutputType | null;
    _min: Test_casesMinAggregateOutputType | null;
    _max: Test_casesMaxAggregateOutputType | null;
};
export type Test_casesMinAggregateOutputType = {
    id: string | null;
    problem_id: string | null;
    input: string | null;
    expected_output: string | null;
    is_hidden: boolean | null;
    created_at: Date | null;
};
export type Test_casesMaxAggregateOutputType = {
    id: string | null;
    problem_id: string | null;
    input: string | null;
    expected_output: string | null;
    is_hidden: boolean | null;
    created_at: Date | null;
};
export type Test_casesCountAggregateOutputType = {
    id: number;
    problem_id: number;
    input: number;
    expected_output: number;
    is_hidden: number;
    created_at: number;
    _all: number;
};
export type Test_casesMinAggregateInputType = {
    id?: true;
    problem_id?: true;
    input?: true;
    expected_output?: true;
    is_hidden?: true;
    created_at?: true;
};
export type Test_casesMaxAggregateInputType = {
    id?: true;
    problem_id?: true;
    input?: true;
    expected_output?: true;
    is_hidden?: true;
    created_at?: true;
};
export type Test_casesCountAggregateInputType = {
    id?: true;
    problem_id?: true;
    input?: true;
    expected_output?: true;
    is_hidden?: true;
    created_at?: true;
    _all?: true;
};
export type Test_casesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which test_cases to aggregate.
     */
    where?: Prisma.test_casesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of test_cases to fetch.
     */
    orderBy?: Prisma.test_casesOrderByWithRelationInput | Prisma.test_casesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.test_casesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` test_cases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` test_cases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned test_cases
    **/
    _count?: true | Test_casesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Test_casesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Test_casesMaxAggregateInputType;
};
export type GetTest_casesAggregateType<T extends Test_casesAggregateArgs> = {
    [P in keyof T & keyof AggregateTest_cases]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTest_cases[P]> : Prisma.GetScalarType<T[P], AggregateTest_cases[P]>;
};
export type test_casesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.test_casesWhereInput;
    orderBy?: Prisma.test_casesOrderByWithAggregationInput | Prisma.test_casesOrderByWithAggregationInput[];
    by: Prisma.Test_casesScalarFieldEnum[] | Prisma.Test_casesScalarFieldEnum;
    having?: Prisma.test_casesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Test_casesCountAggregateInputType | true;
    _min?: Test_casesMinAggregateInputType;
    _max?: Test_casesMaxAggregateInputType;
};
export type Test_casesGroupByOutputType = {
    id: string;
    problem_id: string;
    input: string;
    expected_output: string;
    is_hidden: boolean;
    created_at: Date;
    _count: Test_casesCountAggregateOutputType | null;
    _min: Test_casesMinAggregateOutputType | null;
    _max: Test_casesMaxAggregateOutputType | null;
};
type GetTest_casesGroupByPayload<T extends test_casesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Test_casesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Test_casesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Test_casesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Test_casesGroupByOutputType[P]>;
}>>;
export type test_casesWhereInput = {
    AND?: Prisma.test_casesWhereInput | Prisma.test_casesWhereInput[];
    OR?: Prisma.test_casesWhereInput[];
    NOT?: Prisma.test_casesWhereInput | Prisma.test_casesWhereInput[];
    id?: Prisma.StringFilter<"test_cases"> | string;
    problem_id?: Prisma.StringFilter<"test_cases"> | string;
    input?: Prisma.StringFilter<"test_cases"> | string;
    expected_output?: Prisma.StringFilter<"test_cases"> | string;
    is_hidden?: Prisma.BoolFilter<"test_cases"> | boolean;
    created_at?: Prisma.DateTimeFilter<"test_cases"> | Date | string;
};
export type test_casesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    expected_output?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type test_casesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.test_casesWhereInput | Prisma.test_casesWhereInput[];
    OR?: Prisma.test_casesWhereInput[];
    NOT?: Prisma.test_casesWhereInput | Prisma.test_casesWhereInput[];
    problem_id?: Prisma.StringFilter<"test_cases"> | string;
    input?: Prisma.StringFilter<"test_cases"> | string;
    expected_output?: Prisma.StringFilter<"test_cases"> | string;
    is_hidden?: Prisma.BoolFilter<"test_cases"> | boolean;
    created_at?: Prisma.DateTimeFilter<"test_cases"> | Date | string;
}, "id">;
export type test_casesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    expected_output?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.test_casesCountOrderByAggregateInput;
    _max?: Prisma.test_casesMaxOrderByAggregateInput;
    _min?: Prisma.test_casesMinOrderByAggregateInput;
};
export type test_casesScalarWhereWithAggregatesInput = {
    AND?: Prisma.test_casesScalarWhereWithAggregatesInput | Prisma.test_casesScalarWhereWithAggregatesInput[];
    OR?: Prisma.test_casesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.test_casesScalarWhereWithAggregatesInput | Prisma.test_casesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"test_cases"> | string;
    problem_id?: Prisma.StringWithAggregatesFilter<"test_cases"> | string;
    input?: Prisma.StringWithAggregatesFilter<"test_cases"> | string;
    expected_output?: Prisma.StringWithAggregatesFilter<"test_cases"> | string;
    is_hidden?: Prisma.BoolWithAggregatesFilter<"test_cases"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"test_cases"> | Date | string;
};
export type test_casesCreateInput = {
    id?: string;
    problem_id: string;
    input: string;
    expected_output: string;
    is_hidden?: boolean;
    created_at?: Date | string;
};
export type test_casesUncheckedCreateInput = {
    id?: string;
    problem_id: string;
    input: string;
    expected_output: string;
    is_hidden?: boolean;
    created_at?: Date | string;
};
export type test_casesUpdateInput = {
    problem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.StringFieldUpdateOperationsInput | string;
    expected_output?: Prisma.StringFieldUpdateOperationsInput | string;
    is_hidden?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type test_casesUncheckedUpdateInput = {
    problem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.StringFieldUpdateOperationsInput | string;
    expected_output?: Prisma.StringFieldUpdateOperationsInput | string;
    is_hidden?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type test_casesCreateManyInput = {
    id?: string;
    problem_id: string;
    input: string;
    expected_output: string;
    is_hidden?: boolean;
    created_at?: Date | string;
};
export type test_casesUpdateManyMutationInput = {
    problem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.StringFieldUpdateOperationsInput | string;
    expected_output?: Prisma.StringFieldUpdateOperationsInput | string;
    is_hidden?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type test_casesUncheckedUpdateManyInput = {
    problem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.StringFieldUpdateOperationsInput | string;
    expected_output?: Prisma.StringFieldUpdateOperationsInput | string;
    is_hidden?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type test_casesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    expected_output?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type test_casesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    expected_output?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type test_casesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    expected_output?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type test_casesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    problem_id?: boolean;
    input?: boolean;
    expected_output?: boolean;
    is_hidden?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["test_cases"]>;
export type test_casesSelectScalar = {
    id?: boolean;
    problem_id?: boolean;
    input?: boolean;
    expected_output?: boolean;
    is_hidden?: boolean;
    created_at?: boolean;
};
export type test_casesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "problem_id" | "input" | "expected_output" | "is_hidden" | "created_at", ExtArgs["result"]["test_cases"]>;
export type $test_casesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "test_cases";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        problem_id: string;
        input: string;
        expected_output: string;
        is_hidden: boolean;
        created_at: Date;
    }, ExtArgs["result"]["test_cases"]>;
    composites: {};
};
export type test_casesGetPayload<S extends boolean | null | undefined | test_casesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$test_casesPayload, S>;
export type test_casesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<test_casesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Test_casesCountAggregateInputType | true;
};
export interface test_casesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['test_cases'];
        meta: {
            name: 'test_cases';
        };
    };
    /**
     * Find zero or one Test_cases that matches the filter.
     * @param {test_casesFindUniqueArgs} args - Arguments to find a Test_cases
     * @example
     * // Get one Test_cases
     * const test_cases = await prisma.test_cases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends test_casesFindUniqueArgs>(args: Prisma.SelectSubset<T, test_casesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__test_casesClient<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Test_cases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {test_casesFindUniqueOrThrowArgs} args - Arguments to find a Test_cases
     * @example
     * // Get one Test_cases
     * const test_cases = await prisma.test_cases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends test_casesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, test_casesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__test_casesClient<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Test_cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_casesFindFirstArgs} args - Arguments to find a Test_cases
     * @example
     * // Get one Test_cases
     * const test_cases = await prisma.test_cases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends test_casesFindFirstArgs>(args?: Prisma.SelectSubset<T, test_casesFindFirstArgs<ExtArgs>>): Prisma.Prisma__test_casesClient<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Test_cases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_casesFindFirstOrThrowArgs} args - Arguments to find a Test_cases
     * @example
     * // Get one Test_cases
     * const test_cases = await prisma.test_cases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends test_casesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, test_casesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__test_casesClient<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Test_cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_casesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_cases
     * const test_cases = await prisma.test_cases.findMany()
     *
     * // Get first 10 Test_cases
     * const test_cases = await prisma.test_cases.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const test_casesWithIdOnly = await prisma.test_cases.findMany({ select: { id: true } })
     *
     */
    findMany<T extends test_casesFindManyArgs>(args?: Prisma.SelectSubset<T, test_casesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Test_cases.
     * @param {test_casesCreateArgs} args - Arguments to create a Test_cases.
     * @example
     * // Create one Test_cases
     * const Test_cases = await prisma.test_cases.create({
     *   data: {
     *     // ... data to create a Test_cases
     *   }
     * })
     *
     */
    create<T extends test_casesCreateArgs>(args: Prisma.SelectSubset<T, test_casesCreateArgs<ExtArgs>>): Prisma.Prisma__test_casesClient<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Test_cases.
     * @param {test_casesCreateManyArgs} args - Arguments to create many Test_cases.
     * @example
     * // Create many Test_cases
     * const test_cases = await prisma.test_cases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends test_casesCreateManyArgs>(args?: Prisma.SelectSubset<T, test_casesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Test_cases.
     * @param {test_casesDeleteArgs} args - Arguments to delete one Test_cases.
     * @example
     * // Delete one Test_cases
     * const Test_cases = await prisma.test_cases.delete({
     *   where: {
     *     // ... filter to delete one Test_cases
     *   }
     * })
     *
     */
    delete<T extends test_casesDeleteArgs>(args: Prisma.SelectSubset<T, test_casesDeleteArgs<ExtArgs>>): Prisma.Prisma__test_casesClient<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Test_cases.
     * @param {test_casesUpdateArgs} args - Arguments to update one Test_cases.
     * @example
     * // Update one Test_cases
     * const test_cases = await prisma.test_cases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends test_casesUpdateArgs>(args: Prisma.SelectSubset<T, test_casesUpdateArgs<ExtArgs>>): Prisma.Prisma__test_casesClient<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Test_cases.
     * @param {test_casesDeleteManyArgs} args - Arguments to filter Test_cases to delete.
     * @example
     * // Delete a few Test_cases
     * const { count } = await prisma.test_cases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends test_casesDeleteManyArgs>(args?: Prisma.SelectSubset<T, test_casesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Test_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_casesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_cases
     * const test_cases = await prisma.test_cases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends test_casesUpdateManyArgs>(args: Prisma.SelectSubset<T, test_casesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Test_cases.
     * @param {test_casesUpsertArgs} args - Arguments to update or create a Test_cases.
     * @example
     * // Update or create a Test_cases
     * const test_cases = await prisma.test_cases.upsert({
     *   create: {
     *     // ... data to create a Test_cases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_cases we want to update
     *   }
     * })
     */
    upsert<T extends test_casesUpsertArgs>(args: Prisma.SelectSubset<T, test_casesUpsertArgs<ExtArgs>>): Prisma.Prisma__test_casesClient<runtime.Types.Result.GetResult<Prisma.$test_casesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Test_cases that matches the filter.
     * @param {test_casesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const test_cases = await prisma.test_cases.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.test_casesFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Test_cases.
     * @param {test_casesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const test_cases = await prisma.test_cases.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.test_casesAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Test_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_casesCountArgs} args - Arguments to filter Test_cases to count.
     * @example
     * // Count the number of Test_cases
     * const count = await prisma.test_cases.count({
     *   where: {
     *     // ... the filter for the Test_cases we want to count
     *   }
     * })
    **/
    count<T extends test_casesCountArgs>(args?: Prisma.Subset<T, test_casesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Test_casesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Test_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_casesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test_casesAggregateArgs>(args: Prisma.Subset<T, Test_casesAggregateArgs>): Prisma.PrismaPromise<GetTest_casesAggregateType<T>>;
    /**
     * Group by Test_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_casesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends test_casesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: test_casesGroupByArgs['orderBy'];
    } : {
        orderBy?: test_casesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, test_casesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_casesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the test_cases model
     */
    readonly fields: test_casesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for test_cases.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__test_casesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the test_cases model
 */
export interface test_casesFieldRefs {
    readonly id: Prisma.FieldRef<"test_cases", 'String'>;
    readonly problem_id: Prisma.FieldRef<"test_cases", 'String'>;
    readonly input: Prisma.FieldRef<"test_cases", 'String'>;
    readonly expected_output: Prisma.FieldRef<"test_cases", 'String'>;
    readonly is_hidden: Prisma.FieldRef<"test_cases", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"test_cases", 'DateTime'>;
}
/**
 * test_cases findUnique
 */
export type test_casesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * Filter, which test_cases to fetch.
     */
    where: Prisma.test_casesWhereUniqueInput;
};
/**
 * test_cases findUniqueOrThrow
 */
export type test_casesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * Filter, which test_cases to fetch.
     */
    where: Prisma.test_casesWhereUniqueInput;
};
/**
 * test_cases findFirst
 */
export type test_casesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * Filter, which test_cases to fetch.
     */
    where?: Prisma.test_casesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of test_cases to fetch.
     */
    orderBy?: Prisma.test_casesOrderByWithRelationInput | Prisma.test_casesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for test_cases.
     */
    cursor?: Prisma.test_casesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` test_cases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` test_cases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of test_cases.
     */
    distinct?: Prisma.Test_casesScalarFieldEnum | Prisma.Test_casesScalarFieldEnum[];
};
/**
 * test_cases findFirstOrThrow
 */
export type test_casesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * Filter, which test_cases to fetch.
     */
    where?: Prisma.test_casesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of test_cases to fetch.
     */
    orderBy?: Prisma.test_casesOrderByWithRelationInput | Prisma.test_casesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for test_cases.
     */
    cursor?: Prisma.test_casesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` test_cases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` test_cases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of test_cases.
     */
    distinct?: Prisma.Test_casesScalarFieldEnum | Prisma.Test_casesScalarFieldEnum[];
};
/**
 * test_cases findMany
 */
export type test_casesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * Filter, which test_cases to fetch.
     */
    where?: Prisma.test_casesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of test_cases to fetch.
     */
    orderBy?: Prisma.test_casesOrderByWithRelationInput | Prisma.test_casesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing test_cases.
     */
    cursor?: Prisma.test_casesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` test_cases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` test_cases.
     */
    skip?: number;
    distinct?: Prisma.Test_casesScalarFieldEnum | Prisma.Test_casesScalarFieldEnum[];
};
/**
 * test_cases create
 */
export type test_casesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * The data needed to create a test_cases.
     */
    data: Prisma.XOR<Prisma.test_casesCreateInput, Prisma.test_casesUncheckedCreateInput>;
};
/**
 * test_cases createMany
 */
export type test_casesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many test_cases.
     */
    data: Prisma.test_casesCreateManyInput | Prisma.test_casesCreateManyInput[];
};
/**
 * test_cases update
 */
export type test_casesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * The data needed to update a test_cases.
     */
    data: Prisma.XOR<Prisma.test_casesUpdateInput, Prisma.test_casesUncheckedUpdateInput>;
    /**
     * Choose, which test_cases to update.
     */
    where: Prisma.test_casesWhereUniqueInput;
};
/**
 * test_cases updateMany
 */
export type test_casesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update test_cases.
     */
    data: Prisma.XOR<Prisma.test_casesUpdateManyMutationInput, Prisma.test_casesUncheckedUpdateManyInput>;
    /**
     * Filter which test_cases to update
     */
    where?: Prisma.test_casesWhereInput;
    /**
     * Limit how many test_cases to update.
     */
    limit?: number;
};
/**
 * test_cases upsert
 */
export type test_casesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * The filter to search for the test_cases to update in case it exists.
     */
    where: Prisma.test_casesWhereUniqueInput;
    /**
     * In case the test_cases found by the `where` argument doesn't exist, create a new test_cases with this data.
     */
    create: Prisma.XOR<Prisma.test_casesCreateInput, Prisma.test_casesUncheckedCreateInput>;
    /**
     * In case the test_cases was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.test_casesUpdateInput, Prisma.test_casesUncheckedUpdateInput>;
};
/**
 * test_cases delete
 */
export type test_casesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
    /**
     * Filter which test_cases to delete.
     */
    where: Prisma.test_casesWhereUniqueInput;
};
/**
 * test_cases deleteMany
 */
export type test_casesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which test_cases to delete
     */
    where?: Prisma.test_casesWhereInput;
    /**
     * Limit how many test_cases to delete.
     */
    limit?: number;
};
/**
 * test_cases findRaw
 */
export type test_casesFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: runtime.InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: runtime.InputJsonValue;
};
/**
 * test_cases aggregateRaw
 */
export type test_casesAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: runtime.InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: runtime.InputJsonValue;
};
/**
 * test_cases without action
 */
export type test_casesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_cases
     */
    select?: Prisma.test_casesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the test_cases
     */
    omit?: Prisma.test_casesOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=test_cases.d.ts.map