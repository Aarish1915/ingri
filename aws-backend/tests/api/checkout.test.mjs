import request from 'supertest';
import app from '../../src/app.mjs';

describe('POST /api/orders/checkout', () => {
  it('should block checkout if pincode is invalid', async () => {
    // Temporarily enforce a strict pincode rule for this test
    process.env.ALLOWED_PINCODES = "110001,110002";
    
    const res = await request(app)
      .post('/api/orders/checkout')
      .send({
        customerName: "Test User",
        customerEmail: "test@test.com",
        customerPhone: "9999999999",
        customerPincode: "999999", // Invalid pincode
        total: 500,
        orderType: "delivery",
        items: [{ name: "Cake", price: 500, quantity: 1 }]
      });

    expect(res.status).toBe(400);
    expect(res.body.error).toContain("Sorry, we do not deliver to pincode 999999");
  });
});
