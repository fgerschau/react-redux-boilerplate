const Login = require('./PageObjects/Login');
const { createFakeUser } = require('../../util/test');
const { expect } = require('chai');

describe('Login should NOT be successful', async () => {
  const user = {
    email: 'loginfailure@gmail.com',
    password: 'test123',
    name: 'Pepe',
  };

  before(async () => {
    await createFakeUser(user);
  });

  it('should NOT login because of wrong password', async () => {
    const login = new Login(browser);

    user.password = 'bad';
    await login.login(user);

    await browser.waitUntil(async () => {
      const toastrErrorIsVisible = await browser.isVisible('.toast.toast-error');
      return toastrErrorIsVisible;
    }, 1000);
  });
});
