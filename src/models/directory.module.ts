import { IModule } from "../interfaces/module.interfaces";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";
import { Terminal } from "../models/terminal.model";
import { DirectorySystem } from "../models/directory.model";
import { ModuleBase } from "../modules/module.base";

export class DirectoryModule extends ModuleBase implements IModule {

    private directory: DirectorySystem;
    private terminal: Terminal;

    constructor() {
        super('modules/directory');
    }

    public initialize(): boolean {
        this.directory = new DirectorySystem();
        this.terminal = new Terminal();
        this.loaded = true;
        return this.loaded;
    }

    public execute(request: ExecuteRequestDto): ExecuteRequestDto {
        switch (request.action) {
            case Action.List:
                const path = request.data['path'];
                const responseList = this.directory.getDirectoryContent(path);
                request.status = responseList.status;
                request.data = responseList.data;
                return request;       
            case Action.Play:
                const name = request.data['name'];
                const responsePlay = this.terminal.play(name);
                request.status = responsePlay.status;
                request.data = responsePlay.data;
                return request;       
            default:
                break;
        }
    }

    public update(): boolean {
        return true;
    }

    public unitialize(): boolean {
        return true;
    }

}
