import { IModule } from "../interfaces/module.interfaces";
import { CommanderModule } from "../modules/commander.module";
import { ModuleBase } from "../modules/module.base";
import { DirectoryModule } from "../modules/directory.module";


export class ModuleLoaderService {

    public static instance: ModuleLoaderService;

    public static modules: ModuleBase[];

    constructor() {
        console.log('Constructor Module Loader');
        ModuleLoaderService.modules = [];
        ModuleLoaderService.modules.push(new CommanderModule());
        ModuleLoaderService.modules.push(new DirectoryModule());
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new ModuleLoaderService();
        }
        return this.instance;
    }

    public static initialize(): boolean {
        try {
            this.getInstance();
            ModuleLoaderService.modules.forEach(m => {
                m.initialize();
            });
            return true;
        } catch (error) {
            console.error('Initialization failed : ' + error);
            return false;
        }
    }

    public static execute(): boolean {
        return true;
    }

    public static update(): boolean {
        return true;
    }

    public static unitialize(): boolean {
        return true;
    }

    public static getModuleByReference(reference: string) {
        return this.modules.find(m => m.loaded && m.reference === reference);
    }

}

