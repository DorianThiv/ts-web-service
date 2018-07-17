import { IModule } from "../interfaces/module.interfaces";

export class ModuleBase implements IModule {

    protected _reference: string;
    protected _loaded: boolean;

    constructor (reference: string) {
        this._reference = reference;
        console.log('Constructor : ' + this._reference);
    }

    initialize(): boolean {
        return true;
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
