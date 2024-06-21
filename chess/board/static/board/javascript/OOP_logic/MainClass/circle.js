'use strict';



class Circle {
    constructor() {
        
    }

    circle_logic(board, id) {
        board.list_of_pieses.forEach(pies => {
            if (pies.swich === true) {
                if(pies.move_logic.first_move === true) {
                    pies.move_logic.first_move = false
                }
                pies.coordinate = id  
                pies.swich = false;
            }
            pies.victim = false
            
        })
        this.move_pies(board)
    }

    move_pies(board) {
        const square = document.querySelectorAll('.board_square')
        square.forEach(el => {
           while (el.firstChild) {
                el.removeChild(el.firstChild)
           }
            
        })
        board.list_of_pieses.forEach(pies => {
            square.forEach(el => {
                let id = el.getAttribute('id');
                if (id === pies.coordinate) {
                    el.innerHTML = pies.photo
                }
                
            })
           
        })

    }

    remove_circle(){
        let circle = document.querySelectorAll('.circle');
        if(circle){ 
            for (const i of circle){
                i.parentNode.removeChild(i);
            };             
        }
    }

    add_circle(list_el){    
        const div = "<div class='circle'></div>";
        for (let i of list_el){
            if(i !== null){
                if(i.childNodes.length == 0){
                    i.innerHTML = div;
                }
            }
            
                   
        };   
    }
}




export default Circle;