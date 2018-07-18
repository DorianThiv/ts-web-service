import { ControllerBase } from "../models/controller.base";
import { Router } from "../../node_modules/@types/express";
import { CommanderModule } from "../modules/commander.module";
import { ModuleLoaderService } from "../services/module-loader.service";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";

export class MusicController extends ControllerBase {

    public commander: CommanderModule;

    constructor(router: Router) {
        super('contollers/music', router);
        this.commander = ModuleLoaderService.getModuleByReference('modules/commander');
    }

    public async scrutanize() {

        this.router.get('/musics', (req, res, next) => {
            this.commander.execute(new ExecuteRequestDto('ls')).then(result => {
                res.json(result);
            });
        });

        this.router.get('/musics/help', (req, res, next) => {
            res.json([
                { method: 'GET', action: 'help', url: 'musics/help' },
                { method: 'GET', action: 'list', url: 'musics' },
                { method: 'GET', action: 'get a music', url: 'musics/:id' },
                { method: 'POST', action: 'create music', url: 'musics/:id' },
                { method: 'PUT', action: 'update music', url: 'musics/:id' },
                { method: 'DELETE', action: 'delete music', url: 'musics/:id' },
                { method: 'GET', action: 'get a music infos', url: 'musics/:id/infos' },
            ]);
        });

        this.router.post('/musics/parse', (req, res, next) => {
            const parsedUrl = this.parseUrl(req.url);
            const query = this.parseQuery(parsedUrl.query);
            res.json({
                controller: 'music',
                url: req.url,
                parsedUrl: parsedUrl,
                query: query
            });
        });

    }

}