'use strict';


class Marshrutizator {
    constructor(game, circle, victim) {
        this.game = game
        this.circle = circle
        this.victim = victim
    }

    chuse_move(id, name_click_element){
        console.log('IN MARSHRUTIZATOR')
        
        this.victim.remove_victim()
        this.circle.remove_circle()
        this.game.array_of_board.forEach(board=>{
            
            if (name_click_element === 'circle') {
                this.circle.circle_logic(board, id)
            } else if (name_click_element === 'pieses') {
                board.list_of_pieses.forEach(pies => {
                    pies.swich = false
                    if (pies.coordinate === id) {
                        pies.swich = true;
                        pies.move_logic.move(pies.coordinate[1], pies.coordinate[0], pies.name, this.circle, this.victim)                      
                    } 
                })
            } else if(name_click_element === 'victim') {    
                    this.victim.destroi_victim(id, board)
                }
            })   
        }
    }
export default Marshrutizator;




