class NotFoundError extends Error {
  constructor(name, message) {
    super(message);
    this.name = "NotFoundError";
  }
  toJSON() {
    let name = this.name;
    let message = this.message;
    return { name, message };
  }
}

try {
  throw new NotFoundError("NotFound Error", "This user is not Found");
} catch (error) {
  console.log(error); // { [NotFoundError: This user is not Found] name: 'NotFoundError' }
  console.log(error.message); // This user is not Found

  console.log(error.name); // NotFoundError

  console.log(error.toJSON()); // { name: 'NotFoundError', message: 'This user is not Found' }
}
