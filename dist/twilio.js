import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
export const sendSmsNotification = async () => {
  if (!process.env.FROM_PHONE || !process.env.TO_PHONE) {
    console.error('Missing Twilio environment variables');
    return;
  }
  const message = await client.messages.create({
    body: 'Success!! Check the Webite ASAP',
    from: process.env.FROM_PHONE,
    to: process.env.TO_PHONE, // Your phone
  });
  console.log(message.sid);
};
