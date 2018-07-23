import { BaseController } from "./base.controller";
import { Router } from "express";
import { User } from "../models/user.model";
import { ModuleBase } from "../modules/module.base";
import { ModuleLoaderService } from "../services/module-loader.service";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";

export class ConnectionController extends BaseController {

    public connection: ModuleBase;

    constructor(router: Router) {
        super('controllers/connection', router);
        this.connection = ModuleLoaderService.getModuleByReference('modules/connection');
    }

    public async scrutanize() {

        this.router.get('/connection', (req, res, next) => {
            res.json();
        });

        this.router.post('/connection', (req, res, next) => {
            const body = this.parseBody(req);
            let executionDto: ExecuteRequestDto;
            executionDto = new ExecuteRequestDto(Action.AddOrUpdate, body);
            const response = this.connection.execute(executionDto);
            res.json(response);
        });

        this.router.put('/connection', (req, res, next) => {
            res.json();
        });

        this.router.delete('/connection', (req, res, next) => {
            res.json();
        });

    }

}