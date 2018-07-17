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

    public scrutanize() {

        this.router.get('/musics', (req, res, next) => {
            console.log('MusicController (get) request : ' + req.url + ', route : /music ');
            res.json([
                { name: 'Music1', time: '4 min 10 s' },
                { name: 'Music2', time: '2 min 59 s' },
                { name: 'Music3', time: '3 min 45 s' },
                { name: 'Music4', time: '3 min 57 s' },
            ]);
        });

        this.router.get('/musics/help', (req, res, next) => {
            console.log('MusicController (get) request : ' + req.url + ', route : /music ');
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

        this.router.post('/musics', (req, res, next) => {
            console.log('MusicController (post) request : ' + req.url + ', route : /music ');
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