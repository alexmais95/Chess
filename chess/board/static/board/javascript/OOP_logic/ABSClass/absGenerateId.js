'use strict';


class AbsGenerateId {
    constructor(){
        if (this.constructor.name === 'AbsGenerateId') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
    }

    generate_id() {}
}


export default AbsGenerateId;