import playwright from 'playwright';
import { sendSmsNotification } from './twilio.js';
const randomInterval = () => Math.floor(Math.random() * (120 - 60 + 1) + 60);
const checkAndRepeat = async () => {
    // check page for available goodies
    const unavailable = true; //
    if (unavailable) {
        console.log('Nothing available');
        setTimeout(checkAndRepeat, 1000 * randomInterval());
        return;
    }
    console.log('SUCCESS!!! WOAH!!!');
    sendSmsNotification();
};
// Start script here
if (!process.env.URL) {
    console.error("missing URL environment variable");
    process.exit(1);
}
const browser = await playwright.chromium.launch({ headless: false, slowMo: 50 });
const page = await browser.newPage();
await page.goto(process.env.URL);
console.log("hello world");
// login if necessary, and navigate to page to be checked/refreshed
//
// checkAndRepeat();
//  TODO:
// 1. ts
// 2. prettier
// 3. non-tsc option?
