exports.success = (message, statusCode, data) => {
  return {
    message,
    error: false,
    code: statusCode,
    data,
  };
};

exports.error = (message, statusCode) => {
  // List of common HTTP request code
  const codes = [200, 201, 400, 401, 404, 403, 422, 500];

  // Get matched code
  const findCode = codes.find((code) => code == statusCode);

  if (!findCode) statusCode = 500;
  else statusCode = findCode;

  return {
    message,
    code: statusCode,
    error: true,
  };
};

exports.validation = (errors) => {
  return {
    message: errors,
    error: true,
    code: 422,
  };
};
