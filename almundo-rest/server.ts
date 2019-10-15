import express from 'express';
import cors from 'cors';
import body_parser from 'body-parser';
import Router from './src/routes/Router';


class Server{

    public express: express.Application;
    //private _PORT:number = 8888;

    constructor(){
       this.express = express();
       this.middleware();
       this.listen();
       this.routes();
    }

    public middleware: Function = ():void => {
        this.express.set('port' , process.env._PORT || 3000)
        this.express.use(cors());
        this.express.use(body_parser.json());
    }

    public routes: Function = (): void => {
        Router.init();
        this.express.use('/api' , Router.getRoutes());
    }

    public listen: Function = (): void => {
        this.express.listen( this.express.get('port') , (err:any) => {
            if (err) {
                return console.error(err);
            }
                return console.log(`server is listening on 3000`)
        });
    }
}

export default new Server();
