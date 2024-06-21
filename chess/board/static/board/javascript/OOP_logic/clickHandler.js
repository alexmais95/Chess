'use strict';


class ClickHandler {
    constructor(){
        this.all_squere = document.getElementsByClassName('board_square');
    }

    event_listener(){
        const clic_element = [];
        for(const x of this.all_squere){
            x.addEventListener('click', function(){
                const id_of_element = x.getAttribute("id");
                const inner_html = document.getElementById(id_of_element).innerHTML;
                if (clic_element.length > 0){
                    clic_element[0].removeAttribute('style');
                    clic_element.length = 0;
                };

                if (inner_html.includes('pieses') && x.getAttribute('style') !== 'background-color: rgb(183, 80, 128);')
                {
                    document.getElementById(id_of_element).style.backgroundColor = 'yellow';
                    clic_element.push(x)
                };
            });
            
        };
    };


}


export default ClickHandler;