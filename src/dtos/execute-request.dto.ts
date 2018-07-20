

export class ExecuteRequestDto {

    public action: Action;
    public data: any;
    public status: boolean;
    public error: string;

    constructor(action: Action, data?: any, error?: string, status?: boolean) {
        this.action = action;
        this.data = data;
    }

}

