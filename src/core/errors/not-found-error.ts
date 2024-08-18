export class NotFoundError extends Error{
    statusCode:Number
    constructor(message:string){
        super (message)
        this.statusCode = 404
        Error.captureStackTrace(this,NotFoundError)
    }
}