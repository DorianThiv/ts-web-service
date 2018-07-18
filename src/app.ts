import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import { UrlResolverService } from './services/url-resolver.service';

import { ModuleLoaderService } from './services/module-loader.service';

class App {

  public express: express.Application;

  public urlResolver: UrlResolverService;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));

    ModuleLoaderService.initialize();

  }


  private routes(): void {
    this.urlResolver = UrlResolverService.getInstance(express.Router());    
    this.urlResolver.scrutanize();

    this.express.use('/', this.urlResolver.router);
  }

}

export default new App().express;