import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { UrlResolverService } from './services/url-resolver.service';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  public urlResolver: UrlResolverService;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    this.urlResolver = UrlResolverService.getInstance(express.Router());
    
    // placeholder route handler
    this.urlResolver.scrutanize();

    this.express.use('/', this.urlResolver.router);
  }

}

export default new App().express;