import request from 'supertest';
import app from '../app';
import 'chai/register-should';

describe('Calculate Time Module', () => {
	it('calculates correct time for pace in miles and distance in miles', async () => {
		const response = await request(app)
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
		expect(response.statusCode).toEqual(200);
		response.body.time.hours.should.be.equal(3);
		response.body.time.minutes.should.be.equal(3);
		response.body.time.seconds.should.be.equal(31.875);
	});

	it('calculates correct time for pace in kilometers and distance in miles', async () => {
		const response = await request(app)
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
		expect(response.statusCode).toEqual(200);
		response.body.time.hours.should.be.equal(3);
		response.body.time.minutes.should.be.equal(2);
		response.body.time.seconds.should.be.equal(50.69688000000133);
	});

	it('calculates correct time for pace in miles and distance in kilometers', async () => {
		const response = await request(app)
			.post('/paceCalculator')
			.send({
				calculation: 'time',
				input: {
					distance: {
						length: 20,
						unit: 'kilometers',
					},
					pace: {
						hours: 0,
						minutes: 7,
						seconds: 0,
						unit: 'miles',
					},
				},
			});
		expect(response.statusCode).toEqual(200);
		response.body.time.hours.should.be.equal(1);
		response.body.time.minutes.should.be.equal(26);
		response.body.time.seconds.should.be.equal(59.51639999999952);
	});

	it('calculates correct time for pace in kilometers and distance in kilometers', async () => {
		const response = await request(app)
			.post('/paceCalculator')
			.send({
				calculation: 'time',
				input: {
					distance: {
						length: 10,
						unit: 'kilometers',
					},
					pace: {
						hours: 0,
						minutes: 4,
						seconds: 0,
						unit: 'kilometers',
					},
				},
			});
		expect(response.statusCode).toEqual(200);
		response.body.time.hours.should.be.equal(0);
		response.body.time.minutes.should.be.equal(40);
		response.body.time.seconds.should.be.equal(0);
	});
});
