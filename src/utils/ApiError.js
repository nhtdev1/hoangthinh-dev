// Error belong to NodeJs
class ApiError extends Error {
	constructor(statusCode, message, isOperational = true, stack = '') {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		// Agr: this.constructor meaning the stack ignore this frame
		stack ? (this.stack = stack) : Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = ApiError;
