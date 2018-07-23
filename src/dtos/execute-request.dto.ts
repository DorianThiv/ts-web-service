

export class ExecuteRequestDto {

    public action: Action;
    public data: any;
    public status: boolean;
    public error: InternalError;

    constructor(action: Action, data?: any, error?: InternalError, status?: boolean) {
        this.action = action;
        this.data = data;
    }

}

