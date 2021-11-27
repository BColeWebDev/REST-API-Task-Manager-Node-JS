import express from "express"
import tasks from "../controller/tasks.js"

const router = express.Router()


router.route('/').get(tasks.getAllTasks).post(tasks.createTask)
router.route('/:id').get(tasks.getTask).patch(tasks.updateTask).delete(tasks.deleteTask)

export default router