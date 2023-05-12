import mongoose from 'mongoose'
import express, { json } from 'express'
import { router } from './routes/router'
import { errorHandler } from './libs/error-handlers'
import { NotFoundError } from './errors/not-found-error'
import cookieSession from 'cookie-session'

const app: express.Application = express()
app.use(json())

app.use('/', router) 


app.get('/api/users/currentuser', (req, res) => {
    res.send('Hello world !!')
})

app.all('*', (req, res) => {
    const notFound = new NotFoundError().send()
    res.status(404).send(notFound.body)    
})

app.set('trust proxy', true)
app.use(
    cookieSession({
        signed: true,
        secure: true
    })

) 
app.use()

const start = async () => {

    try {
        console.log('Connected to Mongodb')
        await mongoose.connect('mongodb://auth-mongo-svc:27017/auth')  

    } catch (err) {
        console.error(err)
    }

    app.listen(3000, () => {
        console.log('Listening at port 3000 ')
    })  
}

start()
