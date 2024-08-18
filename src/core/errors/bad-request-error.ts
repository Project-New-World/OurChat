export class BadRequestError extends Error{
    statusCode:Number
    constructor(id:number){
        super (`Dado com id ${id} não encontrado.`)
        this.statusCode = 400
        Error.captureStackTrace(this,BadRequestError)
    }
}