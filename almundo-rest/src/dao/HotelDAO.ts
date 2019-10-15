import DB from "../orm/db";

class HotelDAO {

    private db: DB;

    constructor(){
        this.db = new DB();
    }

    public getHotels: Function = async (params:any) => {
        let hotels:any[] = [];
        try{
            hotels =  await this.db.find(params);   
        }catch (error){
            throw new Error(error);
        }
        return hotels;
    }
}

export default new HotelDAO();