"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var loggingController_1 = require("./controllers/loggingController");
var IndexController_1 = require("./controllers/IndexController");
var ResizeController_1 = require("./controllers/ResizeController");
exports.app = express_1.default();
// static part
exports.app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.app.set('views', path_1.default.resolve(__dirname, 'views'));
exports.app.set('view engine', 'ejs');
// Controllers and Loggers
exports.app.use('/', IndexController_1.IndexController);
exports.app.use('/resize', ResizeController_1.ResizeController);
exports.app.use(loggingController_1.morganMiddleware);
// page not found Controller
exports.app.use(function (req, res) {
    res.status(404);
    res.render('pageNotFound');
});
//# sourceMappingURL=app.js.map