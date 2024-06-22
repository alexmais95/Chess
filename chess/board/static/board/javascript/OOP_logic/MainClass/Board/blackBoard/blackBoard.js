'use strict';

import AbsBoard from "../../../ABSClass/absBoard.js";
import LoadPies from "../../Peases/loadPieses.js";
import CreateBlackBoard from "./createBlackBoard.js";


class BlackBoard extends AbsBoard {
    constructor(game) {
        super()
        
        game.register_board(this)
        this.create_board = new CreateBlackBoard()
        this.load_pieses = new LoadPies(this) 
        this.list_of_circkle = [];
        
    }

    load_board() {
        this.create_board.create_board()
        this.add_peases()
        this.load_p()
        
    }

    add_peases(){
        this.list_of_pieses = this.load_pieses.load_pieses()
        
    }

    load_p() {
        const square = document.querySelectorAll('.board_square')
        square.forEach(el => {
            let id = el.getAttribute('id');
            this.list_of_pieses.forEach(pies => {
                if (id === pies.coordinate) {
                    el.innerHTML = pies.photo
                }
            })
        })
    }
    

    update() {}
}



export default BlackBoard;