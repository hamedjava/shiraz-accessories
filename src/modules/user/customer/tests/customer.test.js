import request from 'supertest';
import app from '../../../app.js';

describe('آزمون API مشتریان', () => {
  it('باید لیست مشتریان را برگرداند', async () => {
    const res = await request(app).get('/api/customers');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
