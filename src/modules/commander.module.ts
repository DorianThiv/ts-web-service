import { IModule } from "../interfaces/module.interfaces";
import { ModuleBase } from "../models/module.base";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";


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
        return new ExecuteRequestDto('ls', { commander: 'Execute' });
    }

    public async update(): Promise<boolean> {
        return true;
    }

    public async unitialize(): Promise<boolean> {
        return true;
    }

}
