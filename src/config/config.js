// dotenv is a zero-dependency module that loads environment variables from .env file into process.env
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const Joi = require('joi');

const envVarsSchema = Joi.object()
	.keys({
		NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
		PORT: Joi.number().default(3000),
		MONGODB_URL: Joi.string().required().description('Mongo DB url'),
		JWT_SECRET: Joi.string().required().description('JWT secret key'),
		JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
		JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
		JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number().default(10).description('minutes after which reset token expires'),
		JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
			.default(10)
			.description('minutes after which verify email token expires'),
		SMTP_HOST: Joi.string().description('server that will send the emails'),
		SMTP_TYPE: Joi.string(),
		SMTP_PORT: Joi.number().description('port to connect to the email server'),
		SMTP_USENAME: Joi.string().description('username for the email server'),
		EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
		CLIENT_ID: Joi.string(),
		CLIENT_SECRET: Joi.string(),
		REDIRECT_URL: Joi.string(),
		REFRESH_TOKEN: Joi.string(),
	})
	.unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	mongoose: {
		url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	},
	jwt: {
		secret: envVars.JWT_SECRET,
		accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
		refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
		resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
		verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
	},
	email: {
		smtp: {
			service: envVars.SMTP_HOST,
			type: envVars.SMTP_TYPE,
			auth: {
				type: envVars.SMTP_TYPE,
				user: envVars.SMTP_USERNAME,
				clientId: envVars.CLIENT_ID,
				clientSecret: envVars.CLIENT_SECRET,
				refreshToken: envVars.REFRESH_TOKEN,
			},
		},
		from: envVars.EMAIL_FROM,
	},
};
