'use strict';


class Generate_id {
    

    constructor (){
        this.arrayOfFiles = document.querySelectorAll(".files");
        this.filesNameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
        this.fileNumber = 0;
    }
    
    
    generate_id (){
        for (const i of this.arrayOfFiles) {
            let counter = 1;
            for (const el of i.children) {
              el.setAttribute("id", this.filesNameArray[this.fileNumber] + counter);
              counter++;
            }
            this.fileNumber++;
          }
    }
    
    
}


export default Generate_id;