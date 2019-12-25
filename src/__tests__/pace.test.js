import request from 'supertest';
import app from '../app';
import 'chai/register-should';

describe('Pace Calculation', () => {
	it('Calculates correct pace in minuites per kilometer for given distance in kilometers and time', async () => {
		const response = await request(app)
			.post('/api/pace/')
			.send({
				input: {
					resultUnit: 'kilometers',
					time: {
						hours: 0,
						minutes: 40,
						seconds: 0
					},
					distance: {
						length: 10,
						unit: 'kilometers'
					}
				},
			});
		expect(response.statusCode).toEqual(200);
		response.body.pace.hours.should.be.equal(0);
		response.body.pace.minutes.should.be.equal(4);
		response.body.pace.seconds.should.be.equal(0);
	});

	it('Calculates correct pace in minuites per mile for given distance in miles and time', async () => {
		const response = await request(app)
			.post('/api/pace/')
			.send({
				input: {
					resultUnit: 'miles',
					time: {
						hours: 1,
						minutes: 10,
						seconds: 10
					},
					distance: {
						length: 10,
						unit: 'miles'
					}
				},
			});
		expect(response.statusCode).toEqual(200);
		response.body.pace.hours.should.be.equal(0);
		response.body.pace.minutes.should.be.equal(7);
		response.body.pace.seconds.should.be.equal(1);
	});

	it('Calculates correct pace in minutes per mile for given distance in kilometers and time', async () => {
		const response = await request(app)
			.post('/api/pace/')
			.send({
				input: {
					resultUnit: 'miles',
					time: {
						hours: 0,
						minutes: 40,
						seconds: 0
					},
					distance: {
						length: 10,
						unit: 'kilometers'
					}
				},
			});
		expect(response.statusCode).toEqual(200);
		response.body.pace.hours.should.be.equal(0);
		response.body.pace.minutes.should.be.equal(6);
		response.body.pace.seconds.should.be.equal(26.242679494215224);
	});

	it('Calculates correct pace in miuntes per kilometer for given distance in miles and time', async () => {
		const response = await request(app)
			.post('/api/pace/')
			.send({
				input: {
					resultUnit: 'kilometers',
					time: {
						hours: 1,
						minutes: 10,
						seconds: 10
					},
					distance: {
						length: 10,
						unit: 'miles'
					}
				},
			});
		expect(response.statusCode).toEqual(200);
		response.body.pace.hours.should.be.equal(0);
		response.body.pace.minutes.should.be.equal(4);
		response.body.pace.seconds.should.be.equal(21.59727193191759);
	});
});
