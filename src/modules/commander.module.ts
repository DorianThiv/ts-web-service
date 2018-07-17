import { IModule } from "../interfaces/module.interfaces";
import { ModuleBase } from "../models/module.base";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";


export class CommanderModule extends ModuleBase implements IModule {

    constructor() {
        super('modules/commander');
    }

    initialize(): boolean {
        this.loaded = true;
        console.log('Initialize : ' + this.reference);
        return this.loaded;
    }

    execute(): ExecuteRequestDto {
        return new ExecuteRequestDto('ls', { commander: 'Execute' });
    }

    update(): boolean {
        return true;
    }

    unitialize(): boolean {
        return true;
    }

}
