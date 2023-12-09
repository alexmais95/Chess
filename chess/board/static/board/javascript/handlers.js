'use strict';

import li_pies from "./pies.js";


class Helper{

    constructor(){
        this.pies = li_pies;
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

    remove_circle(){
        let circle = document.querySelectorAll('.circle');
        if(circle){ 
            for (const i of circle){
                i.parentNode.removeChild(i);
            };             
        }
    }


    victim_logic(list, peas_name){
        for( let i of list){
            if(i !== null){ 
                if(i.childNodes.length !== 0 && i.childNodes[0].className == 'pieses' ){ 
                    if(this.last_leter(peas_name, i)){
                        document.getElementById(i.getAttribute('id')).style.backgroundColor = '#b75080';
                        i.classList.add('victim')
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
        let square = document.querySelectorAll('.square');
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
    }
}



export default Helper;