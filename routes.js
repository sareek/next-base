const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");

routes.add("reward", "/reward");
routes.add("under-maintenance", "/reward");
routes.add("resources", "/resources");

