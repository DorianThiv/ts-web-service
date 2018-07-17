

export class ExecuteRequestDto {

    public status: boolean;
    public module: string;
    public action: string;
    public data: any;
    public error: string;

    constructor(mdl: string, action: string, data: any) {
        this.module = mdl;
        this.action = action;
        this.data = data;
    }

}

