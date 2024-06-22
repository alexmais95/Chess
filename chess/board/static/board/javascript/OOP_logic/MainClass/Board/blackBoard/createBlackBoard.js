'use strict';


import GenerateIdForBlackBoard from "./generateIdForBlackBoard.js";
import AbsCreateBoard from "../../../ABSClass/abscreateBoard.js";


class CreateBlackBoard extends AbsCreateBoard {
    constructor() {
        super()
        this.gameBoard = document.querySelector('.board-container');
        this.id_generetor = new GenerateIdForBlackBoard()
    }


    create_board() {
       
        for (let i=1; i<=64; i++) {
            let square = document.createElement('div');
            square.classList.add('board_square');
            let row = Math.floor(63 - i / 8) + 1;
            if (row % 2 === 0){
                square.classList.add(i % 2 === 0 ? 'green' : 'white')
            } else {
                square.classList.add(i % 2 === 0 ? 'white' : 'green')
            }
            
            this.gameBoard.append(square);
       
        }
        this.id_generetor.generate_id();
    }
}



export default CreateBlackBoard;