import Tasks from '../models/tasks.js'
import asyncWrapper from '../middleware/async.js'
import createCustomError from '../errors/custom-error.js'

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Tasks.find({})
    res.status(200).json({ tasks })
})


const createTask = async (req, res) => {

    try {
        const task = await Tasks.create(req.body)
        res.status(201).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
// get single task
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Tasks.findOne({ _id: taskID })
        res.status(200).json({ task })

        console.log(taskID)

    } catch (error) {
        res.status(500).json({ msg: error })

    }
}


const deleteTask = asyncWrapper(async (req, res, next) => {

    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })

})


const updateTask = asyncWrapper(async (req, res, next) => {

    const { id: taskID } = req.params

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }

    res.status(200).json({ task })
})

export default
    {
        getAllTasks,
        createTask,
        updateTask,
        getTask,
        deleteTask
    }