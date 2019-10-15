import HotelController from '../controllers/HotelController';
import express from 'express';


class Router {

    routes:any;
    private hotelController:HotelController;

    constructor(){
       this.hotelController = new HotelController();
    }

    public init:Function = (): void => {
        this.routes = express();
        this.routes.get("/hotels" , this.hotelController.getHotels);      
        
    }

    public getRoutes:Function = () => {
        return this.routes;
    } 


}

export default new Router();