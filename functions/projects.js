const Mongo = require('mongodb');

const uri = process.env.DATABASE_URI;
const options = {
	useUnifiedTopology: true
};

const allowedOrigins = ['https://wouter173.nl', 'https://wouterdb.nl', 'http://localhost:3000'];

exports.handler = (event, _context, callback) => {
	let origin = event.headers['origin'] || null;
	if (origin && !allowedOrigins.includes(origin)) return callback("Origin not allowed.");

	Mongo.MongoClient.connect(uri, options, (err, client) => {
		if (err) {
			client.close();
			return callback(err);
		}

		const db = client.db('Website');
		const collection = db.collection("Projects");

		collection.find({}).toArray((err, docs) => {
			client.close();
			if (err) return callback(err);
			return callback(null, {
				statusCode: 200,
				headers: {
					'Cache-Control': 'max-age=86400',
					'Access-Control-Allow-Origin': origin,
					'Vary': 'Origin'
				},
				body: JSON.stringify(docs)
			});
		});
	});
} 