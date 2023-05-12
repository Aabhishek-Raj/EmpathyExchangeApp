export class ValidationError extends Error {
    errors: Array<Object> = []

    constructor(public msg?: string) {
        super()
        Object.setPrototypeOf(this, ValidationError.prototype)
    }

    add(errors: string, feild: string) {
        this.errors.push({ message: errors, feild: feild })
    }

    isError() {
        return this.errors.length > 0
    }

    send() {
        const serializeError = this.msg || {errors: this.errors}

        return {
            body: serializeError,
            statusCode: 401
        }
    }
}