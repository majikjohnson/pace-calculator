import request from 'supertest';
import app from '../app';
import 'chai/register-should';

describe('Distance Calculation', () => {
    it('Calculates correct distance in kilometers for given pace in minutes per kilometers and time', async () => {
        const response = await request(app)
			.post('/api/distance/')
			.send({
				input: {
					resultUnit: 'kilometers',
					time: {
						hours: 0,
						minutes: 40,
						seconds: 0
					},
                    pace: {
						hours: 0,
						minutes: 7,
						seconds: 0,
						unit: 'kilometers',
					},
				},
			});
		response.statusCode.should.be.equal(200);
		response.body.distance.length.should.be.equal(5.714285714285714);
    });

    it('Calculates correct distance in miles for given pace in minutes per kilometers and time', async () => {
        const response = await request(app)
			.post('/api/distance/')
			.send({
				input: {
					resultUnit: 'miles',
					time: {
						hours: 0,
						minutes: 40,
						seconds: 0
					},
                    pace: {
						hours: 0,
						minutes: 4,
						seconds: 20,
						unit: 'kilometers',
					},
				},
			});
		response.statusCode.should.be.equal(200);
		response.body.distance.length.should.be.equal(5.735734082190775);
    });

    it('Calculates correct distance in kilometers for given pace in minutes per mile and time', async () => {
        const response = await request(app)
			.post('/api/distance/')
			.send({
				input: {
					resultUnit: 'kilometers',
					time: {
						hours: 0,
						minutes: 40,
						seconds: 0
					},
                    pace: {
						hours: 0,
						minutes: 6,
						seconds: 39,
						unit: 'miles',
					},
				},
			});
		response.statusCode.should.be.equal(200);
		response.body.distance.length.should.be.equal(9.680267656496621);
    });
});