'use strict';

import Marshrutizator from './MainClass/marshrutizator.js';
import PeasMixin from './Mixin/peasMixin.js';
import Circle from './MainClass/circle.js';
import Victim from './MainClass/victim.js'





class EventListener {
    constructor(game){
        this.halper = new PeasMixin();
        this.circle = new Circle;
        this.victim = new Victim;
        this.marshrutizator = new Marshrutizator(game, this.circle, this.victim)
        
    }

    handler(){
        let father_container = document.querySelector('.board-container')
        father_container.addEventListener('click',  (el)=>{this.move(el)});   
    }

    
    move(el){
        if(el.target.closest('.board_square').childNodes[0] !== undefined ){
            try{
                let cl_squere = el.target.closest('.board_square'),
                    name_click_element = cl_squere.childNodes[0].className;
                    
                if (cl_squere.firstChild.classList.contains('victim')) {
                    this.marshrutizator.chuse_move(cl_squere.getAttribute('id'), 'victim') 
                } else {
                    this.marshrutizator.chuse_move(cl_squere.getAttribute('id'), name_click_element)
                }
                
            } catch(err){console.log(err)};
        
        } else{
            console.log('Клітина пуста')
            this.victim.remove_victim()
            this.circle.remove_circle()
        };           
    }  
}


export default EventListener;