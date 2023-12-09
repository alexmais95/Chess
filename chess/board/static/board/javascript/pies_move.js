'use strict';

import li_pies from './pies.js';
import Pawn_b from './pieses_logic/pawn/pawn_b.js';
import Pawn_w from "./pieses_logic/pawn/pawn_w.js";
import Knight from './pieses_logic/knight/knight.js';
import Helper from './handlers.js';



class Pieses {
    constructor(){
        this.pies = li_pies;
        this.helper = new Helper;
        this.pown_b = new Pawn_b;
        this.pown_w = new Pawn_w;
        this.knight = new Knight;
        this.l_p = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h']
    }

    handler(){
        
       
        let father_container = document.querySelector('.main-container')
        father_container.addEventListener('click',  (el)=>{this.move(el)});
        
         
    }
    
    move(el){
        
        if(el.target.closest('.square').childNodes[0] !== undefined){
            
            try{
                

                let cl_squere = el.target.closest('.square'),
                    arr_sq = [...cl_squere.classList],                
                    numb_id = cl_squere.getAttribute('id')[1],
                    leter_id = cl_squere.getAttribute('id')[0],
                    pies_name = cl_squere.childNodes[0].id,
                    squere_id_numb = cl_squere.getAttribute('id')[1];

                if(cl_squere.getAttribute('style') !== 'background-color: rgb(183, 80, 128);'){
                    this.helper.touch_handler(cl_squere);
                };
                
                if(pies_name == 'pown_b' && squere_id_numb == 2 && !arr_sq.includes('victim') ){
                    this.helper.remove_victim()
                    this.helper.remove_circle();
                    this.pown_b.first_move_pawn_b(numb_id,leter_id, pies_name);
        
                };

                if(pies_name == 'pown_b' && squere_id_numb > 2 && !arr_sq.includes('victim') ){
                    this.helper.remove_victim()
                    this.helper.remove_circle();
                    this.pown_b.second_move_pawn_b(numb_id,leter_id, pies_name);
        
                };

                if(pies_name == 'pown_w' && squere_id_numb == 7 && !arr_sq.includes('victim')  ){
                    this.helper.remove_victim()
                    this.helper.remove_circle();
                    this.pown_w.first_move_pawn_w(numb_id,leter_id, pies_name);
        
                };

                if(pies_name == 'pown_w' && squere_id_numb < 7 && !arr_sq.includes('victim') ){
                    this.helper.remove_victim()
                    this.helper.remove_circle();
                    this.pown_w.second_move_pawn_w(numb_id,leter_id, pies_name);
                    
                };

                if(pies_name == 'knight_b' || pies_name == 'knight_w'){
                    this.helper.remove_victim()
                    this.helper.remove_circle();
                    this.knight.move_kn(numb_id, leter_id, pies_name);
                };
                  
                if (cl_squere.childNodes[0].className == 'circle' || arr_sq.includes('victim')){
                    this.helper.remove_victim()
                    this.helper.remove_circle();
                    this.helper.end_move(cl_squere);
                };
 
            } catch(err){console.log(err)};
        
        } else{console.log('Клітина пуста')};           
    }  
}



export default Pieses;