'use strict';



class AbsLoadPieses {
    constructor() {
        if (this.constructor.name === 'AbsLoadPieses') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        
    }

    load_pieses() {}
}


export default AbsLoadPieses;