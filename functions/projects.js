const Mongo = require('mongodb');

const uri = process.env.DATABASE_URI;
const options = {
	useUnifiedTopology: true
};

exports.handler = (_event, _context, callback) => {
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
					'Cache-Control': 'max-age=86400'
				},
				body: JSON.stringify(docs)
			});
		});
	});
} 