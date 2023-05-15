import ApiError from "../errors/ApiError.js";
import Logger from "../middleware/logger.js";

function errorHandler(err, req, res, next) {
  Logger.error(err.message);
  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    next();
    return;
  }
  res.status(500).json("Something went wrong on the server");
}

export default errorHandler;
