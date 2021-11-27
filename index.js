import express from "express"
import connectDB from "./db/connection.js"
import app from "./server.js"
import tasks from "./routes/tasks.js"
import env from "dotenv"
env.config()
//Middleware - Functions that handle that handle to the request and response object
app.use(express.json())

// base route
app.get('/hello', (req, res) => res.status(200).send('<h1> Home Page </h1> '))



app.use('/api/v1/tasks', tasks)


// client-side routes - localhost:3000
// server-side routes - localhost:5000 

// router.get('localhost:3000/api/v1/tasks', getPeople)
// router.post('localhost:3000/api/v1/tasks', createPerson)
// router.post('localhost:3000/api/v1/tasks/:id', createPersonPostman)
// router.put('localhost:3000/api/v1/tasks/:id', updatePerson)
// router.delete('localhost:3000/api/v1/tasks/:id', deletePerson)

// listening to port 5000



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(5000, () => {
            console.log('server is listening on port 5000...')
        })
    } catch (error) {
        console.log(error)
    }
}
start()
