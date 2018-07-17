import { IModule } from "../interfaces/module.interfaces";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";

export class ModuleBase implements IModule {

    public reference: string;
    public loaded: boolean;

    constructor (reference: string) {
        this.reference = reference;
        console.log('Constructor : ' + this.reference);
    }

    initialize(): boolean {
        return true;
    }

    execute(): ExecuteRequestDto {
        return new ExecuteRequestDto(undefined, undefined, undefined);
    }

    update(): boolean {
        return true;
    }

    unitialize(): boolean {
        return true;
    }

    isLoaded() {
        return this.loaded;
    }
}
