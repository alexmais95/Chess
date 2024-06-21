'use strict';


import PeasMove from "./move.js";
import MvBishop from "./mvBishop.js";
import MvRook from "./mvRook.js";



class MvKing extends PeasMove {
    constructor (board) {
        super()
        this.board = board;
        this.bishop = new MvBishop(this.board);
        this.rook = new MvRook(this.board);
        

    }


    move(numb_id, leter_id, pies_name, circle, victim){
        this.bishop.logic(numb_id, leter_id, pies_name, 1, circle, victim);
        this.rook.logic(numb_id, leter_id, pies_name, 1, circle, victim);
    }

   

}


export default MvKing;