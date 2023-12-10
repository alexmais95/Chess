'use strict';

import Helper from "../../handlers.js";

class Knight{
    constructor(){
        this.helper = new Helper;
        this.l_p = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h'];
    }


    move_kn(numb, leter, peas_name){
        let step_square = [],
            column = this.l_p.indexOf(leter),
            row = parseInt(numb);
        //right
        step_square.push(document.getElementById(this.l_p[column + 2] + (row + 1)));
        step_square.push(document.getElementById(this.l_p[column + 2] + (row - 1)));
        //left
        step_square.push(document.getElementById(this.l_p[column - 2] + (row + 1)));
        step_square.push(document.getElementById(this.l_p[column - 2] + (row - 1)));
        //top
        step_square.push(document.getElementById(this.l_p[column - 1] + (row - 2)));
        step_square.push(document.getElementById(this.l_p[column + 1] + (row - 2)));
        //bottom
        step_square.push(document.getElementById(this.l_p[column - 1] + (row + 2)));
        step_square.push(document.getElementById(this.l_p[column + 1] + (row + 2)));
        
        this.helper.add_circle(step_square)
        this.helper.victim_logic(step_square, peas_name)

    }


}

export default Knight;