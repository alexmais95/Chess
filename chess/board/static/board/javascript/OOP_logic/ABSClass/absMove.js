'use strict';



class AbsMove {
    constructor() {
        if (this.constructor.name === 'AbsPeas') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }   
    }

    move() {}
}


export default AbsMove;