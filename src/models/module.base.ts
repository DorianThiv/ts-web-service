import { IModule } from "../interfaces/module.interfaces";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";

export class ModuleBase implements IModule {

    public reference: string;
    public loaded: boolean;

    constructor (reference: string) {
        this.reference = reference;
        console.log('Constructor : ' + this.reference);
    }

    public async initialize(): Promise<boolean> {
        return true;
    }

    public async execute(request: ExecuteRequestDto): Promise<ExecuteRequestDto> {
        return new ExecuteRequestDto(undefined, undefined, undefined);
    }

    public async update(): Promise<boolean> {
        return true;
    }

    public async unitialize(): Promise<boolean> {
        return true;
    }

    isLoaded() {
        return this.loaded;
    }
}
