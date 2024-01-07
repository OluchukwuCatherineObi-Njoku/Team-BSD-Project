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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Must import jest functions every time you want to use them
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../../src/server");
(0, globals_1.describe)('Testing post api: creating a post', () => {
    (0, globals_1.test)('Adding  a post', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            title: 'Hello World!',
            description: 'testing api post',
            image: 'an_image',
        };
        const res = yield (0, supertest_1.default)(server_1.app).post('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(201);
    }));
    (0, globals_1.test)('Adding  a post with INVALID PARAMETERS', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {};
        const res = yield (0, supertest_1.default)(server_1.app).post('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(400);
    }));
});
(0, globals_1.describe)('Testing post api: retrieving a post', () => {
    (0, globals_1.test)('Retrieving a post by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            title: 'Hello World!',
            description: 'testing api post',
            image: 'an_image',
        };
        const res = yield (0, supertest_1.default)(server_1.app).post('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(201);
        const post = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/id?id=0');
        (0, globals_1.expect)(post.statusCode).toBe(200);
        (0, globals_1.expect)(post.body.id).toBe(0);
        (0, globals_1.expect)(post.body.title).toBe('Hello World!');
    }));
    (0, globals_1.test)('Retrieving a post by id THAT DOESNT EXIST', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            id: 14289389432,
            title: 'Hello World!',
            description: 'testing api post',
            image: 'an_image',
        };
        const post = yield (0, supertest_1.default)(server_1.app).get(`/team_e/post/id?id=${a_post.id}`);
        (0, globals_1.expect)(post.statusCode).toBe(404);
    }));
    (0, globals_1.test)('Retrieving a post by title', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            title: 'Hello World!',
            description: 'testing api post',
            image: 'an_image',
        };
        const res = yield (0, supertest_1.default)(server_1.app).post('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(201);
        const post = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/title?title=Hello World!');
        (0, globals_1.expect)(post.statusCode).toBe(200);
        (0, globals_1.expect)(post.body.id).toBe(0);
        (0, globals_1.expect)(post.body.title).toBe('Hello World!');
    }));
    (0, globals_1.test)('Retrieving a post by title THAT DOESNT EXIST', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            title: 'Hello World321312321321!',
            description: 'testing api post',
            image: 'an_image',
        };
        const post = yield (0, supertest_1.default)(server_1.app).get(`/team_e/post/title?title=${a_post.title}`);
        (0, globals_1.expect)(post.statusCode).toBe(404);
    }));
});
(0, globals_1.describe)('Testing post api: editing a post', () => {
    (0, globals_1.test)('Editing a post by a new post', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            title: 'Hello World!',
            description: 'testing api post',
            image: 'an_image',
        };
        let res = yield (0, supertest_1.default)(server_1.app).post('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(201);
        let post = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/id?id=0');
        (0, globals_1.expect)(post.statusCode).toBe(200);
        (0, globals_1.expect)(post.body.id).toBe(0);
        (0, globals_1.expect)(post.body.title).toBe('Hello World!');
        a_post.id = post.body.id;
        a_post.title = 'Goodbye World!';
        res = yield (0, supertest_1.default)(server_1.app).put('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(200);
        post = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/id?id=0');
        (0, globals_1.expect)(post.body.title).toBe('Goodbye World!');
    }));
    (0, globals_1.test)('Editing a post by a new post THAT DOESNT EXIST', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            id: 1241241241212,
            title: 'Hello World!!!!!!!!!!!',
            description: 'testing api post',
            image: 'an_image',
        };
        const res = yield (0, supertest_1.default)(server_1.app).put('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(404);
    }));
});
(0, globals_1.describe)('Testing post api: deleting a post', () => {
    (0, globals_1.test)('Deleting a post by the post to be deleted', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            title: 'Hello World!',
            description: 'testing api post',
            image: 'an_image',
        };
        let res = yield (0, supertest_1.default)(server_1.app).post('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(201);
        let post = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/title?title=Hello World!');
        (0, globals_1.expect)(post.statusCode).toBe(200);
        (0, globals_1.expect)(post.body.title).toBe('Hello World!');
        a_post.id = post.body.id;
        res = yield (0, supertest_1.default)(server_1.app).delete('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(200);
        post = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/id?id=1');
        (0, globals_1.expect)(post.statusCode).toBe(404);
    }));
    (0, globals_1.test)('Deleting a post by the id of the post to be deleted', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            title: 'Hello World!!',
            description: 'testing api post',
            image: 'an_image',
        };
        let res = yield (0, supertest_1.default)(server_1.app).post('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(201);
        let post = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/title?title=Hello World!!');
        (0, globals_1.expect)(post.statusCode).toBe(200);
        (0, globals_1.expect)(post.body.title).toBe('Hello World!!');
        a_post.id = post.body.id;
        res = yield (0, supertest_1.default)(server_1.app).delete(`/team_e/post/id?id=${a_post.id}`);
        (0, globals_1.expect)(res.statusCode).toBe(200);
        post = yield (0, supertest_1.default)(server_1.app).get(`/team_e/post/id?id=${a_post.id}`);
        (0, globals_1.expect)(post.statusCode).toBe(404);
    }));
    (0, globals_1.test)('Deleting a post by the title of the post to be deleted', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            title: 'Hello World!!!',
            description: 'testing api post',
            image: 'an_image',
        };
        let res = yield (0, supertest_1.default)(server_1.app).post('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(201);
        let post = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/title?title=Hello World!!!');
        (0, globals_1.expect)(post.statusCode).toBe(200);
        (0, globals_1.expect)(post.body.title).toBe('Hello World!!!');
        a_post.id = post.body.id;
        res = yield (0, supertest_1.default)(server_1.app).delete(`/team_e/post/title?title=${a_post.title}`);
        (0, globals_1.expect)(res.statusCode).toBe(200);
        post = yield (0, supertest_1.default)(server_1.app).get(`/team_e/post/id?id=${a_post.id}`);
        (0, globals_1.expect)(post.statusCode).toBe(404);
    }));
    (0, globals_1.test)('Deleting a post by the title of the post to be deleted THAT DOESNT EXIST', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/title?title=Hello World!!!!!!!!!');
        (0, globals_1.expect)(res.statusCode).toBe(404);
    }));
    (0, globals_1.test)('Deleting a post by the id of the post to be deleted THAT DOESNT EXIST', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.app).get('/team_e/post/id?id=651');
        (0, globals_1.expect)(res.statusCode).toBe(404);
    }));
    (0, globals_1.test)('Deleting a post by the the post to be deleted THAT DOESNT EXIST', () => __awaiter(void 0, void 0, void 0, function* () {
        const a_post = {
            id: 12333,
            title: 'I do not exist',
            description: 'How can you be sure that you exist',
            image: 'Image of nothing',
        };
        const res = yield (0, supertest_1.default)(server_1.app).get('/team_e/post').send(a_post);
        (0, globals_1.expect)(res.statusCode).toBe(404);
    }));
});
//# sourceMappingURL=posts_api.test.js.map