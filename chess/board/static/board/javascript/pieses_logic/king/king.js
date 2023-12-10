'use strict';


import Bishop from "../bishop/bishop.js";
import Rook from "../rook/rook.js";

class King{
    constructor(){
        this.rook = new Rook;
        this.bishop = new Bishop;
    }

    king_mv(numb_id, leter_id, pies_name){
        this.bishop.bishop_mv(numb_id, leter_id, pies_name, 1);
        this.rook.rook_mv(numb_id, leter_id, pies_name, 1);
    }
}

export default King;