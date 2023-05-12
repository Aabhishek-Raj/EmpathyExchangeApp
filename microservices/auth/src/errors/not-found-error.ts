export class NotFoundError extends Error {
    statusCode = 404
    reason = 'Not Found' 

    constructor(){
        super()

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    send() {
        const serializeError = {errors: [{ message: this.reason }]}

        return {
            body: serializeError,   
            statusCode: this.statusCode   
        }  
    }
}