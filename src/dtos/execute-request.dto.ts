

export class ExecuteRequestDto {

    public status: boolean;
    public action: string;
    public data: any;
    public error: string;

    constructor(action: string, data?: any, error?: string, status?: boolean) {
        this.action = action;
        this.data = data;
    }

}

