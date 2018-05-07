class SignUp {
  constructor(client) {
    this.client = client;
  }

  get self() {
    return this.client.element('[data-testid="SignUp"]');
  }

  async open() {
    await this.client.url('/signup');
    await this.client.waitUntil(() => this.self.isExisting(), 5000);
  }

  async signUp(user) {
    const signUpUser = user || {
      name: 'Pepita García',
      email: 'pepita@gmail.com',
      password1: 'test123',
      password2: 'test123',
    };

    await this.open();
    await this.client.setValue('[data-testid="name"]', signUpUser.name);
    await this.client.setValue('[data-testid="email"]', signUpUser.email);
    await this.client.setValue('[data-testid="password1"]', signUpUser.password1);
    await this.client.setValue('[data-testid="password2"]', signUpUser.password2);
    await this.client.click('[data-testid="submit"]');
  }
}

module.exports = SignUp;
