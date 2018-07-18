

export class ExecuteRequestDto {

    public status: boolean;
    public action: string;
    public data: any;
    public error: string;

    constructor(action: string, data?: any, status?: boolean, error?: string) {
        this.action = action;
        this.data = data;
    }

}

