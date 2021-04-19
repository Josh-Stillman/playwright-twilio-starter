import playwright from 'playwright';

import { sendSmsNotification } from './twilio.js';
import { getRandomIntervalMinutes, getRandomIntervalSeconds } from './utils.js';

const checkAndRepeat = async () => {
  // check page for available goodies

  const unavailable = true; // replace with page-specific logic

  if (unavailable) {
    console.log('Nothing available');

    setTimeout(checkAndRepeat, getRandomIntervalMinutes(10, 15));

    return;
  }

  console.log('SUCCESS!!! WOAH!!!');

  sendSmsNotification();

  // Keep chromium open so you can do your thing after you get the SMS.
};

// Start script here

if (!process.env.URL) {
  console.error('missing URL environment variable');
  process.exit(1);
}

const browser = await playwright.chromium.launch({
  headless: false,
  slowMo: 50,
});

const page = await browser.newPage();

await page.goto(process.env.URL);

// login if necessary, and navigate to page to be checked/refreshed

checkAndRepeat();
