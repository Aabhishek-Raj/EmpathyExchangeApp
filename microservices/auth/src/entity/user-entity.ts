import { databaseConnectionError } from "../errors/database-connection-error"
import { ValidationError } from "../errors/validation-error"

interface UserData {
    username: string,
    email: string,
    password: string
}

export function userEntityFactory() {
    return async function userEntity({ username, email, password}: UserData) {

        const newValidationError = new ValidationError()
        if(!username) {
            newValidationError.add('give an username', 'username')
        }  
        if(!email || !email.includes('@')) {      
            newValidationError.add('give an email', 'email')
        }
        if(!password || password.length < 4 || password.length > 10) {
            newValidationError.add('give an valid password', 'password')  
        }
        if(newValidationError.isError()) {
            throw newValidationError.send()
        }

        // const passWordMatch = await password.com  
        return Object.freeze({
            getUsername: () => username,     
            getEmail: () => email,
            getPassword: () => password
        })
    }
}