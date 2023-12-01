'use strict';

import Chess_Board from './bord.js';
import li_pies from './pies.js';
import Generate_id from './generate_id_for_squere.js';
import Click_handler from './click_handler.js';
import Pown from './pies_move.js';

const create_board = new Chess_Board(li_pies);
const generate_id = new Generate_id();
const click_handler = new Click_handler();
const pown = new Pown(); 


function main() { 
    create_board.insert_pieses();
    generate_id.generate_id();
    click_handler.event_listener();
    pown.pown_handler();
};

main()
