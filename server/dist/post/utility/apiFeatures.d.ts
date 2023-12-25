import { Query } from 'mongoose';
interface QueryParams {
    keyword?: string;
    author?: string;
    category?: string;
    tags?: string[];
    page?: string;
    limit?: string;
    [key: string]: any;
    newest?: boolean;
}
declare class ApiFeatures<ResultType, DocType, THelpers = {}> {
    private readonly queryStr;
    query: Query<DocType[], DocType, THelpers>;
    constructor(query: Query<DocType[], DocType, THelpers>, queryStr: QueryParams);
    search(): this;
    filter(): this;
    pagination(resultPerPage: number): this;
    approved(approval: boolean): this;
    sortByNewest(): this;
}
export default ApiFeatures;
