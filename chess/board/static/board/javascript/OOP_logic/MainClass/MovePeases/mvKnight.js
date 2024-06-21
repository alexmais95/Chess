'use strict';


import PeasMove from "./move.js";




class MvKnight extends PeasMove {
    constructor (board) {
        super()
        this.board = board;
       
        
    }

    move(numb, leter, peas_name, circle, victim){
        let column = this.l_p.indexOf(leter),
            row = parseInt(numb);
        //right
        this.list_of_circle.push(document.getElementById(this.l_p[column + 2] + (row + 1)));
        this.list_of_circle.push(document.getElementById(this.l_p[column + 2] + (row - 1)));
        //left
        this.list_of_circle.push(document.getElementById(this.l_p[column - 2] + (row + 1)));
        this.list_of_circle.push(document.getElementById(this.l_p[column - 2] + (row - 1)));
        //top
        this.list_of_circle.push(document.getElementById(this.l_p[column - 1] + (row - 2)));
        this.list_of_circle.push(document.getElementById(this.l_p[column + 1] + (row - 2)));
        //bottom
        this.list_of_circle.push(document.getElementById(this.l_p[column - 1] + (row + 2)));
        this.list_of_circle.push(document.getElementById(this.l_p[column + 1] + (row + 2)));

        circle.add_circle(this.list_of_circle)
        victim.victim_logic(this.list_of_circle, peas_name, this.board)
        this.list_of_circle = []

    }

}


export default MvKnight;