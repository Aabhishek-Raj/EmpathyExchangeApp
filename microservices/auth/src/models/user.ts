import mongoose from 'mongoose'
import { PasswordService } from '../services/hash-password'

interface UserAtrrs {
    username: string
    email: string
    password: string
}

interface UserDoc extends mongoose.Document {
    username: string
    email: string
    password: string
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAtrrs): UserDoc
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    }
})

userSchema.pre('save', async function(done) {
    if(this.isModified('password')) {
        const hashed = await PasswordService.hash(this.get('password'))
        this.set('password', hashed)
    }
    done()
})

userSchema.statics.build = (attrs: UserAtrrs) => {
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)
export { User }