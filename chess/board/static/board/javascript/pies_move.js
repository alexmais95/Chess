'use strict';

import li_pies from './pies.js';
import Pawn_b from './pieses_logic/pawn/pawn_b.js';
import Pawn_w from "./pieses_logic/pawn/pawn_w.js";


class Pieses {
    constructor(){
        this.pies = li_pies;
        this.pown_b = new Pawn_b;
        this.pown_w = new Pawn_w;
        this.l_p = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h']
    }

    handler(){
        
       
        let father_container = document.querySelector('.main-container')
        father_container.addEventListener('click',  (el)=>{this.move(el)});
        
         
    }
    
    move(el){
        
        if(el.target.closest('.square').childNodes[0] !== undefined){
            
            try{
                console.log(this.l_p.indexOf('c')+1)

                let cl_squere = el.target.closest('.square');
                
                if(document.querySelectorAll('.touch').length == 0){
                    cl_squere.classList.add('touch')
                }
                let numb_id = cl_squere.getAttribute('id')[1];
                let leter_id = cl_squere.getAttribute('id')[0];
                let pies_name = cl_squere.childNodes[0].id;
                let squere_id_numb = cl_squere.getAttribute('id')[1]
                
                if(pies_name == 'pown_b' && squere_id_numb == 2 ){
                    this.pown_b.first_move_pawn_b(numb_id,leter_id);
        
                };

                if(pies_name == 'pown_b' && squere_id_numb > 2 ){
                    this.pown_b.second_move_pawn_b(numb_id,leter_id);
        
                };

                if(pies_name == 'pown_w' && squere_id_numb == 7 ){
                    this.pown_w.first_move_pawn_w(numb_id,leter_id);
        
                };

                if(pies_name == 'pown_w' && squere_id_numb < 7 ){
                    this.pown_w.second_move_pawn_w(numb_id,leter_id);
        
                };
                  
                if (cl_squere.childNodes[0].className == 'circle'){
                    this.end_move(cl_squere);
                }
 
            } catch(err){console.log(err)};
        
        } else{console.log('Клітина пуста')};
       
                
    }

    end_move(squere){
        let re_child = document.querySelectorAll('.circle');
        let touch = document.querySelectorAll('.touch');
        let name_piese = touch[0].childNodes[0].id;

        if(re_child){ 
            for (const i of re_child){
                i.parentNode.removeChild(i);
            };             
        }

        try{
            squere.innerHTML = this.pies[name_piese]; 
            touch[0].removeChild(touch[0].childNodes[0]);
            touch.forEach((el)=>{el.classList.remove('touch')});   
        } catch(err){console.log(err)};
    }
}



export default Pieses;