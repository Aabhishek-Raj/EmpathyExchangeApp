export class databaseConnectionError extends Error {

    statusCode = 500  
    reason = 'Error connecting to database' 

    constructor() {
        super()

        Object.setPrototypeOf(this, databaseConnectionError.prototype)
    }

    send() {
        const serializeError = {errors: [{ message: this.reason }]}

        return {
            body: serializeError,   
            statusCode: this.statusCode   
        }  
    }
}