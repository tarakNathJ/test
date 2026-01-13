import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model mcq_submissions
 *
 */
export type mcq_submissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$mcq_submissionsPayload>;
export type AggregateMcq_submissions = {
    _count: Mcq_submissionsCountAggregateOutputType | null;
    _avg: Mcq_submissionsAvgAggregateOutputType | null;
    _sum: Mcq_submissionsSumAggregateOutputType | null;
    _min: Mcq_submissionsMinAggregateOutputType | null;
    _max: Mcq_submissionsMaxAggregateOutputType | null;
};
export type Mcq_submissionsAvgAggregateOutputType = {
    selected_option_index: number | null;
    points_earned: number | null;
};
export type Mcq_submissionsSumAggregateOutputType = {
    selected_option_index: number | null;
    points_earned: number | null;
};
export type Mcq_submissionsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    question_id: string | null;
    selected_option_index: number | null;
    is_correct: boolean | null;
    points_earned: number | null;
    submitted_at: Date | null;
};
export type Mcq_submissionsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    question_id: string | null;
    selected_option_index: number | null;
    is_correct: boolean | null;
    points_earned: number | null;
    submitted_at: Date | null;
};
export type Mcq_submissionsCountAggregateOutputType = {
    id: number;
    user_id: number;
    question_id: number;
    selected_option_index: number;
    is_correct: number;
    points_earned: number;
    submitted_at: number;
    _all: number;
};
export type Mcq_submissionsAvgAggregateInputType = {
    selected_option_index?: true;
    points_earned?: true;
};
export type Mcq_submissionsSumAggregateInputType = {
    selected_option_index?: true;
    points_earned?: true;
};
export type Mcq_submissionsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    question_id?: true;
    selected_option_index?: true;
    is_correct?: true;
    points_earned?: true;
    submitted_at?: true;
};
export type Mcq_submissionsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    question_id?: true;
    selected_option_index?: true;
    is_correct?: true;
    points_earned?: true;
    submitted_at?: true;
};
export type Mcq_submissionsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    question_id?: true;
    selected_option_index?: true;
    is_correct?: true;
    points_earned?: true;
    submitted_at?: true;
    _all?: true;
};
export type Mcq_submissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which mcq_submissions to aggregate.
     */
    where?: Prisma.mcq_submissionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mcq_submissions to fetch.
     */
    orderBy?: Prisma.mcq_submissionsOrderByWithRelationInput | Prisma.mcq_submissionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.mcq_submissionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mcq_submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mcq_submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned mcq_submissions
    **/
    _count?: true | Mcq_submissionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Mcq_submissionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Mcq_submissionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Mcq_submissionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Mcq_submissionsMaxAggregateInputType;
};
export type GetMcq_submissionsAggregateType<T extends Mcq_submissionsAggregateArgs> = {
    [P in keyof T & keyof AggregateMcq_submissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMcq_submissions[P]> : Prisma.GetScalarType<T[P], AggregateMcq_submissions[P]>;
};
export type mcq_submissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mcq_submissionsWhereInput;
    orderBy?: Prisma.mcq_submissionsOrderByWithAggregationInput | Prisma.mcq_submissionsOrderByWithAggregationInput[];
    by: Prisma.Mcq_submissionsScalarFieldEnum[] | Prisma.Mcq_submissionsScalarFieldEnum;
    having?: Prisma.mcq_submissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Mcq_submissionsCountAggregateInputType | true;
    _avg?: Mcq_submissionsAvgAggregateInputType;
    _sum?: Mcq_submissionsSumAggregateInputType;
    _min?: Mcq_submissionsMinAggregateInputType;
    _max?: Mcq_submissionsMaxAggregateInputType;
};
export type Mcq_submissionsGroupByOutputType = {
    id: string;
    user_id: string;
    question_id: string;
    selected_option_index: number;
    is_correct: boolean;
    points_earned: number;
    submitted_at: Date;
    _count: Mcq_submissionsCountAggregateOutputType | null;
    _avg: Mcq_submissionsAvgAggregateOutputType | null;
    _sum: Mcq_submissionsSumAggregateOutputType | null;
    _min: Mcq_submissionsMinAggregateOutputType | null;
    _max: Mcq_submissionsMaxAggregateOutputType | null;
};
type GetMcq_submissionsGroupByPayload<T extends mcq_submissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Mcq_submissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Mcq_submissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Mcq_submissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Mcq_submissionsGroupByOutputType[P]>;
}>>;
export type mcq_submissionsWhereInput = {
    AND?: Prisma.mcq_submissionsWhereInput | Prisma.mcq_submissionsWhereInput[];
    OR?: Prisma.mcq_submissionsWhereInput[];
    NOT?: Prisma.mcq_submissionsWhereInput | Prisma.mcq_submissionsWhereInput[];
    id?: Prisma.StringFilter<"mcq_submissions"> | string;
    user_id?: Prisma.StringFilter<"mcq_submissions"> | string;
    question_id?: Prisma.StringFilter<"mcq_submissions"> | string;
    selected_option_index?: Prisma.IntFilter<"mcq_submissions"> | number;
    is_correct?: Prisma.BoolFilter<"mcq_submissions"> | boolean;
    points_earned?: Prisma.IntFilter<"mcq_submissions"> | number;
    submitted_at?: Prisma.DateTimeFilter<"mcq_submissions"> | Date | string;
};
export type mcq_submissionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    selected_option_index?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type mcq_submissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_question_id?: Prisma.mcq_submissionsUser_idQuestion_idCompoundUniqueInput;
    AND?: Prisma.mcq_submissionsWhereInput | Prisma.mcq_submissionsWhereInput[];
    OR?: Prisma.mcq_submissionsWhereInput[];
    NOT?: Prisma.mcq_submissionsWhereInput | Prisma.mcq_submissionsWhereInput[];
    user_id?: Prisma.StringFilter<"mcq_submissions"> | string;
    question_id?: Prisma.StringFilter<"mcq_submissions"> | string;
    selected_option_index?: Prisma.IntFilter<"mcq_submissions"> | number;
    is_correct?: Prisma.BoolFilter<"mcq_submissions"> | boolean;
    points_earned?: Prisma.IntFilter<"mcq_submissions"> | number;
    submitted_at?: Prisma.DateTimeFilter<"mcq_submissions"> | Date | string;
}, "id" | "user_id_question_id">;
export type mcq_submissionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    selected_option_index?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    _count?: Prisma.mcq_submissionsCountOrderByAggregateInput;
    _avg?: Prisma.mcq_submissionsAvgOrderByAggregateInput;
    _max?: Prisma.mcq_submissionsMaxOrderByAggregateInput;
    _min?: Prisma.mcq_submissionsMinOrderByAggregateInput;
    _sum?: Prisma.mcq_submissionsSumOrderByAggregateInput;
};
export type mcq_submissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.mcq_submissionsScalarWhereWithAggregatesInput | Prisma.mcq_submissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.mcq_submissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mcq_submissionsScalarWhereWithAggregatesInput | Prisma.mcq_submissionsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"mcq_submissions"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"mcq_submissions"> | string;
    question_id?: Prisma.StringWithAggregatesFilter<"mcq_submissions"> | string;
    selected_option_index?: Prisma.IntWithAggregatesFilter<"mcq_submissions"> | number;
    is_correct?: Prisma.BoolWithAggregatesFilter<"mcq_submissions"> | boolean;
    points_earned?: Prisma.IntWithAggregatesFilter<"mcq_submissions"> | number;
    submitted_at?: Prisma.DateTimeWithAggregatesFilter<"mcq_submissions"> | Date | string;
};
export type mcq_submissionsCreateInput = {
    id?: string;
    user_id: string;
    question_id: string;
    selected_option_index: number;
    is_correct: boolean;
    points_earned?: number;
    submitted_at?: Date | string;
};
export type mcq_submissionsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    question_id: string;
    selected_option_index: number;
    is_correct: boolean;
    points_earned?: number;
    submitted_at?: Date | string;
};
export type mcq_submissionsUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    question_id?: Prisma.StringFieldUpdateOperationsInput | string;
    selected_option_index?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mcq_submissionsUncheckedUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    question_id?: Prisma.StringFieldUpdateOperationsInput | string;
    selected_option_index?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mcq_submissionsCreateManyInput = {
    id?: string;
    user_id: string;
    question_id: string;
    selected_option_index: number;
    is_correct: boolean;
    points_earned?: number;
    submitted_at?: Date | string;
};
export type mcq_submissionsUpdateManyMutationInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    question_id?: Prisma.StringFieldUpdateOperationsInput | string;
    selected_option_index?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mcq_submissionsUncheckedUpdateManyInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    question_id?: Prisma.StringFieldUpdateOperationsInput | string;
    selected_option_index?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mcq_submissionsUser_idQuestion_idCompoundUniqueInput = {
    user_id: string;
    question_id: string;
};
export type mcq_submissionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    selected_option_index?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type mcq_submissionsAvgOrderByAggregateInput = {
    selected_option_index?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
};
export type mcq_submissionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    selected_option_index?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type mcq_submissionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    selected_option_index?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type mcq_submissionsSumOrderByAggregateInput = {
    selected_option_index?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type mcq_submissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    question_id?: boolean;
    selected_option_index?: boolean;
    is_correct?: boolean;
    points_earned?: boolean;
    submitted_at?: boolean;
}, ExtArgs["result"]["mcq_submissions"]>;
export type mcq_submissionsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    question_id?: boolean;
    selected_option_index?: boolean;
    is_correct?: boolean;
    points_earned?: boolean;
    submitted_at?: boolean;
};
export type mcq_submissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "question_id" | "selected_option_index" | "is_correct" | "points_earned" | "submitted_at", ExtArgs["result"]["mcq_submissions"]>;
export type $mcq_submissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "mcq_submissions";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        question_id: string;
        selected_option_index: number;
        is_correct: boolean;
        points_earned: number;
        submitted_at: Date;
    }, ExtArgs["result"]["mcq_submissions"]>;
    composites: {};
};
export type mcq_submissionsGetPayload<S extends boolean | null | undefined | mcq_submissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload, S>;
export type mcq_submissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mcq_submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Mcq_submissionsCountAggregateInputType | true;
};
export interface mcq_submissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['mcq_submissions'];
        meta: {
            name: 'mcq_submissions';
        };
    };
    /**
     * Find zero or one Mcq_submissions that matches the filter.
     * @param {mcq_submissionsFindUniqueArgs} args - Arguments to find a Mcq_submissions
     * @example
     * // Get one Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mcq_submissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, mcq_submissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mcq_submissionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Mcq_submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mcq_submissionsFindUniqueOrThrowArgs} args - Arguments to find a Mcq_submissions
     * @example
     * // Get one Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mcq_submissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mcq_submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mcq_submissionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Mcq_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_submissionsFindFirstArgs} args - Arguments to find a Mcq_submissions
     * @example
     * // Get one Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mcq_submissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, mcq_submissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__mcq_submissionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Mcq_submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_submissionsFindFirstOrThrowArgs} args - Arguments to find a Mcq_submissions
     * @example
     * // Get one Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mcq_submissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mcq_submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mcq_submissionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Mcq_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.findMany()
     *
     * // Get first 10 Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mcq_submissionsWithIdOnly = await prisma.mcq_submissions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends mcq_submissionsFindManyArgs>(args?: Prisma.SelectSubset<T, mcq_submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Mcq_submissions.
     * @param {mcq_submissionsCreateArgs} args - Arguments to create a Mcq_submissions.
     * @example
     * // Create one Mcq_submissions
     * const Mcq_submissions = await prisma.mcq_submissions.create({
     *   data: {
     *     // ... data to create a Mcq_submissions
     *   }
     * })
     *
     */
    create<T extends mcq_submissionsCreateArgs>(args: Prisma.SelectSubset<T, mcq_submissionsCreateArgs<ExtArgs>>): Prisma.Prisma__mcq_submissionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Mcq_submissions.
     * @param {mcq_submissionsCreateManyArgs} args - Arguments to create many Mcq_submissions.
     * @example
     * // Create many Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends mcq_submissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, mcq_submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Mcq_submissions.
     * @param {mcq_submissionsDeleteArgs} args - Arguments to delete one Mcq_submissions.
     * @example
     * // Delete one Mcq_submissions
     * const Mcq_submissions = await prisma.mcq_submissions.delete({
     *   where: {
     *     // ... filter to delete one Mcq_submissions
     *   }
     * })
     *
     */
    delete<T extends mcq_submissionsDeleteArgs>(args: Prisma.SelectSubset<T, mcq_submissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__mcq_submissionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Mcq_submissions.
     * @param {mcq_submissionsUpdateArgs} args - Arguments to update one Mcq_submissions.
     * @example
     * // Update one Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends mcq_submissionsUpdateArgs>(args: Prisma.SelectSubset<T, mcq_submissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__mcq_submissionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Mcq_submissions.
     * @param {mcq_submissionsDeleteManyArgs} args - Arguments to filter Mcq_submissions to delete.
     * @example
     * // Delete a few Mcq_submissions
     * const { count } = await prisma.mcq_submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends mcq_submissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, mcq_submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Mcq_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends mcq_submissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, mcq_submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Mcq_submissions.
     * @param {mcq_submissionsUpsertArgs} args - Arguments to update or create a Mcq_submissions.
     * @example
     * // Update or create a Mcq_submissions
     * const mcq_submissions = await prisma.mcq_submissions.upsert({
     *   create: {
     *     // ... data to create a Mcq_submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mcq_submissions we want to update
     *   }
     * })
     */
    upsert<T extends mcq_submissionsUpsertArgs>(args: Prisma.SelectSubset<T, mcq_submissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__mcq_submissionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Mcq_submissions that matches the filter.
     * @param {mcq_submissionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mcq_submissions = await prisma.mcq_submissions.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.mcq_submissionsFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Mcq_submissions.
     * @param {mcq_submissionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mcq_submissions = await prisma.mcq_submissions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.mcq_submissionsAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Mcq_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_submissionsCountArgs} args - Arguments to filter Mcq_submissions to count.
     * @example
     * // Count the number of Mcq_submissions
     * const count = await prisma.mcq_submissions.count({
     *   where: {
     *     // ... the filter for the Mcq_submissions we want to count
     *   }
     * })
    **/
    count<T extends mcq_submissionsCountArgs>(args?: Prisma.Subset<T, mcq_submissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Mcq_submissionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Mcq_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mcq_submissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mcq_submissionsAggregateArgs>(args: Prisma.Subset<T, Mcq_submissionsAggregateArgs>): Prisma.PrismaPromise<GetMcq_submissionsAggregateType<T>>;
    /**
     * Group by Mcq_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_submissionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends mcq_submissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mcq_submissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: mcq_submissionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mcq_submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcq_submissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the mcq_submissions model
     */
    readonly fields: mcq_submissionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for mcq_submissions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__mcq_submissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the mcq_submissions model
 */
export interface mcq_submissionsFieldRefs {
    readonly id: Prisma.FieldRef<"mcq_submissions", 'String'>;
    readonly user_id: Prisma.FieldRef<"mcq_submissions", 'String'>;
    readonly question_id: Prisma.FieldRef<"mcq_submissions", 'String'>;
    readonly selected_option_index: Prisma.FieldRef<"mcq_submissions", 'Int'>;
    readonly is_correct: Prisma.FieldRef<"mcq_submissions", 'Boolean'>;
    readonly points_earned: Prisma.FieldRef<"mcq_submissions", 'Int'>;
    readonly submitted_at: Prisma.FieldRef<"mcq_submissions", 'DateTime'>;
}
/**
 * mcq_submissions findUnique
 */
export type mcq_submissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_submissions to fetch.
     */
    where: Prisma.mcq_submissionsWhereUniqueInput;
};
/**
 * mcq_submissions findUniqueOrThrow
 */
export type mcq_submissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_submissions to fetch.
     */
    where: Prisma.mcq_submissionsWhereUniqueInput;
};
/**
 * mcq_submissions findFirst
 */
export type mcq_submissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_submissions to fetch.
     */
    where?: Prisma.mcq_submissionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mcq_submissions to fetch.
     */
    orderBy?: Prisma.mcq_submissionsOrderByWithRelationInput | Prisma.mcq_submissionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mcq_submissions.
     */
    cursor?: Prisma.mcq_submissionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mcq_submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mcq_submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mcq_submissions.
     */
    distinct?: Prisma.Mcq_submissionsScalarFieldEnum | Prisma.Mcq_submissionsScalarFieldEnum[];
};
/**
 * mcq_submissions findFirstOrThrow
 */
export type mcq_submissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_submissions to fetch.
     */
    where?: Prisma.mcq_submissionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mcq_submissions to fetch.
     */
    orderBy?: Prisma.mcq_submissionsOrderByWithRelationInput | Prisma.mcq_submissionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mcq_submissions.
     */
    cursor?: Prisma.mcq_submissionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mcq_submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mcq_submissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mcq_submissions.
     */
    distinct?: Prisma.Mcq_submissionsScalarFieldEnum | Prisma.Mcq_submissionsScalarFieldEnum[];
};
/**
 * mcq_submissions findMany
 */
export type mcq_submissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_submissions to fetch.
     */
    where?: Prisma.mcq_submissionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mcq_submissions to fetch.
     */
    orderBy?: Prisma.mcq_submissionsOrderByWithRelationInput | Prisma.mcq_submissionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing mcq_submissions.
     */
    cursor?: Prisma.mcq_submissionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mcq_submissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mcq_submissions.
     */
    skip?: number;
    distinct?: Prisma.Mcq_submissionsScalarFieldEnum | Prisma.Mcq_submissionsScalarFieldEnum[];
};
/**
 * mcq_submissions create
 */
export type mcq_submissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * The data needed to create a mcq_submissions.
     */
    data: Prisma.XOR<Prisma.mcq_submissionsCreateInput, Prisma.mcq_submissionsUncheckedCreateInput>;
};
/**
 * mcq_submissions createMany
 */
export type mcq_submissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many mcq_submissions.
     */
    data: Prisma.mcq_submissionsCreateManyInput | Prisma.mcq_submissionsCreateManyInput[];
};
/**
 * mcq_submissions update
 */
export type mcq_submissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * The data needed to update a mcq_submissions.
     */
    data: Prisma.XOR<Prisma.mcq_submissionsUpdateInput, Prisma.mcq_submissionsUncheckedUpdateInput>;
    /**
     * Choose, which mcq_submissions to update.
     */
    where: Prisma.mcq_submissionsWhereUniqueInput;
};
/**
 * mcq_submissions updateMany
 */
export type mcq_submissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update mcq_submissions.
     */
    data: Prisma.XOR<Prisma.mcq_submissionsUpdateManyMutationInput, Prisma.mcq_submissionsUncheckedUpdateManyInput>;
    /**
     * Filter which mcq_submissions to update
     */
    where?: Prisma.mcq_submissionsWhereInput;
    /**
     * Limit how many mcq_submissions to update.
     */
    limit?: number;
};
/**
 * mcq_submissions upsert
 */
export type mcq_submissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * The filter to search for the mcq_submissions to update in case it exists.
     */
    where: Prisma.mcq_submissionsWhereUniqueInput;
    /**
     * In case the mcq_submissions found by the `where` argument doesn't exist, create a new mcq_submissions with this data.
     */
    create: Prisma.XOR<Prisma.mcq_submissionsCreateInput, Prisma.mcq_submissionsUncheckedCreateInput>;
    /**
     * In case the mcq_submissions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.mcq_submissionsUpdateInput, Prisma.mcq_submissionsUncheckedUpdateInput>;
};
/**
 * mcq_submissions delete
 */
export type mcq_submissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
    /**
     * Filter which mcq_submissions to delete.
     */
    where: Prisma.mcq_submissionsWhereUniqueInput;
};
/**
 * mcq_submissions deleteMany
 */
export type mcq_submissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which mcq_submissions to delete
     */
    where?: Prisma.mcq_submissionsWhereInput;
    /**
     * Limit how many mcq_submissions to delete.
     */
    limit?: number;
};
/**
 * mcq_submissions findRaw
 */
export type mcq_submissionsFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * mcq_submissions aggregateRaw
 */
export type mcq_submissionsAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * mcq_submissions without action
 */
export type mcq_submissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_submissions
     */
    select?: Prisma.mcq_submissionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_submissions
     */
    omit?: Prisma.mcq_submissionsOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=mcq_submissions.d.ts.map