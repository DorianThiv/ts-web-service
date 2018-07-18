

export class Terminal {

    private cmd;

    constructor() {
        this.cmd = require('node-cmd');
    }

    public async ls() {
        return { stdout: '_stdout' };
    }

}