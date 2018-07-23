

export class Terminal {

    private exec;

    constructor() {
        this.exec = require('child_process').exec;
    }

    public play(name: string) {
        try {
            const { execSync } = require('child_process');
            let stdout = execSync('vlc');
            stdout = new Buffer(stdout).toString('ascii');
            console.log(stdout);
            return { status: true, data: stdout };
        } catch (error) {
            const err = '[Terminal Error] - GetCurrentDir : ' + error;
            console.log(err);
            return { status: false, data: err };
        }
    }

    // public getCurrentDir(callback?: any) {
    //     try {
    //         const { execSync } = require('child_process');
    //         let stdout = execSync('dir');
    //         stdout = new Buffer(stdout).toString('ascii');
    //         console.log(stdout);
    //         return stdout;
    //     } catch (error) {
    //         console.log('[Terminal] - GetCurrentDir : ' + error);
    //     }
    // }

}