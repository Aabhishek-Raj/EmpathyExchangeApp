export class BadRequestError extends Error {
    statusCode = 400

    constructor(public message: string) {
        super()

        Object.setPrototypeOf(this, BadRequestError.prototype)
    }

    send() {
        const serializeError = { errors: [{ message: this.message }]} 
        
        return {
            body: serializeError,
            statusCode: this.statusCode
        }
    }
}