"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
class GraylogApi {
    constructor(graylogUrlApi, username, password) {
        this.graylogUrlApi = graylogUrlApi;
        this.username = username;
        this.password = password;
        this.searchRelativeApi = "search/universal/relative";
        this.systemApi = "system";
        this.streamsApi = "streams";
        this.basicAuthToken = "Basic " + Buffer.from(this.username + ":" + this.password).toString('base64');
    }
    searchRelative(query, range, limit, offset, filter, fields, sort) {
        const options = {
            url: this.graylogUrlApi + this.searchRelativeApi,
            qs: {
                query,
                range,
                limit,
                offset,
                filter,
                fields,
                sort
            },
            json: true,
            headers: {
                Authorization: this.basicAuthToken
            }
        };
        return rp(options);
    }
    system() {
        const options = {
            url: this.graylogUrlApi + this.systemApi,
            json: true,
            headers: {
                Authorization: this.basicAuthToken
            }
        };
        return rp(options);
    }
    streams() {
        const options = {
            url: this.graylogUrlApi + this.streamsApi,
            json: true,
            headers: {
                Authorization: this.basicAuthToken
            }
        };
        return rp(options);
    }
}
exports.GraylogApi = GraylogApi;
//# sourceMappingURL=graylog-api.service.js.map