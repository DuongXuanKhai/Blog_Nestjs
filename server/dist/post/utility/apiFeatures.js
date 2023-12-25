"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiFeatures {
    constructor(query, queryStr) {
        this.queryStr = queryStr;
        this.query = query;
    }
    search() {
        const keyword = this.queryStr.keyword
            ? {
                title: {
                    $regex: this.queryStr.keyword,
                    $options: 'i',
                },
            }
            : {};
        this.query = this.query.find({ ...keyword });
        return this;
    }
    filter() {
        const queryCopy = { ...this.queryStr };
        const removeFields = [
            'keyword',
            'author',
            'category',
            'tags',
            'page',
            'limit',
            'newest',
        ];
        removeFields.forEach((key) => delete queryCopy[key]);
        if (this.queryStr.author) {
            queryCopy.author = this.queryStr.author;
        }
        if (this.queryStr.category) {
            queryCopy.category = this.queryStr.category;
        }
        if (this.queryStr.tags &&
            this.queryStr.tags.length > 0 &&
            typeof this.queryStr.tags !== 'string') {
            this.query = this.query.find({ tags: { $all: this.queryStr.tags } });
        }
        if (this.queryStr.tags && typeof this.queryStr.tags === 'string') {
            this.query = this.query.find({ tags: this.queryStr.tags });
        }
        const queryStr = JSON.stringify(queryCopy);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
    approved(approval) {
        this.query = this.query.find({ approved: approval });
        return this;
    }
    sortByNewest() {
        if (this.queryStr.newest) {
            const sortDirection = this.queryStr.newest === true ? 'asc' : 'desc';
            this.query = this.query.sort({ createdAt: sortDirection });
        }
        return this;
    }
}
exports.default = ApiFeatures;
//# sourceMappingURL=apiFeatures.js.map