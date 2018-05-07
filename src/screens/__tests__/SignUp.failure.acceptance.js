const SignUp = require('./PageObjects/SignUp');
const { createFakeUser } = require('../../util/test');
const { expect } = require('chai');

describe('SignUp should NOT be successful', async () => {
  const user = {
    name: 'Pepe García',
    email: 'pepe@gmail.com',
    password1: 'test123',
    password2: 'test123',
  };

  before(async () => {
    await createFakeUser(user);
  });

  it('should NOT sign up due to a duplicated user', async () => {
    const signUp = new SignUp(browser);
    await signUp.open();
    await signUp.signUp(user);

    const url = await browser.getUrl();
    expect(url.indexOf('signup')).to.not.equal(-1);

    await browser.waitUntil(async () => {
      const toastrErrorIsVisible = await browser.isVisible('.toast.toast-error');
      return toastrErrorIsVisible;
    }, 1000);
  });
});