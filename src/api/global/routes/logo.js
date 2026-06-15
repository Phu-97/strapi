module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/logo',
      handler: 'logo.getLogo',
      config: {
        auth: false,
      },
    },
  ],
};