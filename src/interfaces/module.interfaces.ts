
export interface IModule {

    initialize(): boolean;

    execute(): boolean;

    update(): boolean;

    unitialize(): boolean;

}