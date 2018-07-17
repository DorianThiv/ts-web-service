import { IModule } from "../interfaces/module.interfaces";
import { ModuleBase } from "../models/module.base";

export class CommanderModule extends ModuleBase implements IModule {

    constructor() {
        super('modules/commander');
    }

    initialize(): boolean {
        this._loaded = true;
        console.log('Initialize : ' + this._reference);
        return this._loaded;
    }
    execute(): boolean {
        return true;
    }
    update(): boolean {
        return true;
    }
    unitialize(): boolean {
        return true;
    }

}
