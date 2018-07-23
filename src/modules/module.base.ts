import { IModule } from "../interfaces/module.interfaces";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";

export class ModuleBase implements IModule {

    public reference: string;
    public loaded: boolean;
    
    private model: any;

    constructor (reference: string) {
        this.reference = reference;
    }

    public initialize(): boolean {
        return true;
    }

    public execute(request: ExecuteRequestDto): ExecuteRequestDto {
        return new ExecuteRequestDto(undefined, undefined, undefined);
    }

    public update(): boolean {
        return true;
    }

    public unitialize(): boolean {
        return true;
    }

    public isLoaded() {
        return this.loaded;
    }
}
