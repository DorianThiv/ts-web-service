import { ExecuteRequestDto } from "../dtos/execute-request.dto";

export interface IModule {

    initialize(): Promise<boolean>;

    execute(request: ExecuteRequestDto): Promise<ExecuteRequestDto>;

    update(): Promise<boolean>;

    unitialize(): Promise<boolean>;

}