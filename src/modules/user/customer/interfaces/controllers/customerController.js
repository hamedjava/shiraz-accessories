import { getAllCustomers } from '../../application/services/customerService.js';

export async function getAll(req, res, next) {
  try {
    const result = await getAllCustomers();
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
}
