'use strict';


import PeasMove from "./move.js";
import MvBishop from "./mvBishop.js";
import MvRook from "./mvRook.js";



class MvQueen extends PeasMove {
    constructor (board) {
        super()
        this.board = board;
        this.rook = new MvRook(this.board);
        this.bishop = new MvBishop(this.board);
    }

    move(numb_id, leter_id, pies_name, circle, victim){
        this.bishop.move(numb_id, leter_id, pies_name, circle, victim);
        this.rook.move(numb_id, leter_id, pies_name, circle, victim);
    }

}


export default MvQueen;