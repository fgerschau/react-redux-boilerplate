const Login = require('./PageObjects/Login');
const { createFakeUser } = require('../../util/test');
const { expect } = require('chai');

describe('Login should be successful', async () => {
  const user = {
    email: 'login@gmail.com',
    password: 'test123',
    name: 'Pepe',
  };

  before(async () => {
    await createFakeUser(user);
  });

  it('should login', async () => {
    const login = new Login(browser);

    await login.login(user);
    await browser.waitUntil(async () => {
      const url = await browser.getUrl();
      return url.indexOf('dashboard') > -1;
    }, 5000);
  });
});
