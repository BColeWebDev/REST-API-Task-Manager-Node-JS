import express from "express"
import connectDB from "./db/connection.js"
import app from "./server.js"
import tasks from "./routes/tasks.js"
import env from "dotenv"
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from "./middleware/error-handler.js"
env.config()
//Middleware - Functions that handle that handle to the request and response object
app.use(express.json())

// base route
app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;


// router.get('localhost:3000/api/v1/tasks', getPeople)
// router.post('localhost:3000/api/v1/tasks', createPerson)
// router.post('localhost:3000/api/v1/tasks/:id', createPersonPostman)
// router.put('localhost:3000/api/v1/tasks/:id', updatePerson)
// router.delete('localhost:3000/api/v1/tasks/:id', deletePerson)




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(port, () => {
            console.log('server is listening on port 5000...')
        })
    } catch (error) {
        console.log(error)
    }
}
start()
