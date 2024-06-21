'use strict';


import AbsMove from "../../ABSClass/absMove.js";
import PeasMixin from "../../Mixin/peasMixin.js";



class PeasMove extends AbsMove {
    constructor() {
        super()
        this.list_of_circle = [];
        this.helper = new PeasMixin;
        this.l_p = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h']
    }

    move(){}
}


export default PeasMove;