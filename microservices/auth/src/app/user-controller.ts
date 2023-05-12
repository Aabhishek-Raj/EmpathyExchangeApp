import { ValidationError } from "../errors/validation-error"

interface Dependency {
    signupUserUsecase: Function
}

export const signupUserControllerFactory = ({ signupUserUsecase }: Dependency) => {

    return async function signupUserController({ body: userBody, ...httpRequest }: any) {

        try {
            const newUser = await signupUserUsecase({ body: userBody })

            if(newUser) {
                // await setJwt
            }
            console.log('error is above')
        console.log(newUser) 

        httpRequest.req.session = {
            jwt: 'kfjdkfj'
        }

            return { body: newUser , statusCode: 201}

        } catch (err) {
            console.log("**********")
            console.log(err)
            return err
        }
    }
}