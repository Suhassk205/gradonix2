export const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    return res.status(500).json({ success: false, resError: error.message });
  } catch (error) {
    next(error);
  }
};
