module.exports = {
  async find(ctx, next) {
    ctx.body = "Hello World! phương thức get";
  },
  async create(ctx, next) {
    ctx.body = "Hello World! phương thức post";
  },
  async delete(ctx, next) {
    ctx.body = "Hello World! phương thức delete";
  },
  async update(ctx, next) {
    ctx.body = "Hello World! phương thức put";
  },
  async findOne(ctx, next) {
    ctx.body = "Hello World! phương thức Get";
  },
};
