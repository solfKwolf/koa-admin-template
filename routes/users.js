const Router = require("koa-router");
const router = new Router();
const Ctrl = require("../controllers/users");

router.get("/", Ctrl.hello);
router.get("/list", Ctrl.list);

module.exports = router.routes();
