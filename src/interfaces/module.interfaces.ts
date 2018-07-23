import { ExecuteRequestDto } from "../dtos/execute-request.dto";

export interface IModule {

    initialize(): boolean;

    execute(request: ExecuteRequestDto): ExecuteRequestDto;

    update(): boolean;

    unitialize(): boolean;

}