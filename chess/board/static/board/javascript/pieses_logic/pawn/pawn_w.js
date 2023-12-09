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
        try{
            let step_square = [];
            for (let i=0; i<2;i++){
                numb_id--;
                step_square.push(document.getElementById(leter_id + numb_id));
            };
            this.helper.add_circle(step_square);
        } catch(err){};
        
    }


    second_move_pawn_w(numb_id, leter_id, name_p){
        
        this.victim(numb_id, leter_id, name_p);
        try{
            let step_square = [];
            for (let i=0; i<1;i++){
                numb_id--;
                step_square.push(document.getElementById(leter_id + numb_id));
            };
            this.helper.add_circle(step_square);
            
        
        } catch(err){};
    }


    victim(numb_id, leter_id, name_p){
        
        let step_square = [];
        let row_n = parseInt(numb_id) - 1
        let column_n = this.l_p.indexOf(leter_id);
        let right = column_n + 1;
        let left = column_n - 1;
        step_square.push(document.getElementById(this.l_p[right] + row_n));
        step_square.push(document.getElementById(this.l_p[left] + row_n));
        
        this.helper.victim_logic(step_square, name_p);

    }

}



export default Pawn_w;