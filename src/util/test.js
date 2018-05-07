const { API_URL } = require('../config');
const axios = require('axios');

const createFakeUser = async (user) => {
  const sanitizedUser = user;
  sanitizedUser.password = user.password1 || user.password;
  await axios.post(`${API_URL}/signup`, user);
};

exports.createFakeUser = createFakeUser;
