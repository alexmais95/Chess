'use strict';


import PeasMove from "./move.js";



class MvBishop extends PeasMove {
    constructor (board) {
        super()
        this.board = board;
        
        

    }

    move(numb_id, leter_id, pies_name, circle, victim){
        
        this.logic(numb_id, leter_id, pies_name, 8, circle, victim)
        
         
    }


    logic(numb_id, leter_id, pies_name ,numb, circle, victim) {
        let iter = [['+', '-'],['-','+'],['+','+'],['-','-']];
            
        
        for(let j of iter){
            let column = this.l_p.indexOf(leter_id),
                row = parseInt(numb_id);
            for(let i=0; i<numb; i++){
                row = eval(row + j[0] + 1)
                column = eval(column + j[1] + 1)
                if(document.getElementById(this.l_p[column] + row) !== null){ 
                    this.list_of_circle.push(document.getElementById(this.l_p[column] + row))
                    
                };
                if(document.getElementById(this.l_p[column] + row) !== null){
                    if(document.getElementById(this.l_p[column] + row).childNodes.length !== 0){
                        circle.add_circle(this.list_of_circle)
                        victim.victim_logic(this.list_of_circle, pies_name, this.board)
                        this.list_of_circle = []
                        break
                    };  
                }
            }
        }
        circle.add_circle(this.list_of_circle)
        victim.victim_logic(this.list_of_circle, pies_name, this.board)
        this.list_of_circle = []
    }

  

}


export default MvBishop;