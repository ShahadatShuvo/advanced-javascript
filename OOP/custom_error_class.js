class NotFoundError extends Error {
  constructor(name, message) {
    super(message); // we can giva as rest  ...rest
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
  if (error instanceof NotFoundError) {
    console.log("yes"); // yes

    console.log({
      error: 404,
      details: error.toJSON(),
    }); // { error: 404, details: { name: 'NotFoundError', message: 'This user is not Found' } }
  }
  console.log(error); // { [NotFoundError: This user is not Found] name: 'NotFoundError' }
  console.log(error.message); // This user is not Found

  console.log(error.name); // NotFoundError

  console.log(error.toJSON()); // { name: 'NotFoundError', message: 'This user is not Found' }
}
