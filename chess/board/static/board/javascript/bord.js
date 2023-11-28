class Chess_Board {

    constructor(pieses) {
        this.pies = pieses;
    }

    insert_pieses() {
        for (var el in this.pies) {
            var pies = this.pies[el]
            document.querySelectorAll('.box').forEach((pieces) => {
                if (pieces.innerText === el) {
                    pieces.innerHTML = pies
                };
            });
        };
    }


    color() {
        document.querySelectorAll('.box').forEach((coloring) => {
            let get_id = coloring.id
            console.log(get_id[0])
            if (get_id[0] % 2 == 0) {
                if (get_id % 2 == 0) {
                    coloring.style.backgroundColor = '#769656'
                } else { coloring.style.backgroundColor = '#EEEED2' }
            };

            if (get_id[0] % 2 == 1) {
                if (get_id % 2 == 0) {
                    coloring.style.backgroundColor = '#EEEED2'
                } else { coloring.style.backgroundColor = '#769656' }
            };
        });
    }

}

export default Chess_Board;