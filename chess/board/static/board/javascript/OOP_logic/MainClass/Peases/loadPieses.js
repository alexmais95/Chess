'use strict';


import AbsLoadPieses from "../../ABSClass/absLoadPieses.js";
import li_pies from "../../ooppies.js";
import Peas from "./peas.js";



class LoadPies extends AbsLoadPieses {
    constructor(board) {
        super()
        this.board = board
        this.pieses = li_pies;
    }

    load_pieses() {
        const list_pies = []
        for (const [key, value] of Object.entries(this.pieses)) {
            
            value[1].forEach(el => {
                let mvlogic
                if (value[3] != undefined) {
                    mvlogic = new value[2](this.board, value[3]);
                } else {
                    mvlogic = new value[2](this.board);
                }
                const peas = new Peas(el, key, value[0], mvlogic, value[3]);
                list_pies.push(peas)
            })   
              
        }
        return list_pies
                
    }

}


export default LoadPies;