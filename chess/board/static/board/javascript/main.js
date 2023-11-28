import Chess_Board from './bord.js';
import li_pies from './pies.js';




function main() {
    let create_board = new Chess_Board(li_pies);
    create_board.insert_pieses();
    create_board.color();
};

main()
