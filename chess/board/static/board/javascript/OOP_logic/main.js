'use strict';

import Game from "./MainClass/game.js";
import WhiteBoard from "./MainClass/Board/whiteBoard/whiteBoard.js";
import BlackBoard from "./MainClass/Board/blackBoard/blackBoard.js";
import ClickHandler from "./clickHandler.js";
import EventListener from "./eventListener.js";

const game = new Game,
    //whiteBoard = new WhiteBoard(game),
    blackBoard = new BlackBoard(game),
    click_handler = new ClickHandler,
    listener = new EventListener(game);


function main() { 
   
    game.main_create_board();
    listener.handler();
    click_handler.event_listener();


};

main()