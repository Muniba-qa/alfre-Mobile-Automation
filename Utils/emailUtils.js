const { remote } = require('webdriverio');
const Imap = require('imap-simple');
const { promisify } = require('util');
const imapConfig = {
  user: 'qa2@alfredus.co',
  password: 'AlfredusQA#25',
  host: 'alfredus.co',
  port: 993,
  tls: true
};
let otp = '';

export async function fetchOtpFromEmail() {
  const imap = new Imap(imapConfig);
  const openBox = promisify(imap.openBox.bind(imap));
  
  await new Promise((resolve, reject) => {
    imap.once('error', reject);
    imap.once('end', resolve);
    imap.connect();
  });
  
  await openBox('INBOX');
  
  const searchCriteria = ['UNSEEN']; 
  const fetchOptions = { bodies: ['TEXT'], markSeen: true };
  
  const messages = await promisify(imap.search.bind(imap))(searchCriteria, fetchOptions);
  
  if (messages.length > 0) {
    const body = messages[0].parts.filter(part => part.which === 'TEXT')[0].body;
    
    const otpMatch = body.match(/\d{5}/);
    if (otpMatch) {
      otp = otpMatch[0];
      console.log("OTP Found: " + otp);
    }
  }
  
  imap.end();
}

