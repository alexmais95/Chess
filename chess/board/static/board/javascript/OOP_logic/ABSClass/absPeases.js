'use strict';



class AbsPeas {
    constructor(coordinate, name, photo) {
        if (this.constructor.name === 'AbsPeas') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        this.name = name;
        this.coordinate = coordinate;
        this.photo = photo;
        
        
    }

    move() {}

    update_coordinate(){}

}


export default AbsPeas;