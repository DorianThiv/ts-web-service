
import url = require('url');
import querystring = require('querystring');

import { IController } from "../interfaces/controller.interface";

import { Router } from "../../node_modules/@types/express";


export class BaseController implements IController {

    protected identifier: string;
    protected router: Router;
    protected loaded: boolean;

    constructor (identifier: string, router: Router) {
        this.identifier = identifier;
        this.router = router;
    }

    public async scrutanize() {

        this.router.get('/', (req, res, next) => {
            res.json({
                'type': 'echo',
                'method': 'GET'
            });
        });

        this.router.post('/', (req, res, next) => {
            res.json({
                'type': 'echo',
                'method': 'POST'
            });
        });

        this.router.put('/', (req, res, next) => {
            res.json({
                'type': 'echo',
                'method': 'PUT'
            });
        });

        this.router.delete('/', (req, res, next) => {
            res.json({
                'type': 'echo',
                'method': 'DELETE'
            });
        });

    }

    protected parseParameters(request) {
        if (request) {
            const parsedRequest = this.parseUrl(request.url);
            return this.parseQuery(parsedRequest.query);
        } else { return {}; }
    }

    protected parseBody(request) {
        if (request) {
            return request.body;
        } else { return  {}; }
    }


    protected parseUrl(urlStr: string) {
        return url.parse(urlStr);
    }

    protected parseQuery(query: string) {
        return querystring.parse(query);
    }
 }
