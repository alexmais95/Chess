'use strict';

import Game from "./MainClass/game.js";
import FirstBoard from "./MainClass/Board/firstBoard.js";
import ClickHandler from "./clickHandler.js";
import EventListener from "./eventListener.js";

const game = new Game;
const first_board = new FirstBoard(game); 
const click_handler = new ClickHandler;
const listener = new EventListener(game);


function main() { 
   
    game.main_create_board();
    listener.handler();
    click_handler.event_listener();


};

main()