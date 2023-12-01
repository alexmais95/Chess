
class Click_handler {
    constructor(){
        this.all_squere = document.getElementsByClassName('square');
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

                if (inner_html.includes('pieses'))
                {
                    document.getElementById(id_of_element).style.backgroundColor = 'yellow';
                    clic_element.push(x)
                };
            });
            
        };
    };


}


export default Click_handler;
