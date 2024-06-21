'use strict';



class AbsCreateBoard {
    constructor() {
        if (this.constructor.name === 'AbsCreateBoard') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        
    }

    create_board() {}

}


export default AbsCreateBoard;