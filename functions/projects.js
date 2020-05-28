exports.handler = async (_event, _context, callback) => {
	callback(
		null,
		{ statusCode: 200, body: 'We are now split testing!' }
	);
} 