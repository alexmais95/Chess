'use strict';



class Victim {
    constructor() {

    }

    
    destroi_victim(id, board) {
        let counter = 0;
        board.list_of_pieses.forEach(pies => {
            if (pies.swich === true) {
                if(pies.move_logic.first_move === true) {
                    pies.move_logic.first_move = false
                }
                pies.coordinate = id  
                pies.swich = false;
            } else if (pies.coordinate === id) {
                board.list_of_pieses.splice(counter, 1)
                
            }
            counter += 1;
            
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
    
    
    victim_logic(list, peas_name, board){
       
        for( let i of list){
            if(i !== null){ 
                if(i.childNodes.length !== 0 && i.childNodes[0].className == 'pieses' ){ 
                    if(this.last_leter(peas_name, i)){
                        let id = i.getAttribute('id');
                        document.getElementById(id).style.backgroundColor = '#b75080';
                        i.firstChild.classList.add('victim')
                        
                        
                        // for(let pies of board.list_of_pieses) {
                        //     if (pies === undefined){
                        //         continue
                        //     }
                        //     if (pies.coordinate === id) {
                        //         pies.victim = true;
                        //     }
                        // }
                    }
                       
                } 
            }
        }  
    }

    last_leter(t_name, e_name){
        let name = e_name.childNodes[0].id,
            name_1 = name[name.length - 1],
            name_2 = t_name[t_name.length - 1];
        if(name_1 !== name_2){
            return true
        }
    }

    remove_victim(){
        let square = document.querySelectorAll('.board_square');
        for(let i of square){
            if(i.getAttribute('style') == 'background-color: rgb(183, 80, 128);'){
                i.removeAttribute('style')
            }

        }
        document.querySelectorAll('.victim').forEach((el)=>{el.classList.remove('victim')})
    }


    touch_handler(square){
        if(square.childNodes[0].className == 'pieses'){
            if(document.querySelectorAll('.touch').length == 0){
                 square.classList.add('touch');
            } 
            if (document.querySelectorAll('.touch').length !== 0){
                this.remove_touch();
                square.classList.add('touch')
            }
                 
        };
    }

    remove_touch(){
        document.querySelectorAll('.touch').forEach((el)=>{el.classList.remove('touch')})
    }

    end_move(squere){
        
        let touch = document.querySelectorAll('.touch');
        let name_piese = touch[0].childNodes[0].id;
        try{
            squere.innerHTML = this.pies[name_piese]; 
            touch[0].removeChild(touch[0].childNodes[0]);
            touch.forEach((el)=>{el.classList.remove('touch')});   
        } catch(err){console.log(err)};
        
        this.remove_victim();
        this.change_torn()
    }
}



export default Victim;