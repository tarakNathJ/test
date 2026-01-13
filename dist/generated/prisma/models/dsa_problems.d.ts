import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model dsa_problems
 *
 */
export type dsa_problemsModel = runtime.Types.Result.DefaultSelection<Prisma.$dsa_problemsPayload>;
export type AggregateDsa_problems = {
    _count: Dsa_problemsCountAggregateOutputType | null;
    _avg: Dsa_problemsAvgAggregateOutputType | null;
    _sum: Dsa_problemsSumAggregateOutputType | null;
    _min: Dsa_problemsMinAggregateOutputType | null;
    _max: Dsa_problemsMaxAggregateOutputType | null;
};
export type Dsa_problemsAvgAggregateOutputType = {
    points: number | null;
    time_limit: number | null;
    memory_limit: number | null;
};
export type Dsa_problemsSumAggregateOutputType = {
    points: number | null;
    time_limit: number | null;
    memory_limit: number | null;
};
export type Dsa_problemsMinAggregateOutputType = {
    id: string | null;
    contest_id: string | null;
    title: string | null;
    description: string | null;
    points: number | null;
    time_limit: number | null;
    memory_limit: number | null;
    created_at: Date | null;
};
export type Dsa_problemsMaxAggregateOutputType = {
    id: string | null;
    contest_id: string | null;
    title: string | null;
    description: string | null;
    points: number | null;
    time_limit: number | null;
    memory_limit: number | null;
    created_at: Date | null;
};
export type Dsa_problemsCountAggregateOutputType = {
    id: number;
    contest_id: number;
    title: number;
    description: number;
    tags: number;
    points: number;
    time_limit: number;
    memory_limit: number;
    created_at: number;
    _all: number;
};
export type Dsa_problemsAvgAggregateInputType = {
    points?: true;
    time_limit?: true;
    memory_limit?: true;
};
export type Dsa_problemsSumAggregateInputType = {
    points?: true;
    time_limit?: true;
    memory_limit?: true;
};
export type Dsa_problemsMinAggregateInputType = {
    id?: true;
    contest_id?: true;
    title?: true;
    description?: true;
    points?: true;
    time_limit?: true;
    memory_limit?: true;
    created_at?: true;
};
export type Dsa_problemsMaxAggregateInputType = {
    id?: true;
    contest_id?: true;
    title?: true;
    description?: true;
    points?: true;
    time_limit?: true;
    memory_limit?: true;
    created_at?: true;
};
export type Dsa_problemsCountAggregateInputType = {
    id?: true;
    contest_id?: true;
    title?: true;
    description?: true;
    tags?: true;
    points?: true;
    time_limit?: true;
    memory_limit?: true;
    created_at?: true;
    _all?: true;
};
export type Dsa_problemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which dsa_problems to aggregate.
     */
    where?: Prisma.dsa_problemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dsa_problems to fetch.
     */
    orderBy?: Prisma.dsa_problemsOrderByWithRelationInput | Prisma.dsa_problemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.dsa_problemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dsa_problems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dsa_problems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned dsa_problems
    **/
    _count?: true | Dsa_problemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Dsa_problemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Dsa_problemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Dsa_problemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Dsa_problemsMaxAggregateInputType;
};
export type GetDsa_problemsAggregateType<T extends Dsa_problemsAggregateArgs> = {
    [P in keyof T & keyof AggregateDsa_problems]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDsa_problems[P]> : Prisma.GetScalarType<T[P], AggregateDsa_problems[P]>;
};
export type dsa_problemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dsa_problemsWhereInput;
    orderBy?: Prisma.dsa_problemsOrderByWithAggregationInput | Prisma.dsa_problemsOrderByWithAggregationInput[];
    by: Prisma.Dsa_problemsScalarFieldEnum[] | Prisma.Dsa_problemsScalarFieldEnum;
    having?: Prisma.dsa_problemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Dsa_problemsCountAggregateInputType | true;
    _avg?: Dsa_problemsAvgAggregateInputType;
    _sum?: Dsa_problemsSumAggregateInputType;
    _min?: Dsa_problemsMinAggregateInputType;
    _max?: Dsa_problemsMaxAggregateInputType;
};
export type Dsa_problemsGroupByOutputType = {
    id: string;
    contest_id: string;
    title: string;
    description: string;
    tags: runtime.JsonValue;
    points: number;
    time_limit: number;
    memory_limit: number;
    created_at: Date;
    _count: Dsa_problemsCountAggregateOutputType | null;
    _avg: Dsa_problemsAvgAggregateOutputType | null;
    _sum: Dsa_problemsSumAggregateOutputType | null;
    _min: Dsa_problemsMinAggregateOutputType | null;
    _max: Dsa_problemsMaxAggregateOutputType | null;
};
type GetDsa_problemsGroupByPayload<T extends dsa_problemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Dsa_problemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Dsa_problemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Dsa_problemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Dsa_problemsGroupByOutputType[P]>;
}>>;
export type dsa_problemsWhereInput = {
    AND?: Prisma.dsa_problemsWhereInput | Prisma.dsa_problemsWhereInput[];
    OR?: Prisma.dsa_problemsWhereInput[];
    NOT?: Prisma.dsa_problemsWhereInput | Prisma.dsa_problemsWhereInput[];
    id?: Prisma.StringFilter<"dsa_problems"> | string;
    contest_id?: Prisma.StringFilter<"dsa_problems"> | string;
    title?: Prisma.StringFilter<"dsa_problems"> | string;
    description?: Prisma.StringFilter<"dsa_problems"> | string;
    tags?: Prisma.JsonFilter<"dsa_problems">;
    points?: Prisma.IntFilter<"dsa_problems"> | number;
    time_limit?: Prisma.IntFilter<"dsa_problems"> | number;
    memory_limit?: Prisma.IntFilter<"dsa_problems"> | number;
    created_at?: Prisma.DateTimeFilter<"dsa_problems"> | Date | string;
};
export type dsa_problemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    time_limit?: Prisma.SortOrder;
    memory_limit?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dsa_problemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.dsa_problemsWhereInput | Prisma.dsa_problemsWhereInput[];
    OR?: Prisma.dsa_problemsWhereInput[];
    NOT?: Prisma.dsa_problemsWhereInput | Prisma.dsa_problemsWhereInput[];
    contest_id?: Prisma.StringFilter<"dsa_problems"> | string;
    title?: Prisma.StringFilter<"dsa_problems"> | string;
    description?: Prisma.StringFilter<"dsa_problems"> | string;
    tags?: Prisma.JsonFilter<"dsa_problems">;
    points?: Prisma.IntFilter<"dsa_problems"> | number;
    time_limit?: Prisma.IntFilter<"dsa_problems"> | number;
    memory_limit?: Prisma.IntFilter<"dsa_problems"> | number;
    created_at?: Prisma.DateTimeFilter<"dsa_problems"> | Date | string;
}, "id">;
export type dsa_problemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    time_limit?: Prisma.SortOrder;
    memory_limit?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.dsa_problemsCountOrderByAggregateInput;
    _avg?: Prisma.dsa_problemsAvgOrderByAggregateInput;
    _max?: Prisma.dsa_problemsMaxOrderByAggregateInput;
    _min?: Prisma.dsa_problemsMinOrderByAggregateInput;
    _sum?: Prisma.dsa_problemsSumOrderByAggregateInput;
};
export type dsa_problemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.dsa_problemsScalarWhereWithAggregatesInput | Prisma.dsa_problemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.dsa_problemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.dsa_problemsScalarWhereWithAggregatesInput | Prisma.dsa_problemsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"dsa_problems"> | string;
    contest_id?: Prisma.StringWithAggregatesFilter<"dsa_problems"> | string;
    title?: Prisma.StringWithAggregatesFilter<"dsa_problems"> | string;
    description?: Prisma.StringWithAggregatesFilter<"dsa_problems"> | string;
    tags?: Prisma.JsonWithAggregatesFilter<"dsa_problems">;
    points?: Prisma.IntWithAggregatesFilter<"dsa_problems"> | number;
    time_limit?: Prisma.IntWithAggregatesFilter<"dsa_problems"> | number;
    memory_limit?: Prisma.IntWithAggregatesFilter<"dsa_problems"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"dsa_problems"> | Date | string;
};
export type dsa_problemsCreateInput = {
    id?: string;
    contest_id: string;
    title: string;
    description: string;
    tags: runtime.InputJsonValue;
    points?: number;
    time_limit?: number;
    memory_limit?: number;
    created_at?: Date | string;
};
export type dsa_problemsUncheckedCreateInput = {
    id?: string;
    contest_id: string;
    title: string;
    description: string;
    tags: runtime.InputJsonValue;
    points?: number;
    time_limit?: number;
    memory_limit?: number;
    created_at?: Date | string;
};
export type dsa_problemsUpdateInput = {
    contest_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: runtime.InputJsonValue | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    time_limit?: Prisma.IntFieldUpdateOperationsInput | number;
    memory_limit?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsa_problemsUncheckedUpdateInput = {
    contest_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: runtime.InputJsonValue | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    time_limit?: Prisma.IntFieldUpdateOperationsInput | number;
    memory_limit?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsa_problemsCreateManyInput = {
    id?: string;
    contest_id: string;
    title: string;
    description: string;
    tags: runtime.InputJsonValue;
    points?: number;
    time_limit?: number;
    memory_limit?: number;
    created_at?: Date | string;
};
export type dsa_problemsUpdateManyMutationInput = {
    contest_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: runtime.InputJsonValue | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    time_limit?: Prisma.IntFieldUpdateOperationsInput | number;
    memory_limit?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsa_problemsUncheckedUpdateManyInput = {
    contest_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: runtime.InputJsonValue | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    time_limit?: Prisma.IntFieldUpdateOperationsInput | number;
    memory_limit?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsa_problemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    time_limit?: Prisma.SortOrder;
    memory_limit?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dsa_problemsAvgOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    time_limit?: Prisma.SortOrder;
    memory_limit?: Prisma.SortOrder;
};
export type dsa_problemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    time_limit?: Prisma.SortOrder;
    memory_limit?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dsa_problemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contest_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    time_limit?: Prisma.SortOrder;
    memory_limit?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dsa_problemsSumOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    time_limit?: Prisma.SortOrder;
    memory_limit?: Prisma.SortOrder;
};
export type dsa_problemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contest_id?: boolean;
    title?: boolean;
    description?: boolean;
    tags?: boolean;
    points?: boolean;
    time_limit?: boolean;
    memory_limit?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["dsa_problems"]>;
export type dsa_problemsSelectScalar = {
    id?: boolean;
    contest_id?: boolean;
    title?: boolean;
    description?: boolean;
    tags?: boolean;
    points?: boolean;
    time_limit?: boolean;
    memory_limit?: boolean;
    created_at?: boolean;
};
export type dsa_problemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contest_id" | "title" | "description" | "tags" | "points" | "time_limit" | "memory_limit" | "created_at", ExtArgs["result"]["dsa_problems"]>;
export type $dsa_problemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "dsa_problems";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contest_id: string;
        title: string;
        description: string;
        tags: runtime.JsonValue;
        points: number;
        time_limit: number;
        memory_limit: number;
        created_at: Date;
    }, ExtArgs["result"]["dsa_problems"]>;
    composites: {};
};
export type dsa_problemsGetPayload<S extends boolean | null | undefined | dsa_problemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload, S>;
export type dsa_problemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<dsa_problemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Dsa_problemsCountAggregateInputType | true;
};
export interface dsa_problemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['dsa_problems'];
        meta: {
            name: 'dsa_problems';
        };
    };
    /**
     * Find zero or one Dsa_problems that matches the filter.
     * @param {dsa_problemsFindUniqueArgs} args - Arguments to find a Dsa_problems
     * @example
     * // Get one Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dsa_problemsFindUniqueArgs>(args: Prisma.SelectSubset<T, dsa_problemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__dsa_problemsClient<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Dsa_problems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dsa_problemsFindUniqueOrThrowArgs} args - Arguments to find a Dsa_problems
     * @example
     * // Get one Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dsa_problemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, dsa_problemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__dsa_problemsClient<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Dsa_problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_problemsFindFirstArgs} args - Arguments to find a Dsa_problems
     * @example
     * // Get one Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dsa_problemsFindFirstArgs>(args?: Prisma.SelectSubset<T, dsa_problemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__dsa_problemsClient<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Dsa_problems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_problemsFindFirstOrThrowArgs} args - Arguments to find a Dsa_problems
     * @example
     * // Get one Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dsa_problemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, dsa_problemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__dsa_problemsClient<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Dsa_problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_problemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.findMany()
     *
     * // Get first 10 Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dsa_problemsWithIdOnly = await prisma.dsa_problems.findMany({ select: { id: true } })
     *
     */
    findMany<T extends dsa_problemsFindManyArgs>(args?: Prisma.SelectSubset<T, dsa_problemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Dsa_problems.
     * @param {dsa_problemsCreateArgs} args - Arguments to create a Dsa_problems.
     * @example
     * // Create one Dsa_problems
     * const Dsa_problems = await prisma.dsa_problems.create({
     *   data: {
     *     // ... data to create a Dsa_problems
     *   }
     * })
     *
     */
    create<T extends dsa_problemsCreateArgs>(args: Prisma.SelectSubset<T, dsa_problemsCreateArgs<ExtArgs>>): Prisma.Prisma__dsa_problemsClient<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Dsa_problems.
     * @param {dsa_problemsCreateManyArgs} args - Arguments to create many Dsa_problems.
     * @example
     * // Create many Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends dsa_problemsCreateManyArgs>(args?: Prisma.SelectSubset<T, dsa_problemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Dsa_problems.
     * @param {dsa_problemsDeleteArgs} args - Arguments to delete one Dsa_problems.
     * @example
     * // Delete one Dsa_problems
     * const Dsa_problems = await prisma.dsa_problems.delete({
     *   where: {
     *     // ... filter to delete one Dsa_problems
     *   }
     * })
     *
     */
    delete<T extends dsa_problemsDeleteArgs>(args: Prisma.SelectSubset<T, dsa_problemsDeleteArgs<ExtArgs>>): Prisma.Prisma__dsa_problemsClient<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Dsa_problems.
     * @param {dsa_problemsUpdateArgs} args - Arguments to update one Dsa_problems.
     * @example
     * // Update one Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends dsa_problemsUpdateArgs>(args: Prisma.SelectSubset<T, dsa_problemsUpdateArgs<ExtArgs>>): Prisma.Prisma__dsa_problemsClient<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Dsa_problems.
     * @param {dsa_problemsDeleteManyArgs} args - Arguments to filter Dsa_problems to delete.
     * @example
     * // Delete a few Dsa_problems
     * const { count } = await prisma.dsa_problems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends dsa_problemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, dsa_problemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Dsa_problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_problemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends dsa_problemsUpdateManyArgs>(args: Prisma.SelectSubset<T, dsa_problemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Dsa_problems.
     * @param {dsa_problemsUpsertArgs} args - Arguments to update or create a Dsa_problems.
     * @example
     * // Update or create a Dsa_problems
     * const dsa_problems = await prisma.dsa_problems.upsert({
     *   create: {
     *     // ... data to create a Dsa_problems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dsa_problems we want to update
     *   }
     * })
     */
    upsert<T extends dsa_problemsUpsertArgs>(args: Prisma.SelectSubset<T, dsa_problemsUpsertArgs<ExtArgs>>): Prisma.Prisma__dsa_problemsClient<runtime.Types.Result.GetResult<Prisma.$dsa_problemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Dsa_problems that matches the filter.
     * @param {dsa_problemsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dsa_problems = await prisma.dsa_problems.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.dsa_problemsFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Dsa_problems.
     * @param {dsa_problemsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dsa_problems = await prisma.dsa_problems.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.dsa_problemsAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Dsa_problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_problemsCountArgs} args - Arguments to filter Dsa_problems to count.
     * @example
     * // Count the number of Dsa_problems
     * const count = await prisma.dsa_problems.count({
     *   where: {
     *     // ... the filter for the Dsa_problems we want to count
     *   }
     * })
    **/
    count<T extends dsa_problemsCountArgs>(args?: Prisma.Subset<T, dsa_problemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Dsa_problemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Dsa_problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dsa_problemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dsa_problemsAggregateArgs>(args: Prisma.Subset<T, Dsa_problemsAggregateArgs>): Prisma.PrismaPromise<GetDsa_problemsAggregateType<T>>;
    /**
     * Group by Dsa_problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dsa_problemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends dsa_problemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: dsa_problemsGroupByArgs['orderBy'];
    } : {
        orderBy?: dsa_problemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, dsa_problemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDsa_problemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the dsa_problems model
     */
    readonly fields: dsa_problemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for dsa_problems.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__dsa_problemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the dsa_problems model
 */
export interface dsa_problemsFieldRefs {
    readonly id: Prisma.FieldRef<"dsa_problems", 'String'>;
    readonly contest_id: Prisma.FieldRef<"dsa_problems", 'String'>;
    readonly title: Prisma.FieldRef<"dsa_problems", 'String'>;
    readonly description: Prisma.FieldRef<"dsa_problems", 'String'>;
    readonly tags: Prisma.FieldRef<"dsa_problems", 'Json'>;
    readonly points: Prisma.FieldRef<"dsa_problems", 'Int'>;
    readonly time_limit: Prisma.FieldRef<"dsa_problems", 'Int'>;
    readonly memory_limit: Prisma.FieldRef<"dsa_problems", 'Int'>;
    readonly created_at: Prisma.FieldRef<"dsa_problems", 'DateTime'>;
}
/**
 * dsa_problems findUnique
 */
export type dsa_problemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_problems to fetch.
     */
    where: Prisma.dsa_problemsWhereUniqueInput;
};
/**
 * dsa_problems findUniqueOrThrow
 */
export type dsa_problemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_problems to fetch.
     */
    where: Prisma.dsa_problemsWhereUniqueInput;
};
/**
 * dsa_problems findFirst
 */
export type dsa_problemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_problems to fetch.
     */
    where?: Prisma.dsa_problemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dsa_problems to fetch.
     */
    orderBy?: Prisma.dsa_problemsOrderByWithRelationInput | Prisma.dsa_problemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for dsa_problems.
     */
    cursor?: Prisma.dsa_problemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dsa_problems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dsa_problems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of dsa_problems.
     */
    distinct?: Prisma.Dsa_problemsScalarFieldEnum | Prisma.Dsa_problemsScalarFieldEnum[];
};
/**
 * dsa_problems findFirstOrThrow
 */
export type dsa_problemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_problems to fetch.
     */
    where?: Prisma.dsa_problemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dsa_problems to fetch.
     */
    orderBy?: Prisma.dsa_problemsOrderByWithRelationInput | Prisma.dsa_problemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for dsa_problems.
     */
    cursor?: Prisma.dsa_problemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dsa_problems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dsa_problems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of dsa_problems.
     */
    distinct?: Prisma.Dsa_problemsScalarFieldEnum | Prisma.Dsa_problemsScalarFieldEnum[];
};
/**
 * dsa_problems findMany
 */
export type dsa_problemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * Filter, which dsa_problems to fetch.
     */
    where?: Prisma.dsa_problemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dsa_problems to fetch.
     */
    orderBy?: Prisma.dsa_problemsOrderByWithRelationInput | Prisma.dsa_problemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing dsa_problems.
     */
    cursor?: Prisma.dsa_problemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dsa_problems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dsa_problems.
     */
    skip?: number;
    distinct?: Prisma.Dsa_problemsScalarFieldEnum | Prisma.Dsa_problemsScalarFieldEnum[];
};
/**
 * dsa_problems create
 */
export type dsa_problemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * The data needed to create a dsa_problems.
     */
    data: Prisma.XOR<Prisma.dsa_problemsCreateInput, Prisma.dsa_problemsUncheckedCreateInput>;
};
/**
 * dsa_problems createMany
 */
export type dsa_problemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many dsa_problems.
     */
    data: Prisma.dsa_problemsCreateManyInput | Prisma.dsa_problemsCreateManyInput[];
};
/**
 * dsa_problems update
 */
export type dsa_problemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * The data needed to update a dsa_problems.
     */
    data: Prisma.XOR<Prisma.dsa_problemsUpdateInput, Prisma.dsa_problemsUncheckedUpdateInput>;
    /**
     * Choose, which dsa_problems to update.
     */
    where: Prisma.dsa_problemsWhereUniqueInput;
};
/**
 * dsa_problems updateMany
 */
export type dsa_problemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update dsa_problems.
     */
    data: Prisma.XOR<Prisma.dsa_problemsUpdateManyMutationInput, Prisma.dsa_problemsUncheckedUpdateManyInput>;
    /**
     * Filter which dsa_problems to update
     */
    where?: Prisma.dsa_problemsWhereInput;
    /**
     * Limit how many dsa_problems to update.
     */
    limit?: number;
};
/**
 * dsa_problems upsert
 */
export type dsa_problemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * The filter to search for the dsa_problems to update in case it exists.
     */
    where: Prisma.dsa_problemsWhereUniqueInput;
    /**
     * In case the dsa_problems found by the `where` argument doesn't exist, create a new dsa_problems with this data.
     */
    create: Prisma.XOR<Prisma.dsa_problemsCreateInput, Prisma.dsa_problemsUncheckedCreateInput>;
    /**
     * In case the dsa_problems was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.dsa_problemsUpdateInput, Prisma.dsa_problemsUncheckedUpdateInput>;
};
/**
 * dsa_problems delete
 */
export type dsa_problemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
    /**
     * Filter which dsa_problems to delete.
     */
    where: Prisma.dsa_problemsWhereUniqueInput;
};
/**
 * dsa_problems deleteMany
 */
export type dsa_problemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which dsa_problems to delete
     */
    where?: Prisma.dsa_problemsWhereInput;
    /**
     * Limit how many dsa_problems to delete.
     */
    limit?: number;
};
/**
 * dsa_problems findRaw
 */
export type dsa_problemsFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * dsa_problems aggregateRaw
 */
export type dsa_problemsAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * dsa_problems without action
 */
export type dsa_problemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dsa_problems
     */
    select?: Prisma.dsa_problemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dsa_problems
     */
    omit?: Prisma.dsa_problemsOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=dsa_problems.d.ts.map