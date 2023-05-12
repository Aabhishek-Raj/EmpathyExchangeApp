import { signupUserControllerFactory } from "./user-controller"
import { signupUserUsecase } from "../usecase"


const signupUserController = signupUserControllerFactory({signupUserUsecase})

export { signupUserController }  