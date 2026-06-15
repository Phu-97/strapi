module.exports = {
  async getLogo(ctx) {
    ctx.send({
      url: '/uploads/logo.png', // Đường dẫn tới logo trong thư mục public/uploads
    });
  },
};