import { IModule } from "../interfaces/module.interfaces";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";
import { Terminal } from "../models/terminal.model";
import { ModuleBase } from "./module.base";


export class CommanderModule extends ModuleBase implements IModule {

    constructor() {
        super('modules/commander');
    }

    public async initialize(): Promise<boolean> {
        this.loaded = true;
        console.log('Initialize : ' + this.reference);
        return this.loaded;
    }

    public async execute(request: ExecuteRequestDto): Promise<ExecuteRequestDto> {
        const terminal = new Terminal();
        const ret = new ExecuteRequestDto(Action.List);
        // ret.data = terminal.getCurrentDir();
        return ret;
    }

    public async update(): Promise<boolean> {
        return true;
    }

    public async unitialize(): Promise<boolean> {
        return true;
    }

}
