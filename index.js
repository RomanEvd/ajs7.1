export default class Validator {
    constructor () {
    }

    validateUsername(name) {
        if ((name.search(/[\w+\-?]+/) !== -1) && 
            (name.search(/(^[\d_\-].*|.*[\d_\-]$)/) === -1) && 
            (name.search(/.+\d{1,3}/) === -1)) {
            return 'Username is allowed';
        }
        throw new Error('Error: Please follow the Username guide.')
    }
}