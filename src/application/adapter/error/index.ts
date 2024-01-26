interface IError {
  title: string;
  message: string;
  statusCode: number;
}

class AppError extends Error {
  public readonly title: string;
  public readonly message: string;
  public readonly statusCode: number;

  constructor({ title, message, statusCode = 400 }: IError) {
    super(message);
    this.title = title;
    this.message = message;
    this.statusCode = statusCode;
  }

  get error() {
    return {
      message: this.message,
      title: this.title,
      statusCode: this.statusCode,
    };
  }
}

export default AppError;
