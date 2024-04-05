type ErrorParam = {
  errors: string;
};

export class AppError {
  message: string;

  constructor() {
    this.message = "";
  }

  setError({ errors }: ErrorParam) {
    this.message = errors;
  }
}
