'use strict';

class Chess_Board {

    constructor(pieses) {
        this.pies = pieses;
    }

    insert_pieses() {
        for (var el in this.pies) {
            var pies = this.pies[el]
            document.querySelectorAll('.square').forEach((pieces) => {
                if (pieces.innerText === el) {
                    pieces.innerHTML = pies
                };
            });
        };
    }


}

export default Chess_Board;