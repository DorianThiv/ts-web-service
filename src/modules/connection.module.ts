import { IModule } from "../interfaces/module.interfaces";
import { ExecuteRequestDto } from "../dtos/execute-request.dto";
import { ModuleBase } from "./module.base";
import { User } from "../models/user.model";

export class ConnectionModule extends ModuleBase implements IModule {


    constructor() {
        super('modules/connection');
    }

    public initialize(): boolean {
        this.loaded = true;
        return this.loaded;
    }

    public execute(request: ExecuteRequestDto): ExecuteRequestDto {
        switch (request.action) {
            case Action.AddOrUpdate:
                if (request) {
                    const session = request.data.session;
                    const username = request.data.username;
                    const password = request.data.password;
                    const user = User.getInstance(username, password);
                    if (!user) {
                        request.status = false;
                        request.data = 'User connection error';
                        request.error = InternalError.ConnectionError;
                    } else {
                        request.status = true;
                        request.data = { session: user.uuid };
                        request.error = InternalError.NoError;
                    }
                }
                return request;       
            case Action.Read:
                return request;       
            case Action.Update:
                return request;       
            case Action.Delete:
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
