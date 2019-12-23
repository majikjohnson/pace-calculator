import request from 'supertest';
import app from '../app';

test('It passes', async () => {
	const res = await request(app)
		.post('/paceCalculator')
		.send({
			userId: 1,
			title: 'test is cool',
		});
	expect(res.statusCode).toEqual(200);
	expect(res.body).toHaveProperty('post');
});
