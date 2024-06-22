'use strict';

import absGenerateId from "../../../ABSClass/absGenerateId.js";


class GenerateIdForBlackBoard extends absGenerateId {
    

    constructor (){
        super()
        this.laterArray = ["h", "g", "f", "e", "d", "c", "b", "a"];
        this.numberArrey = [1, 2, 3, 4, 5, 6, 7, 8]
        this.counter = 0
        this.numbCounter = 0
        
    }
    
    
    generate_id (){
      let arrayOfsquare = document.querySelectorAll(".board_square");
      for (const square of arrayOfsquare) {
        let numb = this.counter +1
        let id = this.laterArray[this.counter] + this.numberArrey[this.numbCounter]
        square.setAttribute("id", id);
        this.counter += 1
        if (this.counter === 8) {
          this.counter = 0
          this.numbCounter += 1
        }
      }
    }

        
    
    
}


export default GenerateIdForBlackBoard;