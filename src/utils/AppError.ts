type ErrorParam = {
  errors: string;
};

export class AppError {
  message: string;

  constructor() {
    this.message = "";
  }

  setError({ errors }: ErrorParam) {
    console.log(errors);

    this.message = errors;
  }
}
