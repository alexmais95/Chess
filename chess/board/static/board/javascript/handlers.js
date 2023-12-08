class Halper{
    
    
    add_circle(list_el){    
        const div = "<div class='circle'></div>";
        for (let i of list_el){
            i.innerHTML = div;       
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

    remove_victim_color(){
        let square = document.querySelectorAll('.square');
        for(let i of square){
            if(i.getAttribute('style') == 'background-color: rgb(183, 80, 128);'){
                i.removeAttribute('style')
            }

        }
    }

    touch_handler(square){
        if(square.childNodes[0].className == 'pieses'){
            if(document.querySelectorAll('.touch').length == 0){
                 square.classList.add('touch');
            } else {document.querySelectorAll('.touch').forEach((el)=>{el.classList.remove('touch')})};
                 
        };
    }
}



export default Halper;