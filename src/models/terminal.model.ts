

export class Terminal {

    private exec;

    constructor() {
        this.exec = require('child_process').exec;
    }

    public async ls(callback?: any) {
        this.exec('dir', function(err, stdout, stderr) {
            callback(stdout);
        });
    }

}