import { userEntity } from "../entity"
import { BadRequestError } from "../errors/bad-request"

export default function signupUserUsecaseFactory({ User }: any) {

    return async function signupUserUsecase({ body }: any) {
        
        const user = await userEntity(body)

        const email = user.getEmail()

        const existingUser = await User.findOne({ email })

        if(existingUser){
            throw new BadRequestError('Email already exist').send()
        }

        const newUser = User.build({ username: user.getUsername(), email: user.getEmail(), password: user.getPassword()})
        await newUser.save()

        return newUser
    }
}     