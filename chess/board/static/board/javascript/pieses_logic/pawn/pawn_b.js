'use strict';

import li_pies from "../../pies.js";
import Halper from "../../handlers.js";

class Pawn_b{
    
    constructor(){
        this.pies = li_pies;
        this.halper = new Halper;
        this.l_p = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h']
    }


    first_move_pawn_b(numb_id, leter_id){
        
        this.victim(numb_id, leter_id)
        
        
        try{
            let step_square = [];
            for (let i=0; i<2;i++){
                numb_id++;
                step_square.push(document.getElementById(leter_id + numb_id));
            };
            this.halper.add_circle(step_square);
           
            
            
        } catch(err){};
        
    }


    second_move_pawn_b(numb_id, leter_id){
        
        try{
            let step_square = [];
            for (let i=0; i<1;i++){
                numb_id++;
                step_square.push(document.getElementById(leter_id + numb_id));
            };
            this.halper.add_circle(step_square);
            
        
        } catch(err){console.log(err)};
    }
    
    victim(numb_id, leter_id){
        
        let step_square = [];
        let row_n = parseInt(numb_id) + 1
        let column_n = this.l_p.indexOf(leter_id);
        let right = column_n + 1;
        let left = column_n - 1;
        step_square.push(document.getElementById(this.l_p[right] + row_n));
        step_square.push(document.getElementById(this.l_p[left] + row_n));
        
        for( let i of step_square){
            if(i.childNodes.length !== 0){
                if (i.childNodes[0].className == 'pieses')
                {
                    document.getElementById(i.getAttribute('id')).style.backgroundColor = '#b75080';
                    
                };
            } 
            
        }

    }
}



export default Pawn_b;