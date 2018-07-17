import { ControllerBase } from "../models/controller.base";
import { Router } from "../../node_modules/@types/express";

export class MusicController extends ControllerBase {

    constructor(router: Router) {
        super('contollers/music', router);
    }

}