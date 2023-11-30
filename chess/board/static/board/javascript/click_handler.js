
class Click_handler {
    constructor(){
        this.all_squere = document.getElementsByClassName('square')
    }

    event_listener(){
        for(const x of this.all_squere){
            x.addEventListener('click', function(){
                const id_of_element = x.getAttribute("id");
                const inner_html = document.getElementById(id_of_element).innerHTML;
                
                if (inner_html.includes('pieses'))
                {
                    document.getElementById(id_of_element).style.backgroundColor = 'yellow';
                };
            })
            
        }
    }


};


export default Click_handler;
