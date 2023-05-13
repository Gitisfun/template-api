import ApiError from "../errors/ApiError.js";
import Logger from "../middleware/logger.js";

function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    Logger.error(err.message);
    res.status(err.code).json(err.message);
    next();
    return;
  }
  res.status(500).json("Something went wrong on the server");
}

export default errorHandler;
