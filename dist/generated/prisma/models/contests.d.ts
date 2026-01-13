import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model contests
 *
 */
export type contestsModel = runtime.Types.Result.DefaultSelection<Prisma.$contestsPayload>;
export type AggregateContests = {
    _count: ContestsCountAggregateOutputType | null;
    _min: ContestsMinAggregateOutputType | null;
    _max: ContestsMaxAggregateOutputType | null;
};
export type ContestsMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    creator_id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContestsMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    creator_id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContestsCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    creator_id: number;
    start_time: number;
    end_time: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ContestsMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creator_id?: true;
    start_time?: true;
    end_time?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContestsMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creator_id?: true;
    start_time?: true;
    end_time?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContestsCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creator_id?: true;
    start_time?: true;
    end_time?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ContestsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which contests to aggregate.
     */
    where?: Prisma.contestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contests to fetch.
     */
    orderBy?: Prisma.contestsOrderByWithRelationInput | Prisma.contestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.contestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contests
    **/
    _count?: true | ContestsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContestsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContestsMaxAggregateInputType;
};
export type GetContestsAggregateType<T extends ContestsAggregateArgs> = {
    [P in keyof T & keyof AggregateContests]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContests[P]> : Prisma.GetScalarType<T[P], AggregateContests[P]>;
};
export type contestsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contestsWhereInput;
    orderBy?: Prisma.contestsOrderByWithAggregationInput | Prisma.contestsOrderByWithAggregationInput[];
    by: Prisma.ContestsScalarFieldEnum[] | Prisma.ContestsScalarFieldEnum;
    having?: Prisma.contestsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContestsCountAggregateInputType | true;
    _min?: ContestsMinAggregateInputType;
    _max?: ContestsMaxAggregateInputType;
};
export type ContestsGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    creator_id: string;
    start_time: Date;
    end_time: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: ContestsCountAggregateOutputType | null;
    _min: ContestsMinAggregateOutputType | null;
    _max: ContestsMaxAggregateOutputType | null;
};
type GetContestsGroupByPayload<T extends contestsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContestsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContestsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContestsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContestsGroupByOutputType[P]>;
}>>;
export type contestsWhereInput = {
    AND?: Prisma.contestsWhereInput | Prisma.contestsWhereInput[];
    OR?: Prisma.contestsWhereInput[];
    NOT?: Prisma.contestsWhereInput | Prisma.contestsWhereInput[];
    id?: Prisma.StringFilter<"contests"> | string;
    title?: Prisma.StringFilter<"contests"> | string;
    description?: Prisma.StringFilter<"contests"> | string;
    creator_id?: Prisma.StringFilter<"contests"> | string;
    start_time?: Prisma.DateTimeFilter<"contests"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"contests"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"contests"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"contests"> | Date | string;
};
export type contestsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creator_id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.contestsWhereInput | Prisma.contestsWhereInput[];
    OR?: Prisma.contestsWhereInput[];
    NOT?: Prisma.contestsWhereInput | Prisma.contestsWhereInput[];
    title?: Prisma.StringFilter<"contests"> | string;
    description?: Prisma.StringFilter<"contests"> | string;
    creator_id?: Prisma.StringFilter<"contests"> | string;
    start_time?: Prisma.DateTimeFilter<"contests"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"contests"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"contests"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"contests"> | Date | string;
}, "id">;
export type contestsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creator_id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.contestsCountOrderByAggregateInput;
    _max?: Prisma.contestsMaxOrderByAggregateInput;
    _min?: Prisma.contestsMinOrderByAggregateInput;
};
export type contestsScalarWhereWithAggregatesInput = {
    AND?: Prisma.contestsScalarWhereWithAggregatesInput | Prisma.contestsScalarWhereWithAggregatesInput[];
    OR?: Prisma.contestsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contestsScalarWhereWithAggregatesInput | Prisma.contestsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"contests"> | string;
    title?: Prisma.StringWithAggregatesFilter<"contests"> | string;
    description?: Prisma.StringWithAggregatesFilter<"contests"> | string;
    creator_id?: Prisma.StringWithAggregatesFilter<"contests"> | string;
    start_time?: Prisma.DateTimeWithAggregatesFilter<"contests"> | Date | string;
    end_time?: Prisma.DateTimeWithAggregatesFilter<"contests"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"contests"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"contests"> | Date | string;
};
export type contestsCreateInput = {
    id?: string;
    title: string;
    description: string;
    creator_id: string;
    start_time: Date | string;
    end_time: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type contestsUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    creator_id: string;
    start_time: Date | string;
    end_time: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type contestsUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creator_id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type contestsUncheckedUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creator_id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type contestsCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    creator_id: string;
    start_time: Date | string;
    end_time: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type contestsUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creator_id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type contestsUncheckedUpdateManyInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creator_id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type contestsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creator_id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contestsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creator_id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contestsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creator_id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contestsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creator_id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["contests"]>;
export type contestsSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creator_id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type contestsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "creator_id" | "start_time" | "end_time" | "createdAt" | "updatedAt", ExtArgs["result"]["contests"]>;
export type $contestsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contests";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        creator_id: string;
        start_time: Date;
        end_time: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["contests"]>;
    composites: {};
};
export type contestsGetPayload<S extends boolean | null | undefined | contestsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contestsPayload, S>;
export type contestsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContestsCountAggregateInputType | true;
};
export interface contestsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contests'];
        meta: {
            name: 'contests';
        };
    };
    /**
     * Find zero or one Contests that matches the filter.
     * @param {contestsFindUniqueArgs} args - Arguments to find a Contests
     * @example
     * // Get one Contests
     * const contests = await prisma.contests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contestsFindUniqueArgs>(args: Prisma.SelectSubset<T, contestsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contestsClient<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Contests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contestsFindUniqueOrThrowArgs} args - Arguments to find a Contests
     * @example
     * // Get one Contests
     * const contests = await prisma.contests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contestsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contestsClient<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contestsFindFirstArgs} args - Arguments to find a Contests
     * @example
     * // Get one Contests
     * const contests = await prisma.contests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contestsFindFirstArgs>(args?: Prisma.SelectSubset<T, contestsFindFirstArgs<ExtArgs>>): Prisma.Prisma__contestsClient<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contestsFindFirstOrThrowArgs} args - Arguments to find a Contests
     * @example
     * // Get one Contests
     * const contests = await prisma.contests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contestsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contestsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contestsClient<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Contests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contests
     * const contests = await prisma.contests.findMany()
     *
     * // Get first 10 Contests
     * const contests = await prisma.contests.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contestsWithIdOnly = await prisma.contests.findMany({ select: { id: true } })
     *
     */
    findMany<T extends contestsFindManyArgs>(args?: Prisma.SelectSubset<T, contestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Contests.
     * @param {contestsCreateArgs} args - Arguments to create a Contests.
     * @example
     * // Create one Contests
     * const Contests = await prisma.contests.create({
     *   data: {
     *     // ... data to create a Contests
     *   }
     * })
     *
     */
    create<T extends contestsCreateArgs>(args: Prisma.SelectSubset<T, contestsCreateArgs<ExtArgs>>): Prisma.Prisma__contestsClient<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Contests.
     * @param {contestsCreateManyArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contests = await prisma.contests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends contestsCreateManyArgs>(args?: Prisma.SelectSubset<T, contestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Contests.
     * @param {contestsDeleteArgs} args - Arguments to delete one Contests.
     * @example
     * // Delete one Contests
     * const Contests = await prisma.contests.delete({
     *   where: {
     *     // ... filter to delete one Contests
     *   }
     * })
     *
     */
    delete<T extends contestsDeleteArgs>(args: Prisma.SelectSubset<T, contestsDeleteArgs<ExtArgs>>): Prisma.Prisma__contestsClient<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Contests.
     * @param {contestsUpdateArgs} args - Arguments to update one Contests.
     * @example
     * // Update one Contests
     * const contests = await prisma.contests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends contestsUpdateArgs>(args: Prisma.SelectSubset<T, contestsUpdateArgs<ExtArgs>>): Prisma.Prisma__contestsClient<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Contests.
     * @param {contestsDeleteManyArgs} args - Arguments to filter Contests to delete.
     * @example
     * // Delete a few Contests
     * const { count } = await prisma.contests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends contestsDeleteManyArgs>(args?: Prisma.SelectSubset<T, contestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contests
     * const contests = await prisma.contests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends contestsUpdateManyArgs>(args: Prisma.SelectSubset<T, contestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Contests.
     * @param {contestsUpsertArgs} args - Arguments to update or create a Contests.
     * @example
     * // Update or create a Contests
     * const contests = await prisma.contests.upsert({
     *   create: {
     *     // ... data to create a Contests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contests we want to update
     *   }
     * })
     */
    upsert<T extends contestsUpsertArgs>(args: Prisma.SelectSubset<T, contestsUpsertArgs<ExtArgs>>): Prisma.Prisma__contestsClient<runtime.Types.Result.GetResult<Prisma.$contestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Contests that matches the filter.
     * @param {contestsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contests = await prisma.contests.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.contestsFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Contests.
     * @param {contestsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contests = await prisma.contests.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.contestsAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contestsCountArgs} args - Arguments to filter Contests to count.
     * @example
     * // Count the number of Contests
     * const count = await prisma.contests.count({
     *   where: {
     *     // ... the filter for the Contests we want to count
     *   }
     * })
    **/
    count<T extends contestsCountArgs>(args?: Prisma.Subset<T, contestsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContestsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContestsAggregateArgs>(args: Prisma.Subset<T, ContestsAggregateArgs>): Prisma.PrismaPromise<GetContestsAggregateType<T>>;
    /**
     * Group by Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contestsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends contestsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contestsGroupByArgs['orderBy'];
    } : {
        orderBy?: contestsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the contests model
     */
    readonly fields: contestsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for contests.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__contestsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the contests model
 */
export interface contestsFieldRefs {
    readonly id: Prisma.FieldRef<"contests", 'String'>;
    readonly title: Prisma.FieldRef<"contests", 'String'>;
    readonly description: Prisma.FieldRef<"contests", 'String'>;
    readonly creator_id: Prisma.FieldRef<"contests", 'String'>;
    readonly start_time: Prisma.FieldRef<"contests", 'DateTime'>;
    readonly end_time: Prisma.FieldRef<"contests", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"contests", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"contests", 'DateTime'>;
}
/**
 * contests findUnique
 */
export type contestsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * Filter, which contests to fetch.
     */
    where: Prisma.contestsWhereUniqueInput;
};
/**
 * contests findUniqueOrThrow
 */
export type contestsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * Filter, which contests to fetch.
     */
    where: Prisma.contestsWhereUniqueInput;
};
/**
 * contests findFirst
 */
export type contestsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * Filter, which contests to fetch.
     */
    where?: Prisma.contestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contests to fetch.
     */
    orderBy?: Prisma.contestsOrderByWithRelationInput | Prisma.contestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contests.
     */
    cursor?: Prisma.contestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contests.
     */
    distinct?: Prisma.ContestsScalarFieldEnum | Prisma.ContestsScalarFieldEnum[];
};
/**
 * contests findFirstOrThrow
 */
export type contestsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * Filter, which contests to fetch.
     */
    where?: Prisma.contestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contests to fetch.
     */
    orderBy?: Prisma.contestsOrderByWithRelationInput | Prisma.contestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contests.
     */
    cursor?: Prisma.contestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contests.
     */
    distinct?: Prisma.ContestsScalarFieldEnum | Prisma.ContestsScalarFieldEnum[];
};
/**
 * contests findMany
 */
export type contestsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * Filter, which contests to fetch.
     */
    where?: Prisma.contestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contests to fetch.
     */
    orderBy?: Prisma.contestsOrderByWithRelationInput | Prisma.contestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contests.
     */
    cursor?: Prisma.contestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contests.
     */
    skip?: number;
    distinct?: Prisma.ContestsScalarFieldEnum | Prisma.ContestsScalarFieldEnum[];
};
/**
 * contests create
 */
export type contestsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * The data needed to create a contests.
     */
    data: Prisma.XOR<Prisma.contestsCreateInput, Prisma.contestsUncheckedCreateInput>;
};
/**
 * contests createMany
 */
export type contestsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many contests.
     */
    data: Prisma.contestsCreateManyInput | Prisma.contestsCreateManyInput[];
};
/**
 * contests update
 */
export type contestsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * The data needed to update a contests.
     */
    data: Prisma.XOR<Prisma.contestsUpdateInput, Prisma.contestsUncheckedUpdateInput>;
    /**
     * Choose, which contests to update.
     */
    where: Prisma.contestsWhereUniqueInput;
};
/**
 * contests updateMany
 */
export type contestsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update contests.
     */
    data: Prisma.XOR<Prisma.contestsUpdateManyMutationInput, Prisma.contestsUncheckedUpdateManyInput>;
    /**
     * Filter which contests to update
     */
    where?: Prisma.contestsWhereInput;
    /**
     * Limit how many contests to update.
     */
    limit?: number;
};
/**
 * contests upsert
 */
export type contestsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * The filter to search for the contests to update in case it exists.
     */
    where: Prisma.contestsWhereUniqueInput;
    /**
     * In case the contests found by the `where` argument doesn't exist, create a new contests with this data.
     */
    create: Prisma.XOR<Prisma.contestsCreateInput, Prisma.contestsUncheckedCreateInput>;
    /**
     * In case the contests was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.contestsUpdateInput, Prisma.contestsUncheckedUpdateInput>;
};
/**
 * contests delete
 */
export type contestsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
    /**
     * Filter which contests to delete.
     */
    where: Prisma.contestsWhereUniqueInput;
};
/**
 * contests deleteMany
 */
export type contestsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which contests to delete
     */
    where?: Prisma.contestsWhereInput;
    /**
     * Limit how many contests to delete.
     */
    limit?: number;
};
/**
 * contests findRaw
 */
export type contestsFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * contests aggregateRaw
 */
export type contestsAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * contests without action
 */
export type contestsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contests
     */
    select?: Prisma.contestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contests
     */
    omit?: Prisma.contestsOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=contests.d.ts.map