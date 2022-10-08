class Result {
  constructor(statusCode, message, exception) {
    this.statusCode = statusCode;
    this.message = message;
    this.exception = exception;
  }

  // success(res) {
  //   return res.statusCode(200)
  //   .json(new Result(200, "İşlem başarılı!", null));
  // }

  // successWithMessage(res, message) {
  //   return res.statusCode(200)
  //   .json(new Result(200, message, null));
  // }
}

module.exports = Result;
