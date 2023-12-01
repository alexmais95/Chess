'use strict';

import Generate_id from "./generate_id_for_squere.js";


class Pown {
    constructor(){
        this.g_id = new Generate_id();
    }

    pown_handler(){
        const array_of_pown = []
        const file_arrey = this.g_id.filesNameArray;
        
        //push black
        for (const i of file_arrey){
            array_of_pown.push(document.getElementById(i + 2))
        }

        //push white
        for (const i of file_arrey){
            array_of_pown.push(document.getElementById(i + 7))
        }
        
        
        for (const i of array_of_pown) {
            i.addEventListener('click', () => {
                const curent_id = i.getAttribute('id');
                let numb_of_id = parseInt(curent_id[1]);
                const step_square = [];
                
                for (let i=0; i<2;i++){
                    numb_of_id++;
                    step_square.push(document.getElementById(curent_id[0] + numb_of_id));
                };
                
                this.remove_circle(); 
                this.add_circle(step_square);
            })
        }
    }

    add_circle(list_el){    
        const div = "<div class='circle'></div>";
        for (let i of list_el){
            i.innerHTML = div;   
        };   
    }

    remove_circle(){
        
        let re_child = document.querySelectorAll('.circle');
        
        if(re_child){
            for (const i of re_child){
                i.parentNode.removeChild(i);
            };     
        };     
    }
}





export default Pown;