class ResultData {
  constructor(statusCode, message, data, exception) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.exception = exception;
  }

  // success(res, data) {
  //   return res
  //     .statusCode(200)
  //     .json(new ResultData(200, "İşlem başarılı!", data, null));
  // }

  // successWithMessage(res, message, data) {
  //   return res.statusCode(200).json(new ResultData(200, message, data, null));
  // }
}

module.exports = ResultData;
