'use strict';

import Generate_id from "./generate_id_for_squere.js";
import li_pies from './pies.js';


class Pieses {
    constructor(){
        this.g_id = new Generate_id();
        this.all_squere = document.getElementsByClassName('square');
        this.pies = li_pies;
    }

    handler(){
 
        let father_container = document.querySelector('.main-container')
        father_container.addEventListener('click',  (el)=>{this.move(el)});
        father_container.removeEventListener('click',  (el)=>{this.move(el)});
         
    }
    
    move(el){
  
        try{
            let cl_squere = el.target.closest('.square');
            if (cl_squere.classList.contains('second')){
                cl_squere.classList.remove('second')
                return
            };
            let pies = el.target.closest('.pieses');
            let name_of_pies = el.target.closest('.pieses').getAttribute('id');
            let square_id = cl_squere.getAttribute('id');
            let numb_id = parseInt(square_id[1]);
            let leter_id = square_id[0]
            let step_square = [];
        
            //console.log(cl_squere.children[0].classList)
  
            for (let i=0; i<2;i++){
                numb_id++;
                step_square.push(document.getElementById(leter_id + numb_id));
            };
            this.remove_circle()
            if(name_of_pies == 'pown_b'){
                this.add_circle(step_square);
                step_square.forEach((elem)=>{
                    elem.addEventListener('click',(el)=>{this.end_move(el, 'pown_b', cl_squere )}, {once:true});
                    elem.removeEventListener('click',(el)=>{this.end_move(el, 'pown_b', cl_squere )}, {once:true});
                })
                
            };

        } catch(err){}
                
    }




    //make shore we hawe one list, not list in list, or two list in one list
    split_two_arr(arr){
        const arr_ = []
        for(const i of arr){
            for(const j of i){
                arr_.push(j)
            }
        }
        return arr_
    }

    end_move(div, name_pies, b_div){
        let targ = div.target.closest('.square')
        try{
            if(targ.children[0].classList.contains('circle')){
                targ.innerHTML = this.pies[name_pies];
                targ.classList.add('second')
                this.remove_circle();
                b_div.removeChild(b_div.children[0]);

            } else{
                return
            }    
        } catch(err){}

       
    };
    //show how can you mowe
    add_circle(list_el){    
        const div = "<div class='circle'></div>";
        for (let i of list_el){
            i.innerHTML = div;       
        };   
    }


    //when you click - circle is remove
    remove_circle(){  
        let re_child = document.querySelectorAll('.circle');
        
        if(re_child){ 
            for (const i of re_child){
                i.parentNode.removeChild(i);
            };     
        };     
    }
}





export default Pieses;