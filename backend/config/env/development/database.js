module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'domofond_db'),
			user: env('DATABASE_USERNAME', 'kirill'),
			password: env('DATABASE_PASSWORD', 'hakerman123'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
