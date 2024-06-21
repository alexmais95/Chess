'use strict';



class AbsGame {
    
    constructor() {
        if (this.constructor.name === 'AbsGame') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        
        }
        this.array_of_board = []
        
    }

    main_create_board() {}

    register_board(board) {}

    notify_board() {}
}


export default AbsGame;


