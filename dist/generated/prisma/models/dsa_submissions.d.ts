import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model dsa_submissions
 *
 */
export type dsa_submissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$dsa_submissionsPayload>;
export type AggregateDsa_submissions = {
    _count: Dsa_submissionsCountAggregateOutputType | null;
    _avg: Dsa_submissionsAvgAggregateOutputType | null;
    _sum: Dsa_submissionsSumAggregateOutputType | null;
    _min: Dsa_submissionsMinAggregateOutputType | null;
    _max: Dsa_submissionsMaxAggregateOutputType | null;
};
export type Dsa_submissionsAvgAggregateOutputType = {
    points_earned: number | null;
    test_cases_passed: number | null;
    total_test_cases: number | null;
    execution_time: number | null;
};
export type Dsa_submissionsSumAggregateOutputType = {
    points_earned: number | null;
    test_cases_passed: number | null;
    total_test_cases: number | null;
    execution_time: number | null;
};
export type Dsa_submissionsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    problem_id: string | null;
    code: string | null;
    language: string | null;
    status: string | null;
    points_earned: number | null;
    test_cases_passed: number | null;
    total_test_cases: number | null;
    execution_time: number | null;
    submitted_at: Date | null;
};
export type Dsa_submissionsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    problem_id: string | null;
    code: string | null;
    language: string | null;
    status: string | null;
    points_earned: number | null;
    test_cases_passed: number | null;
    total_test_cases: number | null;
    execution_time: number | null;
    submitted_at: Date | null;
};
export type Dsa_submissionsCountAggregateOutputType = {
    id: number;
    user_id: number;
    problem_id: number;
    code: number;
    language: number;
    status: number;
    points_earned: number;
    test_cases_passed: number;
    total_test_cases: number;
    execution_time: number;
    submitted_at: number;
    _all: number;
};
export type Dsa_submissionsAvgAggregateInputType = {
    points_earned?: true;
    test_cases_passed?: true;
    total_test_cases?: true;
    execution_time?: true;
};
export type Dsa_submissionsSumAggregateInputType = {
    points_earned?: true;
    test_cases_passed?: true;
    total_test_cases?: true;
    execution_time?: true;
};
export type Dsa_submissionsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    problem_id?: true;
    code?: true;
    language?: true;
    status?: true;
    points_earned?: true;
    test_cases_passed?: true;
    total_test_cases?: true;
    execution_time?: true;
    submitted_at?: true;
};
export type Dsa_submissionsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    problem_id?: true;
    code?: true;
    language?: true;
    status?: true;
    points_earned?: true;
    test_cases_passed?: true;
    total_test_cases?: true;
    execution_time?: true;
    submitted_at?: true;
};
export type Dsa_submissionsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    problem_id?: true;
    code?: true;
    language?: true;
    status?: true;
    points_earned?: true;
    test_cases_passed?: true;
    total_test_cases?: true;
    execution_time?: true;
    submitted_at?: true;
    _all?: true;
};
export type Dsa_submissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which dsa_submissions to aggregate.
     */
    where?: Prisma.dsa_submissionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dsa_submissions to fetch.
     */
    orderBy?: Prisma.dsa_submissionsOrderByWithRelationInput | Prisma.dsa_submissionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.dsa_submissionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dsa_submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dsa_submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned dsa_submissions
    **/
    _count?: true | Dsa_submissionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Dsa_submissionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Dsa_submissionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Dsa_submissionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Dsa_submissionsMaxAggregateInputType;
};
export type GetDsa_submissionsAggregateType<T extends Dsa_submissionsAggregateArgs> = {
    [P in keyof T & keyof AggregateDsa_submissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDsa_submissions[P]> : Prisma.GetScalarType<T[P], AggregateDsa_submissions[P]>;
};
export type dsa_submissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dsa_submissionsWhereInput;
    orderBy?: Prisma.dsa_submissionsOrderByWithAggregationInput | Prisma.dsa_submissionsOrderByWithAggregationInput[];
    by: Prisma.Dsa_submissionsScalarFieldEnum[] | Prisma.Dsa_submissionsScalarFieldEnum;
    having?: Prisma.dsa_submissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Dsa_submissionsCountAggregateInputType | true;
    _avg?: Dsa_submissionsAvgAggregateInputType;
    _sum?: Dsa_submissionsSumAggregateInputType;
    _min?: Dsa_submissionsMinAggregateInputType;
    _max?: Dsa_submissionsMaxAggregateInputType;
};
export type Dsa_submissionsGroupByOutputType = {
    id: string;
    user_id: string;
    problem_id: string;
    code: string;
    language: string | null;
    status: string | null;
    points_earned: number;
    test_cases_passed: number;
    total_test_cases: number;
    execution_time: number | null;
    submitted_at: Date;
    _count: Dsa_submissionsCountAggregateOutputType | null;
    _avg: Dsa_submissionsAvgAggregateOutputType | null;
    _sum: Dsa_submissionsSumAggregateOutputType | null;
    _min: Dsa_submissionsMinAggregateOutputType | null;
    _max: Dsa_submissionsMaxAggregateOutputType | null;
};
type GetDsa_submissionsGroupByPayload<T extends dsa_submissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Dsa_submissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Dsa_submissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Dsa_submissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Dsa_submissionsGroupByOutputType[P]>;
}>>;
export type dsa_submissionsWhereInput = {
    AND?: Prisma.dsa_submissionsWhereInput | Prisma.dsa_submissionsWhereInput[];
    OR?: Prisma.dsa_submissionsWhereInput[];
    NOT?: Prisma.dsa_submissionsWhereInput | Prisma.dsa_submissionsWhereInput[];
    id?: Prisma.StringFilter<"dsa_submissions"> | string;
    user_id?: Prisma.StringFilter<"dsa_submissions"> | string;
    problem_id?: Prisma.StringFilter<"dsa_submissions"> | string;
    code?: Prisma.StringFilter<"dsa_submissions"> | string;
    language?: Prisma.StringNullableFilter<"dsa_submissions"> | string | null;
    status?: Prisma.StringNullableFilter<"dsa_submissions"> | string | null;
    points_earned?: Prisma.IntFilter<"dsa_submissions"> | number;
    test_cases_passed?: Prisma.IntFilter<"dsa_submissions"> | number;
    total_test_cases?: Prisma.IntFilter<"dsa_submissions"> | number;
    execution_time?: Prisma.IntNullableFilter<"dsa_submissions"> | number | null;
    submitted_at?: Prisma.DateTimeFilter<"dsa_submissions"> | Date | string;
};
export type dsa_submissionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    test_cases_passed?: Prisma.SortOrder;
    total_test_cases?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type dsa_submissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_problem_id?: Prisma.dsa_submissionsUser_idProblem_idCompoundUniqueInput;
    AND?: Prisma.dsa_submissionsWhereInput | Prisma.dsa_submissionsWhereInput[];
    OR?: Prisma.dsa_submissionsWhereInput[];
    NOT?: Prisma.dsa_submissionsWhereInput | Prisma.dsa_submissionsWhereInput[];
    user_id?: Prisma.StringFilter<"dsa_submissions"> | string;
    problem_id?: Prisma.StringFilter<"dsa_submissions"> | string;
    code?: Prisma.StringFilter<"dsa_submissions"> | string;
    language?: Prisma.StringNullableFilter<"dsa_submissions"> | string | null;
    status?: Prisma.StringNullableFilter<"dsa_submissions"> | string | null;
    points_earned?: Prisma.IntFilter<"dsa_submissions"> | number;
    test_cases_passed?: Prisma.IntFilter<"dsa_submissions"> | number;
    total_test_cases?: Prisma.IntFilter<"dsa_submissions"> | number;
    execution_time?: Prisma.IntNullableFilter<"dsa_submissions"> | number | null;
    submitted_at?: Prisma.DateTimeFilter<"dsa_submissions"> | Date | string;
}, "id" | "user_id_problem_id">;
export type dsa_submissionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    test_cases_passed?: Prisma.SortOrder;
    total_test_cases?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    _count?: Prisma.dsa_submissionsCountOrderByAggregateInput;
    _avg?: Prisma.dsa_submissionsAvgOrderByAggregateInput;
    _max?: Prisma.dsa_submissionsMaxOrderByAggregateInput;
    _min?: Prisma.dsa_submissionsMinOrderByAggregateInput;
    _sum?: Prisma.dsa_submissionsSumOrderByAggregateInput;
};
export type dsa_submissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.dsa_submissionsScalarWhereWithAggregatesInput | Prisma.dsa_submissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.dsa_submissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.dsa_submissionsScalarWhereWithAggregatesInput | Prisma.dsa_submissionsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"dsa_submissions"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"dsa_submissions"> | string;
    problem_id?: Prisma.StringWithAggregatesFilter<"dsa_submissions"> | string;
    code?: Prisma.StringWithAggregatesFilter<"dsa_submissions"> | string;
    language?: Prisma.StringNullableWithAggregatesFilter<"dsa_submissions"> | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"dsa_submissions"> | string | null;
    points_earned?: Prisma.IntWithAggregatesFilter<"dsa_submissions"> | number;
    test_cases_passed?: Prisma.IntWithAggregatesFilter<"dsa_submissions"> | number;
    total_test_cases?: Prisma.IntWithAggregatesFilter<"dsa_submissions"> | number;
    execution_time?: Prisma.IntNullableWithAggregatesFilter<"dsa_submissions"> | number | null;
    submitted_at?: Prisma.DateTimeWithAggregatesFilter<"dsa_submissions"> | Date | string;
};
export type dsa_submissionsCreateInput = {
    id?: string;
    user_id: string;
    problem_id: string;
    code: string;
    language?: string | null;
    status?: string | null;
    points_earned?: number;
    test_cases_passed?: number;
    total_test_cases?: number;
    execution_time?: number | null;
    submitted_at?: Date | string;
};
export type dsa_submissionsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    problem_id: string;
    code: string;
    language?: string | null;
    status?: string | null;
    points_earned?: number;
    test_cases_passed?: number;
    total_test_cases?: number;
    execution_time?: number | null;
    submitted_at?: Date | string;
};
export type dsa_submissionsUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    problem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    test_cases_passed?: Prisma.IntFieldUpdateOperationsInput | number;
    total_test_cases?: Prisma.IntFieldUpdateOperationsInput | number;
    execution_time?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsa_submissionsUncheckedUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    problem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    test_cases_passed?: Prisma.IntFieldUpdateOperationsInput | number;
    total_test_cases?: Prisma.IntFieldUpdateOperationsInput | number;
    execution_time?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsa_submissionsCreateManyInput = {
    id?: string;
    user_id: string;
    problem_id: string;
    code: string;
    language?: string | null;
    status?: string | null;
    points_earned?: number;
    test_cases_passed?: number;
    total_test_cases?: number;
    execution_time?: number | null;
    submitted_at?: Date | string;
};
export type dsa_submissionsUpdateManyMutationInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    problem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    test_cases_passed?: Prisma.IntFieldUpdateOperationsInput | number;
    total_test_cases?: Prisma.IntFieldUpdateOperationsInput | number;
    execution_time?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsa_submissionsUncheckedUpdateManyInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    problem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    test_cases_passed?: Prisma.IntFieldUpdateOperationsInput | number;
    total_test_cases?: Prisma.IntFieldUpdateOperationsInput | number;
    execution_time?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsa_submissionsUser_idProblem_idCompoundUniqueInput = {
    user_id: string;
    problem_id: string;
};
export type dsa_submissionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    test_cases_passed?: Prisma.SortOrder;
    total_test_cases?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type dsa_submissionsAvgOrderByAggregateInput = {
    points_earned?: Prisma.SortOrder;
    test_cases_passed?: Prisma.SortOrder;
    total_test_cases?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
};
export type dsa_submissionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    test_cases_passed?: Prisma.SortOrder;
    total_test_cases?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type dsa_submissionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    problem_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    test_cases_passed?: Prisma.SortOrder;
    total_test_cases?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type dsa_submissionsSumOrderByAggregateInput = {
    points_earned?: Prisma.SortOrder;
    test_cases_passed?: Prisma.SortOrder;
    total_test_cases?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
    unset?: boolean;
};
export type dsa_submissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    problem_id?: boolean;
    code?: boolean;
    language?: boolean;
    status?: boolean;
    points_earned?: boolean;
    test_cases_passed?: boolean;
    total_test_cases?: boolean;
    execution_time?: boolean;
    submitted_at?: boolean;
}, ExtArgs["result"]["dsa_submissions"]>;
export type dsa_submissionsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    problem_id?: boolean;
    code?: boolean;
    language?: boolean;
    status?: boolean;
    points_earned?: boolean;
    test_cases_passed?: boolean;
    total_test_cases?: boolean;
    execution_time?: boolean;
    submitted_at?: boolean;
};
export type dsa_submissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "problem_id" | "code" | "language" | "status" | "points_earned" | "test_cases_passed" | "total_test_cases" | "execution_time" | "submitted_at", ExtArgs["result"]["dsa_submissions"]>;
export type $dsa_submissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "dsa_submissions";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        problem_id: string;
        code: string;
        language: string | null;
        status: string | null;
        points_earned: number;
        test_cases_passed: number;
        total_test_cases: number;
        execution_time: number | null;
        submitted_at: Date;
    }, ExtArgs["result"]["dsa_submissions"]>;
    composites: {};
};
export type dsa_submissionsGetPayload<S extends boolean | null | undefined | dsa_submissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload, S>;
export type dsa_submissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<dsa_submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Dsa_submissionsCountAggregateInputType | true;
};
export interface dsa_submissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['dsa_submissions'];
        meta: {
            name: 'dsa_submissions';
        };
    };
    /**
     * Find zero or one Dsa_submissions that matches the filter.
     * @param {dsa_submissionsFindUniqueArgs} args - Arguments to find a Dsa_submissions
     * @example
     * // Get one Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dsa_submissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, dsa_submissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__dsa_submissionsClient<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Dsa_submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dsa_submissionsFindUniqueOrThrowArgs} args - Arguments to find a Dsa_submissions
     * @example
     * // Get one Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dsa_submissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, dsa_submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__dsa_submissionsClient<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Dsa_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_submissionsFindFirstArgs} args - Arguments to find a Dsa_submissions
     * @example
     * // Get one Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dsa_submissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, dsa_submissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__dsa_submissionsClient<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Dsa_submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_submissionsFindFirstOrThrowArgs} args - Arguments to find a Dsa_submissions
     * @example
     * // Get one Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dsa_submissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, dsa_submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__dsa_submissionsClient<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Dsa_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.findMany()
     *
     * // Get first 10 Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dsa_submissionsWithIdOnly = await prisma.dsa_submissions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends dsa_submissionsFindManyArgs>(args?: Prisma.SelectSubset<T, dsa_submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Dsa_submissions.
     * @param {dsa_submissionsCreateArgs} args - Arguments to create a Dsa_submissions.
     * @example
     * // Create one Dsa_submissions
     * const Dsa_submissions = await prisma.dsa_submissions.create({
     *   data: {
     *     // ... data to create a Dsa_submissions
     *   }
     * })
     *
     */
    create<T extends dsa_submissionsCreateArgs>(args: Prisma.SelectSubset<T, dsa_submissionsCreateArgs<ExtArgs>>): Prisma.Prisma__dsa_submissionsClient<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Dsa_submissions.
     * @param {dsa_submissionsCreateManyArgs} args - Arguments to create many Dsa_submissions.
     * @example
     * // Create many Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends dsa_submissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, dsa_submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Dsa_submissions.
     * @param {dsa_submissionsDeleteArgs} args - Arguments to delete one Dsa_submissions.
     * @example
     * // Delete one Dsa_submissions
     * const Dsa_submissions = await prisma.dsa_submissions.delete({
     *   where: {
     *     // ... filter to delete one Dsa_submissions
     *   }
     * })
     *
     */
    delete<T extends dsa_submissionsDeleteArgs>(args: Prisma.SelectSubset<T, dsa_submissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__dsa_submissionsClient<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Dsa_submissions.
     * @param {dsa_submissionsUpdateArgs} args - Arguments to update one Dsa_submissions.
     * @example
     * // Update one Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends dsa_submissionsUpdateArgs>(args: Prisma.SelectSubset<T, dsa_submissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__dsa_submissionsClient<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Dsa_submissions.
     * @param {dsa_submissionsDeleteManyArgs} args - Arguments to filter Dsa_submissions to delete.
     * @example
     * // Delete a few Dsa_submissions
     * const { count } = await prisma.dsa_submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends dsa_submissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, dsa_submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Dsa_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends dsa_submissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, dsa_submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Dsa_submissions.
     * @param {dsa_submissionsUpsertArgs} args - Arguments to update or create a Dsa_submissions.
     * @example
     * // Update or create a Dsa_submissions
     * const dsa_submissions = await prisma.dsa_submissions.upsert({
     *   create: {
     *     // ... data to create a Dsa_submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dsa_submissions we want to update
     *   }
     * })
     */
    upsert<T extends dsa_submissionsUpsertArgs>(args: Prisma.SelectSubset<T, dsa_submissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__dsa_submissionsClient<runtime.Types.Result.GetResult<Prisma.$dsa_submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Dsa_submissions that matches the filter.
     * @param {dsa_submissionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dsa_submissions = await prisma.dsa_submissions.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.dsa_submissionsFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Dsa_submissions.
     * @param {dsa_submissionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dsa_submissions = await prisma.dsa_submissions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.dsa_submissionsAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Dsa_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_submissionsCountArgs} args - Arguments to filter Dsa_submissions to count.
     * @example
     * // Count the number of Dsa_submissions
     * const count = await prisma.dsa_submissions.count({
     *   where: {
     *     // ... the filter for the Dsa_submissions we want to count
     *   }
     * })
    **/
    count<T extends dsa_submissionsCountArgs>(args?: Prisma.Subset<T, dsa_submissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Dsa_submissionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Dsa_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dsa_submissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dsa_submissionsAggregateArgs>(args: Prisma.Subset<T, Dsa_submissionsAggregateArgs>): Prisma.PrismaPromise<GetDsa_submissionsAggregateType<T>>;
    /**
     * Group by Dsa_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_submissionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends dsa_submissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: dsa_submissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: dsa_submissionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, dsa_submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDsa_submissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the dsa_submissions model
     */
    readonly fields: dsa_submissionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for dsa_submissions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__dsa_submissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the dsa_submissions model
 */
export interface dsa_submissionsFieldRefs {
    readonly id: Prisma.FieldRef<"dsa_submissions", 'String'>;
    readonly user_id: Prisma.FieldRef<"dsa_submissions", 'String'>;
    readonly problem_id: Prisma.FieldRef<"dsa_submissions", 'String'>;
    readonly code: Prisma.FieldRef<"dsa_submissions", 'String'>;
    readonly language: Prisma.FieldRef<"dsa_submissions", 'String'>;
    readonly status: Prisma.FieldRef<"dsa_submissions", 'String'>;
    readonly points_earned: Prisma.FieldRef<"dsa_submissions", 'Int'>;
    readonly test_cases_passed: Prisma.FieldRef<"dsa_submissions", 'Int'>;
    readonly total_test_cases: Prisma.FieldRef<"dsa_submissions", 'Int'>;
    readonly execution_time: Prisma.FieldRef<"dsa_submissions", 'Int'>;
    readonly submitted_at: Prisma.FieldRef<"dsa_submissions", 'DateTime'>;
}
/**
 * dsa_submissions findUnique
 */
export type dsa_submissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_submissions to fetch.
     */
    where: Prisma.dsa_submissionsWhereUniqueInput;
};
/**
 * dsa_submissions findUniqueOrThrow
 */
export type dsa_submissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_submissions to fetch.
     */
    where: Prisma.dsa_submissionsWhereUniqueInput;
};
/**
 * dsa_submissions findFirst
 */
export type dsa_submissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_submissions to fetch.
     */
    where?: Prisma.dsa_submissionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dsa_submissions to fetch.
     */
    orderBy?: Prisma.dsa_submissionsOrderByWithRelationInput | Prisma.dsa_submissionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for dsa_submissions.
     */
    cursor?: Prisma.dsa_submissionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dsa_submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dsa_submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of dsa_submissions.
     */
    distinct?: Prisma.Dsa_submissionsScalarFieldEnum | Prisma.Dsa_submissionsScalarFieldEnum[];
};
/**
 * dsa_submissions findFirstOrThrow
 */
export type dsa_submissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_submissions to fetch.
     */
    where?: Prisma.dsa_submissionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dsa_submissions to fetch.
     */
    orderBy?: Prisma.dsa_submissionsOrderByWithRelationInput | Prisma.dsa_submissionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for dsa_submissions.
     */
    cursor?: Prisma.dsa_submissionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dsa_submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dsa_submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of dsa_submissions.
     */
    distinct?: Prisma.Dsa_submissionsScalarFieldEnum | Prisma.Dsa_submissionsScalarFieldEnum[];
};
/**
 * dsa_submissions findMany
 */
export type dsa_submissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_submissions to fetch.
     */
    where?: Prisma.dsa_submissionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dsa_submissions to fetch.
     */
    orderBy?: Prisma.dsa_submissionsOrderByWithRelationInput | Prisma.dsa_submissionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing dsa_submissions.
     */
    cursor?: Prisma.dsa_submissionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dsa_submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dsa_submissions.
     */
    skip?: number;
    distinct?: Prisma.Dsa_submissionsScalarFieldEnum | Prisma.Dsa_submissionsScalarFieldEnum[];
};
/**
 * dsa_submissions create
 */
export type dsa_submissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * The data needed to create a dsa_submissions.
     */
    data: Prisma.XOR<Prisma.dsa_submissionsCreateInput, Prisma.dsa_submissionsUncheckedCreateInput>;
};
/**
 * dsa_submissions createMany
 */
export type dsa_submissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many dsa_submissions.
     */
    data: Prisma.dsa_submissionsCreateManyInput | Prisma.dsa_submissionsCreateManyInput[];
};
/**
 * dsa_submissions update
 */
export type dsa_submissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * The data needed to update a dsa_submissions.
     */
    data: Prisma.XOR<Prisma.dsa_submissionsUpdateInput, Prisma.dsa_submissionsUncheckedUpdateInput>;
    /**
     * Choose, which dsa_submissions to update.
     */
    where: Prisma.dsa_submissionsWhereUniqueInput;
};
/**
 * dsa_submissions updateMany
 */
export type dsa_submissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update dsa_submissions.
     */
    data: Prisma.XOR<Prisma.dsa_submissionsUpdateManyMutationInput, Prisma.dsa_submissionsUncheckedUpdateManyInput>;
    /**
     * Filter which dsa_submissions to update
     */
    where?: Prisma.dsa_submissionsWhereInput;
    /**
     * Limit how many dsa_submissions to update.
     */
    limit?: number;
};
/**
 * dsa_submissions upsert
 */
export type dsa_submissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * The filter to search for the dsa_submissions to update in case it exists.
     */
    where: Prisma.dsa_submissionsWhereUniqueInput;
    /**
     * In case the dsa_submissions found by the `where` argument doesn't exist, create a new dsa_submissions with this data.
     */
    create: Prisma.XOR<Prisma.dsa_submissionsCreateInput, Prisma.dsa_submissionsUncheckedCreateInput>;
    /**
     * In case the dsa_submissions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.dsa_submissionsUpdateInput, Prisma.dsa_submissionsUncheckedUpdateInput>;
};
/**
 * dsa_submissions delete
 */
export type dsa_submissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
    /**
     * Filter which dsa_submissions to delete.
     */
    where: Prisma.dsa_submissionsWhereUniqueInput;
};
/**
 * dsa_submissions deleteMany
 */
export type dsa_submissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which dsa_submissions to delete
     */
    where?: Prisma.dsa_submissionsWhereInput;
    /**
     * Limit how many dsa_submissions to delete.
     */
    limit?: number;
};
/**
 * dsa_submissions findRaw
 */
export type dsa_submissionsFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * dsa_submissions aggregateRaw
 */
export type dsa_submissionsAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * dsa_submissions without action
 */
export type dsa_submissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_submissions
     */
    select?: Prisma.dsa_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_submissions
     */
    omit?: Prisma.dsa_submissionsOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=dsa_submissions.d.ts.map