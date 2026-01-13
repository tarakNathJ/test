import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model mcq_questions
 *
 */
export type mcq_questionsModel = runtime.Types.Result.DefaultSelection<Prisma.$mcq_questionsPayload>;
export type AggregateMcq_questions = {
    _count: Mcq_questionsCountAggregateOutputType | null;
    _avg: Mcq_questionsAvgAggregateOutputType | null;
    _sum: Mcq_questionsSumAggregateOutputType | null;
    _min: Mcq_questionsMinAggregateOutputType | null;
    _max: Mcq_questionsMaxAggregateOutputType | null;
};
export type Mcq_questionsAvgAggregateOutputType = {
    correct_option_index: number | null;
    points: number | null;
};
export type Mcq_questionsSumAggregateOutputType = {
    correct_option_index: number | null;
    points: number | null;
};
export type Mcq_questionsMinAggregateOutputType = {
    id: string | null;
    contest_id: string | null;
    question_text: string | null;
    correct_option_index: number | null;
    points: number | null;
    createdAt: Date | null;
};
export type Mcq_questionsMaxAggregateOutputType = {
    id: string | null;
    contest_id: string | null;
    question_text: string | null;
    correct_option_index: number | null;
    points: number | null;
    createdAt: Date | null;
};
export type Mcq_questionsCountAggregateOutputType = {
    id: number;
    contest_id: number;
    question_text: number;
    options: number;
    correct_option_index: number;
    points: number;
    createdAt: number;
    _all: number;
};
export type Mcq_questionsAvgAggregateInputType = {
    correct_option_index?: true;
    points?: true;
};
export type Mcq_questionsSumAggregateInputType = {
    correct_option_index?: true;
    points?: true;
};
export type Mcq_questionsMinAggregateInputType = {
    id?: true;
    contest_id?: true;
    question_text?: true;
    correct_option_index?: true;
    points?: true;
    createdAt?: true;
};
export type Mcq_questionsMaxAggregateInputType = {
    id?: true;
    contest_id?: true;
    question_text?: true;
    correct_option_index?: true;
    points?: true;
    createdAt?: true;
};
export type Mcq_questionsCountAggregateInputType = {
    id?: true;
    contest_id?: true;
    question_text?: true;
    options?: true;
    correct_option_index?: true;
    points?: true;
    createdAt?: true;
    _all?: true;
};
export type Mcq_questionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which mcq_questions to aggregate.
     */
    where?: Prisma.mcq_questionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mcq_questions to fetch.
     */
    orderBy?: Prisma.mcq_questionsOrderByWithRelationInput | Prisma.mcq_questionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.mcq_questionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mcq_questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mcq_questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned mcq_questions
    **/
    _count?: true | Mcq_questionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Mcq_questionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Mcq_questionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Mcq_questionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Mcq_questionsMaxAggregateInputType;
};
export type GetMcq_questionsAggregateType<T extends Mcq_questionsAggregateArgs> = {
    [P in keyof T & keyof AggregateMcq_questions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMcq_questions[P]> : Prisma.GetScalarType<T[P], AggregateMcq_questions[P]>;
};
export type mcq_questionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mcq_questionsWhereInput;
    orderBy?: Prisma.mcq_questionsOrderByWithAggregationInput | Prisma.mcq_questionsOrderByWithAggregationInput[];
    by: Prisma.Mcq_questionsScalarFieldEnum[] | Prisma.Mcq_questionsScalarFieldEnum;
    having?: Prisma.mcq_questionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Mcq_questionsCountAggregateInputType | true;
    _avg?: Mcq_questionsAvgAggregateInputType;
    _sum?: Mcq_questionsSumAggregateInputType;
    _min?: Mcq_questionsMinAggregateInputType;
    _max?: Mcq_questionsMaxAggregateInputType;
};
export type Mcq_questionsGroupByOutputType = {
    id: string;
    contest_id: string;
    question_text: string;
    options: runtime.JsonValue;
    correct_option_index: number;
    points: number;
    createdAt: Date;
    _count: Mcq_questionsCountAggregateOutputType | null;
    _avg: Mcq_questionsAvgAggregateOutputType | null;
    _sum: Mcq_questionsSumAggregateOutputType | null;
    _min: Mcq_questionsMinAggregateOutputType | null;
    _max: Mcq_questionsMaxAggregateOutputType | null;
};
type GetMcq_questionsGroupByPayload<T extends mcq_questionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Mcq_questionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Mcq_questionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Mcq_questionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Mcq_questionsGroupByOutputType[P]>;
}>>;
export type mcq_questionsWhereInput = {
    AND?: Prisma.mcq_questionsWhereInput | Prisma.mcq_questionsWhereInput[];
    OR?: Prisma.mcq_questionsWhereInput[];
    NOT?: Prisma.mcq_questionsWhereInput | Prisma.mcq_questionsWhereInput[];
    id?: Prisma.StringFilter<"mcq_questions"> | string;
    contest_id?: Prisma.StringFilter<"mcq_questions"> | string;
    question_text?: Prisma.StringFilter<"mcq_questions"> | string;
    options?: Prisma.JsonFilter<"mcq_questions">;
    correct_option_index?: Prisma.IntFilter<"mcq_questions"> | number;
    points?: Prisma.IntFilter<"mcq_questions"> | number;
    createdAt?: Prisma.DateTimeFilter<"mcq_questions"> | Date | string;
};
export type mcq_questionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    question_text?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correct_option_index?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type mcq_questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.mcq_questionsWhereInput | Prisma.mcq_questionsWhereInput[];
    OR?: Prisma.mcq_questionsWhereInput[];
    NOT?: Prisma.mcq_questionsWhereInput | Prisma.mcq_questionsWhereInput[];
    contest_id?: Prisma.StringFilter<"mcq_questions"> | string;
    question_text?: Prisma.StringFilter<"mcq_questions"> | string;
    options?: Prisma.JsonFilter<"mcq_questions">;
    correct_option_index?: Prisma.IntFilter<"mcq_questions"> | number;
    points?: Prisma.IntFilter<"mcq_questions"> | number;
    createdAt?: Prisma.DateTimeFilter<"mcq_questions"> | Date | string;
}, "id">;
export type mcq_questionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    question_text?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correct_option_index?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.mcq_questionsCountOrderByAggregateInput;
    _avg?: Prisma.mcq_questionsAvgOrderByAggregateInput;
    _max?: Prisma.mcq_questionsMaxOrderByAggregateInput;
    _min?: Prisma.mcq_questionsMinOrderByAggregateInput;
    _sum?: Prisma.mcq_questionsSumOrderByAggregateInput;
};
export type mcq_questionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.mcq_questionsScalarWhereWithAggregatesInput | Prisma.mcq_questionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.mcq_questionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mcq_questionsScalarWhereWithAggregatesInput | Prisma.mcq_questionsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"mcq_questions"> | string;
    contest_id?: Prisma.StringWithAggregatesFilter<"mcq_questions"> | string;
    question_text?: Prisma.StringWithAggregatesFilter<"mcq_questions"> | string;
    options?: Prisma.JsonWithAggregatesFilter<"mcq_questions">;
    correct_option_index?: Prisma.IntWithAggregatesFilter<"mcq_questions"> | number;
    points?: Prisma.IntWithAggregatesFilter<"mcq_questions"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"mcq_questions"> | Date | string;
};
export type mcq_questionsCreateInput = {
    id?: string;
    contest_id: string;
    question_text: string;
    options: runtime.InputJsonValue;
    correct_option_index: number;
    points?: number;
    createdAt?: Date | string;
};
export type mcq_questionsUncheckedCreateInput = {
    id?: string;
    contest_id: string;
    question_text: string;
    options: runtime.InputJsonValue;
    correct_option_index: number;
    points?: number;
    createdAt?: Date | string;
};
export type mcq_questionsUpdateInput = {
    contest_id?: Prisma.StringFieldUpdateOperationsInput | string;
    question_text?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: runtime.InputJsonValue | runtime.InputJsonValue;
    correct_option_index?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mcq_questionsUncheckedUpdateInput = {
    contest_id?: Prisma.StringFieldUpdateOperationsInput | string;
    question_text?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: runtime.InputJsonValue | runtime.InputJsonValue;
    correct_option_index?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mcq_questionsCreateManyInput = {
    id?: string;
    contest_id: string;
    question_text: string;
    options: runtime.InputJsonValue;
    correct_option_index: number;
    points?: number;
    createdAt?: Date | string;
};
export type mcq_questionsUpdateManyMutationInput = {
    contest_id?: Prisma.StringFieldUpdateOperationsInput | string;
    question_text?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: runtime.InputJsonValue | runtime.InputJsonValue;
    correct_option_index?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mcq_questionsUncheckedUpdateManyInput = {
    contest_id?: Prisma.StringFieldUpdateOperationsInput | string;
    question_text?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: runtime.InputJsonValue | runtime.InputJsonValue;
    correct_option_index?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mcq_questionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    question_text?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correct_option_index?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type mcq_questionsAvgOrderByAggregateInput = {
    correct_option_index?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type mcq_questionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    question_text?: Prisma.SortOrder;
    correct_option_index?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type mcq_questionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    question_text?: Prisma.SortOrder;
    correct_option_index?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type mcq_questionsSumOrderByAggregateInput = {
    correct_option_index?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type mcq_questionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contest_id?: boolean;
    question_text?: boolean;
    options?: boolean;
    correct_option_index?: boolean;
    points?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["mcq_questions"]>;
export type mcq_questionsSelectScalar = {
    id?: boolean;
    contest_id?: boolean;
    question_text?: boolean;
    options?: boolean;
    correct_option_index?: boolean;
    points?: boolean;
    createdAt?: boolean;
};
export type mcq_questionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contest_id" | "question_text" | "options" | "correct_option_index" | "points" | "createdAt", ExtArgs["result"]["mcq_questions"]>;
export type $mcq_questionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "mcq_questions";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contest_id: string;
        question_text: string;
        options: runtime.JsonValue;
        correct_option_index: number;
        points: number;
        createdAt: Date;
    }, ExtArgs["result"]["mcq_questions"]>;
    composites: {};
};
export type mcq_questionsGetPayload<S extends boolean | null | undefined | mcq_questionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload, S>;
export type mcq_questionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mcq_questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Mcq_questionsCountAggregateInputType | true;
};
export interface mcq_questionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['mcq_questions'];
        meta: {
            name: 'mcq_questions';
        };
    };
    /**
     * Find zero or one Mcq_questions that matches the filter.
     * @param {mcq_questionsFindUniqueArgs} args - Arguments to find a Mcq_questions
     * @example
     * // Get one Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mcq_questionsFindUniqueArgs>(args: Prisma.SelectSubset<T, mcq_questionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mcq_questionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Mcq_questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mcq_questionsFindUniqueOrThrowArgs} args - Arguments to find a Mcq_questions
     * @example
     * // Get one Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mcq_questionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mcq_questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mcq_questionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Mcq_questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_questionsFindFirstArgs} args - Arguments to find a Mcq_questions
     * @example
     * // Get one Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mcq_questionsFindFirstArgs>(args?: Prisma.SelectSubset<T, mcq_questionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__mcq_questionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Mcq_questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_questionsFindFirstOrThrowArgs} args - Arguments to find a Mcq_questions
     * @example
     * // Get one Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mcq_questionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mcq_questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mcq_questionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Mcq_questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.findMany()
     *
     * // Get first 10 Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mcq_questionsWithIdOnly = await prisma.mcq_questions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends mcq_questionsFindManyArgs>(args?: Prisma.SelectSubset<T, mcq_questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Mcq_questions.
     * @param {mcq_questionsCreateArgs} args - Arguments to create a Mcq_questions.
     * @example
     * // Create one Mcq_questions
     * const Mcq_questions = await prisma.mcq_questions.create({
     *   data: {
     *     // ... data to create a Mcq_questions
     *   }
     * })
     *
     */
    create<T extends mcq_questionsCreateArgs>(args: Prisma.SelectSubset<T, mcq_questionsCreateArgs<ExtArgs>>): Prisma.Prisma__mcq_questionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Mcq_questions.
     * @param {mcq_questionsCreateManyArgs} args - Arguments to create many Mcq_questions.
     * @example
     * // Create many Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends mcq_questionsCreateManyArgs>(args?: Prisma.SelectSubset<T, mcq_questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Mcq_questions.
     * @param {mcq_questionsDeleteArgs} args - Arguments to delete one Mcq_questions.
     * @example
     * // Delete one Mcq_questions
     * const Mcq_questions = await prisma.mcq_questions.delete({
     *   where: {
     *     // ... filter to delete one Mcq_questions
     *   }
     * })
     *
     */
    delete<T extends mcq_questionsDeleteArgs>(args: Prisma.SelectSubset<T, mcq_questionsDeleteArgs<ExtArgs>>): Prisma.Prisma__mcq_questionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Mcq_questions.
     * @param {mcq_questionsUpdateArgs} args - Arguments to update one Mcq_questions.
     * @example
     * // Update one Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends mcq_questionsUpdateArgs>(args: Prisma.SelectSubset<T, mcq_questionsUpdateArgs<ExtArgs>>): Prisma.Prisma__mcq_questionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Mcq_questions.
     * @param {mcq_questionsDeleteManyArgs} args - Arguments to filter Mcq_questions to delete.
     * @example
     * // Delete a few Mcq_questions
     * const { count } = await prisma.mcq_questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends mcq_questionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, mcq_questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Mcq_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends mcq_questionsUpdateManyArgs>(args: Prisma.SelectSubset<T, mcq_questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Mcq_questions.
     * @param {mcq_questionsUpsertArgs} args - Arguments to update or create a Mcq_questions.
     * @example
     * // Update or create a Mcq_questions
     * const mcq_questions = await prisma.mcq_questions.upsert({
     *   create: {
     *     // ... data to create a Mcq_questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mcq_questions we want to update
     *   }
     * })
     */
    upsert<T extends mcq_questionsUpsertArgs>(args: Prisma.SelectSubset<T, mcq_questionsUpsertArgs<ExtArgs>>): Prisma.Prisma__mcq_questionsClient<runtime.Types.Result.GetResult<Prisma.$mcq_questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Mcq_questions that matches the filter.
     * @param {mcq_questionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mcq_questions = await prisma.mcq_questions.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.mcq_questionsFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Mcq_questions.
     * @param {mcq_questionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mcq_questions = await prisma.mcq_questions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.mcq_questionsAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Mcq_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_questionsCountArgs} args - Arguments to filter Mcq_questions to count.
     * @example
     * // Count the number of Mcq_questions
     * const count = await prisma.mcq_questions.count({
     *   where: {
     *     // ... the filter for the Mcq_questions we want to count
     *   }
     * })
    **/
    count<T extends mcq_questionsCountArgs>(args?: Prisma.Subset<T, mcq_questionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Mcq_questionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Mcq_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mcq_questionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mcq_questionsAggregateArgs>(args: Prisma.Subset<T, Mcq_questionsAggregateArgs>): Prisma.PrismaPromise<GetMcq_questionsAggregateType<T>>;
    /**
     * Group by Mcq_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mcq_questionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends mcq_questionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mcq_questionsGroupByArgs['orderBy'];
    } : {
        orderBy?: mcq_questionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mcq_questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcq_questionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the mcq_questions model
     */
    readonly fields: mcq_questionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for mcq_questions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__mcq_questionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the mcq_questions model
 */
export interface mcq_questionsFieldRefs {
    readonly id: Prisma.FieldRef<"mcq_questions", 'String'>;
    readonly contest_id: Prisma.FieldRef<"mcq_questions", 'String'>;
    readonly question_text: Prisma.FieldRef<"mcq_questions", 'String'>;
    readonly options: Prisma.FieldRef<"mcq_questions", 'Json'>;
    readonly correct_option_index: Prisma.FieldRef<"mcq_questions", 'Int'>;
    readonly points: Prisma.FieldRef<"mcq_questions", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"mcq_questions", 'DateTime'>;
}
/**
 * mcq_questions findUnique
 */
export type mcq_questionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_questions to fetch.
     */
    where: Prisma.mcq_questionsWhereUniqueInput;
};
/**
 * mcq_questions findUniqueOrThrow
 */
export type mcq_questionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_questions to fetch.
     */
    where: Prisma.mcq_questionsWhereUniqueInput;
};
/**
 * mcq_questions findFirst
 */
export type mcq_questionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_questions to fetch.
     */
    where?: Prisma.mcq_questionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mcq_questions to fetch.
     */
    orderBy?: Prisma.mcq_questionsOrderByWithRelationInput | Prisma.mcq_questionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mcq_questions.
     */
    cursor?: Prisma.mcq_questionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mcq_questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mcq_questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mcq_questions.
     */
    distinct?: Prisma.Mcq_questionsScalarFieldEnum | Prisma.Mcq_questionsScalarFieldEnum[];
};
/**
 * mcq_questions findFirstOrThrow
 */
export type mcq_questionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_questions to fetch.
     */
    where?: Prisma.mcq_questionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mcq_questions to fetch.
     */
    orderBy?: Prisma.mcq_questionsOrderByWithRelationInput | Prisma.mcq_questionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mcq_questions.
     */
    cursor?: Prisma.mcq_questionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mcq_questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mcq_questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mcq_questions.
     */
    distinct?: Prisma.Mcq_questionsScalarFieldEnum | Prisma.Mcq_questionsScalarFieldEnum[];
};
/**
 * mcq_questions findMany
 */
export type mcq_questionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * Filter, which mcq_questions to fetch.
     */
    where?: Prisma.mcq_questionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mcq_questions to fetch.
     */
    orderBy?: Prisma.mcq_questionsOrderByWithRelationInput | Prisma.mcq_questionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing mcq_questions.
     */
    cursor?: Prisma.mcq_questionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mcq_questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mcq_questions.
     */
    skip?: number;
    distinct?: Prisma.Mcq_questionsScalarFieldEnum | Prisma.Mcq_questionsScalarFieldEnum[];
};
/**
 * mcq_questions create
 */
export type mcq_questionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * The data needed to create a mcq_questions.
     */
    data: Prisma.XOR<Prisma.mcq_questionsCreateInput, Prisma.mcq_questionsUncheckedCreateInput>;
};
/**
 * mcq_questions createMany
 */
export type mcq_questionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many mcq_questions.
     */
    data: Prisma.mcq_questionsCreateManyInput | Prisma.mcq_questionsCreateManyInput[];
};
/**
 * mcq_questions update
 */
export type mcq_questionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * The data needed to update a mcq_questions.
     */
    data: Prisma.XOR<Prisma.mcq_questionsUpdateInput, Prisma.mcq_questionsUncheckedUpdateInput>;
    /**
     * Choose, which mcq_questions to update.
     */
    where: Prisma.mcq_questionsWhereUniqueInput;
};
/**
 * mcq_questions updateMany
 */
export type mcq_questionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update mcq_questions.
     */
    data: Prisma.XOR<Prisma.mcq_questionsUpdateManyMutationInput, Prisma.mcq_questionsUncheckedUpdateManyInput>;
    /**
     * Filter which mcq_questions to update
     */
    where?: Prisma.mcq_questionsWhereInput;
    /**
     * Limit how many mcq_questions to update.
     */
    limit?: number;
};
/**
 * mcq_questions upsert
 */
export type mcq_questionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * The filter to search for the mcq_questions to update in case it exists.
     */
    where: Prisma.mcq_questionsWhereUniqueInput;
    /**
     * In case the mcq_questions found by the `where` argument doesn't exist, create a new mcq_questions with this data.
     */
    create: Prisma.XOR<Prisma.mcq_questionsCreateInput, Prisma.mcq_questionsUncheckedCreateInput>;
    /**
     * In case the mcq_questions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.mcq_questionsUpdateInput, Prisma.mcq_questionsUncheckedUpdateInput>;
};
/**
 * mcq_questions delete
 */
export type mcq_questionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
    /**
     * Filter which mcq_questions to delete.
     */
    where: Prisma.mcq_questionsWhereUniqueInput;
};
/**
 * mcq_questions deleteMany
 */
export type mcq_questionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which mcq_questions to delete
     */
    where?: Prisma.mcq_questionsWhereInput;
    /**
     * Limit how many mcq_questions to delete.
     */
    limit?: number;
};
/**
 * mcq_questions findRaw
 */
export type mcq_questionsFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * mcq_questions aggregateRaw
 */
export type mcq_questionsAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * mcq_questions without action
 */
export type mcq_questionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mcq_questions
     */
    select?: Prisma.mcq_questionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mcq_questions
     */
    omit?: Prisma.mcq_questionsOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=mcq_questions.d.ts.map