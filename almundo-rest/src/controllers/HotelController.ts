import HotelDAO from "../dao/HotelDAO";
import MessageUtils from "../utils/MessageUtils";

class HotelController{

    constructor(){}

    public getHotels:Function = async (req:any , res:any)  => {

       let params:any = {}
       let name:string = req.query.name;
       let stars:number = parseInt(req.query.stars);
       params.name = name;
       params.stars = stars;
       try{
            let response:any = await HotelDAO.getHotels(params);
            res.status(200);
            res.send(response)
       }catch(error){
            res.status(500);
            res.send(MessageUtils.ERROR_MESSAGE_OBTAIN_HOTEL);
       }
       
    }
}
export default HotelController