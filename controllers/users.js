const userModal = require("../models/user");

function hello(ctx) {
  let user = ctx.request.query.user;
  ctx.ok({ user });
}

async function list(ctx) {
  const list = await userModal.findAll();
  ctx.ok({ users: list });
}

module.exports = {
  hello,
  list,
};
