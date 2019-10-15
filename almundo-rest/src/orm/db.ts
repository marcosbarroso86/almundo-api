let fs = require("fs");

class DB {

    public find: Function = async (params:any) => {
        let dataSource:any = this.executeQuery(); 
        let hotels:any[] = []; 
        let aName = params.name;
        let aStars = params.stars;

        for (let i = 0; i < dataSource.length; i++) {
            const hotel:any = dataSource[i];
            let _name:string = hotel.name.toUpperCase();
            let _stars:number = hotel.stars;

            if(aName && aStars){
                if(_name.includes(aName.toUpperCase()) && aStars == _stars){
                    hotels.push(hotel);
                }
            }else if (aName){
                if(_name.includes(aName.toUpperCase())){
                    hotels.push(hotel);
                }
            }else if (aStars) {
                if(aStars == _stars){
                    hotels.push(hotel);
                }
            }else {
                hotels = dataSource;
            }
        }
        return hotels;
    }

    private executeQuery: Function = (): any[] => {
        let contents = fs.readFileSync("./assets/data/data.json");
        let jsonContent = JSON.parse(contents);
        return jsonContent;
    }

}

export default DB;