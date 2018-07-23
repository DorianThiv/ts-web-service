
import { Router } from '../../node_modules/@types/express';

import { BaseController } from '../controllers/base.controller';
import { MusicController } from '../controllers/music.controller';
import { ConnectionController } from '../controllers/connection.controller';

export class UrlResolverService {

    public static instance: UrlResolverService;

    public router: Router;

    private contollers: BaseController[];

    constructor(router: Router) {
        this.router = router;
        this.contollers = [];
        this.contollers.push(new ConnectionController(this.router));
        this.contollers.push(new MusicController(this.router));
    }

    public static getInstance(router: Router) {
        if (!this.instance) {
            this.instance = new UrlResolverService(router);
        }
        return this.instance;
    }

    public scrutanize() {
        this.contollers.map(c => c.scrutanize());
    }

}