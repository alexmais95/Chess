'use strict';

import absGenerateId from "../../../ABSClass/absGenerateId.js";


class GenerateIdForWhiteBoard extends absGenerateId {
    

    constructor (){
        super()
        this.laterArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
        this.numberArrey = [8, 7, 6, 5, 4, 3, 2, 1]
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


export default GenerateIdForWhiteBoard;