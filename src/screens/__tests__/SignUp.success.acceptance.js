const SignUp = require('./PageObjects/SignUp');
const { expect } = require('chai');
const { API_URL } = require('../../config');
const axios = require('axios');
const assert = require('assert');

describe('SignUp should be successful', async () => {
  it('should signup and redirect to dashboard', async () => {
    const signUp = new SignUp(browser);
    await signUp.signUp();

    await browser.waitUntil(async () => {
      const url = await browser.getUrl();
      return url.indexOf('dashboard') > -1;
    }, 5000);

    const url = await browser.getUrl();
    expect(url.indexOf('dashboard')).to.not.equal(-1);
  });
});
