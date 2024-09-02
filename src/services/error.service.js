class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.name = "InternalServerError";
    this.status = 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { InternalServerError };

