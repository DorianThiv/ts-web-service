
/**
 * User Model
 * ---------------------------
 * Only one user on a server.
 */

const STATIC_USERNAME = 'root';
const STATIC_PASSWORD = 'root';

export class User {

    private static instance: User;

    public uuid: string;
    public username: string;
    public password: string;

    private constructor(u: string, p: string) {
        const uuidv1 = require('uuid/v1');
        this.uuid = uuidv1();
        this.username = u;
        this.password = p;
    }

    public static getInstance(username?: string, password?: string) {
        if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
            if (!User.instance) {
                User.instance = new User(username, password);
            }
        } else {
            User.disconnect();
        }
        return User.instance; 
    }

    public static disconnect() {
        User.instance = undefined;
    }

    public static isConnected() {
        if (User.instance) {
            return true;
        } else {
            return false;
        }
    }

    public static getUuid() {
        if (User.instance) {
            return User.instance.uuid;
        }
    }

}