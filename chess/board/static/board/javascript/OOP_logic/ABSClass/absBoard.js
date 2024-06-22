'use strict';



class AbsBoard {
    constructor() {
        if (this.constructor.name === 'AbsBoard') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
           
        }
        this.list_of_pieses
        
        
    }

    load_board() {}

    add_peases() {}

    update() {}
}


export default AbsBoard;