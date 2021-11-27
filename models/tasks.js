import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

// creating copy model data schema to be sent to mongodb
export default mongoose.model('task', schema)