import LoginLocators from '../testcases/pageObjects/locators/login.locators';
import { email, password } from './constants';
const { remote } = require('webdriverio');
const Imap = require('imap-simple');
const { promisify } = require('util');
const imapConfig = {
  user: email,
  password: password,
  host: 'imap.gmail.com',
  port: 993,
  tls: true
};

let otp = '';

export async function fetchOtpFromEmail() {
  const connection = await Imap.connect({ imap: imapConfig });
  await connection.openBox('INBOX');

  const searchCriteria = ['UNSEEN'];
  const fetchOptions = { bodies: ['TEXT'], markSeen: true };

  const messages = await connection.search(searchCriteria, fetchOptions);

  if (messages.length > 0) {
    const body = messages[0].parts.filter(part => part.which === 'TEXT')[0].body;

    const otpMatch = body.match(/\d{5}/);
    if (otpMatch) {
      otp = otpMatch[0];
      console.log("OTP Found: " + otp);
      return otp;
    }
  }

  await connection.end();
}

export async function inputOtp(otp) {
  const otpArray = otp.split('');
  await (await $(LoginLocators.otpInput1)).setValue(otpArray[0]);
  await driver.pause(1000);
  await (await $(LoginLocators.otpInput2)).setValue(otpArray[1]);
  await driver.pause(1000);
  await (await $(LoginLocators.otpInput3)).setValue(otpArray[2]);
  await driver.pause(1000);
  await (await $(LoginLocators.otpInput4)).setValue(otpArray[3]);
  await driver.pause(1000);
  await (await $(LoginLocators.otpInput5)).setValue(otpArray[4]);
  await driver.pause(1000);
}


// import LoginLocators from '../testcases/pageObjects/locators/login.locators';
// import { email, password } from './constants';

// const { remote } = require('webdriverio');
// const Imap = require('imap-simple');
// const { promisify } = require('util');
// const imapConfig = {
//   user: email,
//   password: password,
//   host: 'alfredus.co',
//   port: 993,
//   tls: true
// };
// let otp = '';

// export async function fetchOtpFromEmail() {
//   const imap = new Imap(imapConfig);
//   const openBox = promisify(imap.openBox.bind(imap));

//   await new Promise((resolve, reject) => {
//     imap.once('error', reject);
//     imap.once('end', resolve);
//     imap.connect();
//   });

//   await openBox('INBOX');

//   const searchCriteria = ['UNSEEN'];
//   const fetchOptions = { bodies: ['TEXT'], markSeen: true };

//   const messages = await promisify(imap.search.bind(imap))(searchCriteria, fetchOptions);

//   if (messages.length > 0) {
//     const body = messages[0].parts.filter(part => part.which === 'TEXT')[0].body;

//     const otpMatch = body.match(/\d{5}/);
//     if (otpMatch) {
//       otp = otpMatch[0];  
//       console.log("OTP Found: " + otp);
//       return otp;
//     }
//   }

//   imap.end();
// }


// export async function inputOtp(otp) {
//   const otpArray = otp.split('');
//   await (await $(LoginLocators.otpInput1)).setValue(otpArray[0]);
//   await driver.pause(1000)
//   await (await $(LoginLocators.otpInput2)).setValue(otpArray[1]);
//   await driver.pause(1000)
//   await (await $(LoginLocators.otpInput3)).setValue(otpArray[2]);
//   await driver.pause(1000)
//   await (await $(LoginLocators.otpInput4)).setValue(otpArray[3]);
//   await driver.pause(1000)
//   await (await $(LoginLocators.otpInput5)).setValue(otpArray[4]);
//   await driver.pause(1000)
// }