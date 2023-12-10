'use strict';

import Helper from "../../handlers.js";

class Rook{
    constructor(){
        this.helper = new Helper;
        this.l_p = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h'];
    }

    rook_mv(numb_id, leter_id, pies_name, numb = 8){
        let step_square = [],
            iter = [['+'],['-']];
        for(let j of iter){
            let column = this.l_p.indexOf(leter_id),
                row = parseInt(numb_id);
            for(let i=0; i<numb; i++){
                column = eval(column + j[0] + 1);
                if(document.getElementById(this.l_p[column] + row) !== null){
                    step_square.push(document.getElementById(this.l_p[column] + row))    
                };
                if(document.getElementById(this.l_p[column] + row) !== null){
                    if(document.getElementById(this.l_p[column] + row).childNodes.length !== 0){
                        this.helper.add_circle(step_square)
                        this.helper.victim_logic(step_square, pies_name)
                        break
                    }
                }
            }
        }
        iter = [['+'],['-']]
        for(let j of iter){
            let column = this.l_p.indexOf(leter_id),
                row = parseInt(numb_id);
            for(let i=0; i<numb; i++){
                row = eval(row + j[0] + 1);
                if(document.getElementById(this.l_p[column] + row) !== null){
                    step_square.push(document.getElementById(this.l_p[column] + row))    
                };
                if(document.getElementById(this.l_p[column] + row) !== null){
                    if(document.getElementById(this.l_p[column] + row).childNodes.length !== 0){
                        this.helper.add_circle(step_square)
                        this.helper.victim_logic(step_square, pies_name)
                        break
                    }
                }
            }
        }

        this.helper.add_circle(step_square);
        this.helper.victim_logic(step_square, pies_name);

    }
}


export default Rook;