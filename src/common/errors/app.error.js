class AppError {
  constructor({ message, status, code }) {
    this.message = message;
    this.status = status;
    this.code = code;
  }
}

export default AppError;
