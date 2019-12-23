import request from 'supertest';
import app from '../app';
import 'chai/register-should';

/*
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
*/

describe('Calculate Time Module', () => {
	it('calculates correct time for pace in miles and distance in miles', async () => {
		const res = await request(app)
			.post('/paceCalculator')
			.send({
				calculation: 'time',
				input: {
					distance: {
						length: 26.21875,
						unit: 'miles',
					},
					pace: {
						hours: 0,
						minutes: 7,
						seconds: 0,
						unit: 'miles',
					},
				},
			});
		expect(res.statusCode).toEqual(200);
		res.body.time.hours.should.be.equal(3);
		res.body.time.minutes.should.be.equal(3);
		res.body.time.seconds.should.be.equal(31.875);
	});

	it('calculates correct time for pace in kilometers and distance in miles', async () => {
		const res = await request(app)
			.post('/paceCalculator')
			.send({
				calculation: 'time',
				input: {
					distance: {
						length: 26.21875,
						unit: 'miles',
					},
					pace: {
						hours: 0,
						minutes: 4,
						seconds: 20,
						unit: 'kilometers',
					},
				},
			});
		expect(res.statusCode).toEqual(200);
		res.body.time.hours.should.be.equal(3);
		res.body.time.minutes.should.be.equal(2);
		res.body.time.seconds.should.be.equal(50.69688000000133);
	});
});
