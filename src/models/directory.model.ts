
import fs = require('fs');
import { dirname } from 'path';

export class DirectorySystem {

    constructor() { }

    public getDirectoryContent(path: string) {
        try {
            if (!path) { throw new Error('Parameter path is undefined'); }
            const content = fs.readdirSync(path);
            return { status: true, data: content };
        } catch(error) {
            const err = '[Directory System Error] Get Directory Content : ' + error;
            console.log(err);
            return { status: false, data: err };
        }
    }

}