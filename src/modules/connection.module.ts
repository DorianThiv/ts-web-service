import { IModule } from "../interfaces/module.interfaces";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";
import { ModuleBase } from "./module.base";

export class ConnectionModule extends ModuleBase implements IModule {


    constructor() {
        super('modules/connection');
    }

    public async initialize(): Promise<boolean> {
        this.loaded = true;
        return this.loaded;
    }

    public async execute(request: ExecuteRequestDto): Promise<ExecuteRequestDto> {
        switch (request.action) {
            case Action.Create:
                return request;       
            case Action.Read:
                return request;       
            case Action.Update:
                return request;       
            case Action.Delete:
                return request;       
            default:
                break;
        }
    }

    public async update(): Promise<boolean> {
        return true;
    }

    public async unitialize(): Promise<boolean> {
        return true;
    }

}
