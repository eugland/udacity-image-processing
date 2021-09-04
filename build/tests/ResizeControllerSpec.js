"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
var supertest_1 = __importDefault(require("supertest"));
var app_1 = require("../app");
function verifyCheckImagesWithSize(result, w, h) {
    if (w === void 0) { w = null; }
    if (h === void 0) { h = null; }
    var size = '';
    if (w && h) {
        size = "_" + w + "_" + h;
    }
    expect(result.text).toContain("encenadaport" + size + ".jpg");
    expect(result.text).toContain("fjord" + size + ".jpg");
    expect(result.text).toContain("icelandwaterfall" + size + ".jpg");
    expect(result.text).toContain("palmtunnel" + size + ".jpg");
    expect(result.text).toContain("santamonica" + size + ".jpg");
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
describe('Test Resize Controller', function () {
    it("Requesting the original", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).get('').send()];
                case 1:
                    result = _a.sent();
                    expect(result.status).toBe(200);
                    verifyCheckImagesWithSize(result);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Requesting the resized but already cached Image", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, w, h, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = [500, 400], w = _a[0], h = _a[1];
                    return [4 /*yield*/, supertest_1.default(app_1.app).get("/resize?w=" + w + "&h=" + h).send()];
                case 1:
                    result = _b.sent();
                    expect(result.status).toBe(200);
                    verifyCheckImagesWithSize(result, w, h);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Requesting a randome image size ", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, w, h, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = [getRandomInt(1, 1000), getRandomInt(1, 1000)], w = _a[0], h = _a[1];
                    return [4 /*yield*/, supertest_1.default(app_1.app).get("/resize?w=" + w + "&h=" + h).send()];
                case 1:
                    result = _b.sent();
                    expect(result.status).toBe(200);
                    verifyCheckImagesWithSize(result, w, h);
                    return [2 /*return*/];
            }
        });
    }); }, 10000);
});
//# sourceMappingURL=ResizeControllerSpec.js.map