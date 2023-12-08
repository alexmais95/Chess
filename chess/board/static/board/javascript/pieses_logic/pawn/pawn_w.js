'use strict';

import li_pies from "../../pies.js";

class Pawn_w{
    
    constructor(){
        this.pies = li_pies;
    }


    first_move_pawn_w(numb_id, leter_id){
        
        try{
            let step_square = [];
            for (let i=0; i<2;i++){
                numb_id--;
                step_square.push(document.getElementById(leter_id + numb_id));
            };
            this.add_circle(step_square);
        } catch(err){};
        
    }


    second_move_pawn_w(numb_id, leter_id){
        
        try{
            let step_square = [];
            for (let i=0; i<1;i++){
                numb_id--;
                step_square.push(document.getElementById(leter_id + numb_id));
            };
            this.add_circle(step_square);
            
        
        } catch(err){};
    }


    add_circle(list_el){    
        const div = "<div class='circle'></div>";
        for (let i of list_el){
            i.innerHTML = div;       
        };   
    }  

}



export default Pawn_w;