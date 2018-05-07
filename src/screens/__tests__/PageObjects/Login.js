class Login {
  constructor(client) {
    this.client = client;
  }

  get self() {
    return this.client.element('[data-testid="Login"]');
  }

  async open() {
    this.client.url('/login');
    await this.client.waitUntil(() => this.self.isExisting(), 5000);
  }

  async login(user) {
    const loginUser = user || {
      email: 'pepe@gmail.com',
      password: 'test123',
    };

    await this.open();
    await this.client.setValue('[data-testid="email"]', loginUser.email);
    await this.client.setValue('[data-testid="password"]', loginUser.password);
    await this.client.click('[data-testid="submit"]');
  }
}

module.exports = Login;
