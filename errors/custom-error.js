// class for creating Custom error message
class CustomAPIError extends Error {

    constructor(message, statusCode) {
        // parameters from Error

        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

export default { CustomAPIError, createCustomError }