
import url = require('url');
import querystring = require('querystring');

import { IController } from "../interfaces/controller.interface";

import { Router } from "../../node_modules/@types/express";


export class ControllerBase implements IController {

    protected identifier: string;
    protected router: Router;
    protected loaded: boolean;

    constructor (identifier: string, router: Router) {
        this.identifier = identifier;
        this.router = router;
        console.log('Construct controller : ' + this.identifier);
    }

    public async scrutanize() {

        this.router.get('/', (req, res, next) => {
            console.log('ControllerBase (get) : / ');
            res.json({
                'type': 'echo',
                'method': 'GET'
            });
        });

        this.router.post('/', (req, res, next) => {
            console.log('ControllerBase (post) : / ');
            res.json({
                'type': 'echo',
                'method': 'POST'
            });
        });

        this.router.put('/', (req, res, next) => {
            console.log('ControllerBase (put) : / ');
            res.json({
                'type': 'echo',
                'method': 'PUT'
            });
        });

        this.router.delete('/', (req, res, next) => {
            console.log('ControllerBase (delete) : / ');
            res.json({
                'type': 'echo',
                'method': 'DELETE'
            });
        });

    }

    public parseUrl(urlStr: string) {
        return url.parse(urlStr);
    }

    public parseQuery(query: string) {
        return querystring.parse(query);
    }
 }
