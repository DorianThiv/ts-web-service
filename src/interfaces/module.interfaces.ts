import { ExecuteRequestDto } from "../dtos/execute-request.dto";

export interface IModule {

    initialize(): boolean;

    execute(): ExecuteRequestDto;

    update(): boolean;

    unitialize(): boolean;

}