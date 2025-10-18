import { CustomError } from '../errors/customError.js';

export function errorHandler(err, req, res, next) {
  console.error('🔥 خطا:', err.message);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'خطای داخلی سرور',
  });
}
