const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const config = require('../config/config');

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const transport = nodemailer.createTransport(config.email.smtp);

/* istanbul ignore next */
// if (config.env !== 'test') {
// 	transport
// 		.verify()
// 		.then(() => logger.info('Connected to email server'))
// 		.catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
// }

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text) => {
	const accessToken = await oAuth2Client.getAccessToken();
	let trans = config.email.smtp;
	trans.auth.accessToken = accessToken;
	const transport = nodemailer.createTransport(trans);
	const msg = { from: config.email.from, to, subject, text };
	await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
	const subject = 'Reset password';
	const resetPasswordUrl = `http://localhost:3000/v1/auth/reset-password?token=${token}`;
	const text = `Dear user,
	To reset your password, click on this link: ${resetPasswordUrl}
	If you did not request any password resets, then ignore this email.`;
	await sendEmail(to, subject, text);
};

/**
 *
 * @param {*} to
 * @param {*} token
 */
const sendVerificationEmail = async (to, token) => {
	const subject = 'Email Verification';
	const verificationEmailUrl = `http://localhost:3000/v1/auth/verify-email?token=${token}`;
	const text = `Dear user,
	To verify your email, click on this link: ${verificationEmailUrl}
	If you did not create an account, then ignore this email.`;
	await sendEmail(to, subject, text);
};

module.exports = {
	transport,
	sendEmail,
	sendResetPasswordEmail,
	sendVerificationEmail,
};
