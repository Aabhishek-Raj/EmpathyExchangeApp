import signupUserUsecaseFactory from "./signupUserUsecase"
import { User } from '../models/user'

const signupUserUsecase = signupUserUsecaseFactory({User})
 
export { signupUserUsecase } 