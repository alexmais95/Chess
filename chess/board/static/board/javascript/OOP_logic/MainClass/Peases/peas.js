'use strict';

import AbsPeas from "../../ABSClass/absPeases.js";
import AbsMove from "../../ABSClass/absMove.js";
import PeasMixin from "../../Mixin/peasMixin.js";




class Peas extends AbsPeas {
    constructor(coordinate, name, photo, move_logic = AbsMove, board) {
        super()
        this.halper = new PeasMixin;
        this.board = board
        this.coordinate = coordinate;
        this.name = name;
        this.photo = photo;
        this.move_logic = move_logic;
        this.swich = false;
    }

    move() {

    }

    update_coordinate(new_coordinate) {
        this.coordinate = new_coordinate
    }

}


export default Peas;