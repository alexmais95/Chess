"use strict"

import AbsGame from "../ABSClass/absGame.js"
import PeasMixin from "../Mixin/peasMixin.js"



class Game extends AbsGame{
    constructor() {
        super()
        this.helper = new PeasMixin()
        this.array_of_board = []
        
    }

    main_create_board() {
        for (let bord of this.array_of_board) {
            bord.load_board();  
        }
    }

    register_board(board) {
        this.array_of_board.push(board)
    }

    notify_board() {}
}



export default Game;


