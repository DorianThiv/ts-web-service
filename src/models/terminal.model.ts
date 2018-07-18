

export class Terminal {


    constructor() { 
    }

    public async ls() {

        const nodeCmd = require('node-cmd');
        const data = nodeCmd.get('dir', (err, data, stderr) => { return data; });   
        console.log(data);
        
        // ls.stdout.on( 'data', data => {
        //     console.log( `stdout: ${data}` );
        // } );

        // ls.stderr.on( 'data', data => {
        //     console.log( `stderr: ${data}` );
        // } );

        // ls.on( 'close', code => {
        //     console.log( `child process exited with code ${code}` );
        // } );

        return data;
    }

}