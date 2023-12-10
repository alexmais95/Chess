'use strict';

import li_pies from "../../pies.js";
import Helper from "../../handlers.js";

class Pawn_w{
    
    constructor(){
        this.pies = li_pies;
        this.helper = new Helper;
        this.l_p = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h']
    }


    first_move_pawn_w(numb_id, leter_id, name_p){
        
        this.victim(numb_id, leter_id, name_p);
        this.helper.pawn_logic(numb_id, leter_id, '-', 2)
        
    }


    second_move_pawn_w(numb_id, leter_id, name_p){
        
        this.victim(numb_id, leter_id, name_p);
        this.helper.pawn_logic(numb_id, leter_id, '-', 1)
    }


    victim(numb_id, leter_id, name_p){
        
        let step_square = [],
            row_n = parseInt(numb_id) - 1,
            column_n = this.l_p.indexOf(leter_id);
        ['+', '-'].forEach((el)=>{step_square.push(document.getElementById(this.l_p[eval(column_n + el + 1)] + row_n))});
        this.helper.victim_logic(step_square, name_p);

    }

}



export default Pawn_w;