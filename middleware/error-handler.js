import Error from '../errors/custom-error.js'
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof Error.CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

export default errorHandlerMiddleware