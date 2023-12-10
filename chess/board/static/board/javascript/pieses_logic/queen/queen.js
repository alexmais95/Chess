'use strict';

import Bishop from "../bishop/bishop.js";
import Rook from "../rook/rook.js";

class Queen{
    constructor(){
        this.rook = new Rook;
        this.bishop = new Bishop;
    }

    queen_mv(numb_id, leter_id, pies_name){
        this.bishop.bishop_mv(numb_id, leter_id, pies_name);
        this.rook.rook_mv(numb_id, leter_id, pies_name);
    }
}

export default Queen;