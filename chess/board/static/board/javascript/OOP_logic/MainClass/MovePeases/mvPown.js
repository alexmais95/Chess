'use strict';


import PeasMove from "./move.js";



class MvPavn extends PeasMove {
    constructor (board, white) {
        super()
        this.board = board;
        this.white = white;
        this.first_move = true;
        
     
    }

    move (numb_id, leter_id, name_p, circle, victim) {
        
        if (this.first_move === true & this.white === true) {
            this.logic(numb_id, leter_id, '+', 2, circle)
            this.victim(numb_id, leter_id, name_p, '+', victim);
        } else if (this.first_move === false & this.white === true) {
            this.logic(numb_id, leter_id, '+', 1, circle)
            this.victim(numb_id, leter_id, name_p, '+', victim);
        } else if (this.first_move === true & this.white === false) {
            this.logic(numb_id, leter_id, '-', 2, circle)
            this.victim(numb_id, leter_id, name_p, '-', victim);
        } else if (this.first_move === false & this.white === false) {
            this.logic(numb_id, leter_id, '-', 1, circle)
            this.victim(numb_id, leter_id, name_p, '-', victim);
        }
        

        
    }

    logic(numb_id, leter_id, math, step, circle){
        try{
            
            for (let i=0; i<step;i++){
                numb_id = eval(numb_id + math + 1);
                this.list_of_circle.push(document.getElementById(leter_id + numb_id))
               
                
            };
            circle.add_circle(this.list_of_circle);  
            this.list_of_circle = [];
            
            
        } catch(err){console.log(err)};
    }

    victim(numb_id, leter_id, name_p, math, victim){
        
        let step_square = [],
            row_n = eval(numb_id + math + 1),
            column_n = this.l_p.indexOf(leter_id);
        ['+', '-'].forEach((el)=>{step_square.push(document.getElementById(this.l_p[eval(column_n + el + 1)] + row_n))});
        
        victim.victim_logic(step_square, name_p, this.board);
    }


}


export default MvPavn;