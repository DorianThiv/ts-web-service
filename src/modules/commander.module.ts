import { IModule } from "../interfaces/module.interfaces";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";
import { Terminal } from "../models/terminal.model";
import { ModuleBase } from "./module.base";


export class CommanderModule extends ModuleBase implements IModule {

    constructor() {
        super('modules/commander');
    }

    public initialize(): boolean {
        this.loaded = true;
        return this.loaded;
    }

    public execute(request: ExecuteRequestDto): ExecuteRequestDto {
        const terminal = new Terminal();
        const ret = new ExecuteRequestDto(Action.List);
        ret.data = terminal.getCurrentDir();
        return ret;
    }

    public update(): boolean {
        return true;
    }

    public unitialize(): boolean {
        return true;
    }

}
