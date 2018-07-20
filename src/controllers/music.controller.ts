import { ControllerBase } from "./controller.base";
import { Router } from "../../node_modules/@types/express";
import { DirectoryModule } from "../modules/directory.module";
import { ModuleLoaderService } from "../services/module-loader.service";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";
import { ModuleBase } from "../modules/module.base";

export class MusicController extends ControllerBase {

    public directory: ModuleBase;

    constructor(router: Router) {
        super('contollers/music', router);
        this.directory = ModuleLoaderService.getModuleByReference('modules/directory');
    }

    public async scrutanize() {

        this.router.get('/musics', (req, res, next) => {
            const params = this.parseParameters(req);
            const executeDto = new ExecuteRequestDto(Action.List, params);
            this.directory.execute(executeDto).then(result => {
                res.json(result);
            });
        });

        this.router.get('/musics/play', (req, res, next) => {
            const params = this.parseParameters(req);
            const executeDto = new ExecuteRequestDto(Action.Play, params);
            this.directory.execute(executeDto).then(result => {
                res.json(result);
            });
        });

        this.router.get('/musics/help', (req, res, next) => {
            res.json([
                { method: 'GET', action: 'help', url: 'musics/help' },
                { method: 'GET', action: 'list', url: 'musics' },
                { method: 'GET', action: 'list in a specific directory', url: 'musics', params: 'path;' },
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

    private parseParameters(request) {
        const parsedRequest = this.parseUrl(request.url);
        return this.parseQuery(parsedRequest.query);
    }

}