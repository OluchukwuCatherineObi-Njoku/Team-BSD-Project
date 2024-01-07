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
const database_1 = __importDefault(require("../../src/TEAM_E/database"));
(0, globals_1.describe)('Testing adding', () => {
    (0, globals_1.test)('Adding and retrieving a post', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        const post = {
            id: 0,
            title: 'BTP305',
            description: 'Giga chad course',
            image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
        };
        // Call addPost with the post details
        yield db.addPost(post.title, post.description, post.image);
        // Check if title is defined before calling getPostByTitle
        if (typeof post.title === 'string') {
            const addedPost = yield db.getPostByTitle(post.title);
            // Your expect statement here
            (0, globals_1.expect)(addedPost).toEqual(post);
        }
        else {
            // Handle the case where post.title is undefined
            // e.g., throw an error, fail the test, etc.
            throw new Error('Post title is undefined');
        }
    }));
    (0, globals_1.test)('Adding a post with invalid parameters', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        // Use rejects matcher for testing promise rejection
        yield (0, globals_1.expect)(db.addPost()).rejects.toThrow('Must provide one of [title, description, image] at least for the post.');
    }));
});
(0, globals_1.describe)('Testing retrieving', () => {
    (0, globals_1.test)('Retrieving a post by Title that does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        // Use rejects matcher for testing promise rejection
        yield (0, globals_1.expect)(db.getPostByTitle('lol')).rejects.toThrow('Could not find post with title: [lol]');
    }));
    (0, globals_1.test)('Retrieving a post by ID that does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        // Use rejects matcher for testing promise rejection
        yield (0, globals_1.expect)(db.getPostByID(420)).rejects.toThrow('Could not find post with id: [420]');
    }));
});
(0, globals_1.describe)('Testing editing', () => {
    (0, globals_1.test)('Adding, editing and retrieving a post', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        let post = {
            id: 0,
            title: 'BTP305',
            description: 'Giga chad course',
            image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
        };
        let addedPost;
        // Call addPost with the post details
        yield db.addPost(post.title, post.description, post.image);
        // Check if title is defined before calling getPostByTitle
        if (typeof post.title === 'string') {
            addedPost = yield db.getPostByTitle(post.title);
            post.id = addedPost.id;
            // Your expect statement here
            (0, globals_1.expect)(addedPost).toEqual(post);
        }
        else {
            // Handle the case where post.title is undefined
            // e.g., throw an error, fail the test, etc.
            throw new Error('Post title is undefined');
        }
        post = addedPost;
        post.title += '!!!!';
        yield db.editPost(post);
        // Check if title is defined before calling getPostByTitle
        if (typeof post.title === 'string') {
            // Your expect statement here
            (0, globals_1.expect)(yield db.getPostByTitle(post.title)).toEqual(post);
        }
        else {
            // Handle the case where post.title is undefined
            // e.g., throw an error, fail the test, etc.
            throw new Error('Post title is undefined');
        }
    }));
    (0, globals_1.test)('Editing a post that doesnt exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        yield (0, globals_1.expect)(db.editPost({ id: 420, title: 'no one here' })).rejects.toThrow('Could not find and edit post with id: [420]');
    }));
});
(0, globals_1.describe)('Testing deleting', () => {
    (0, globals_1.test)('Adding and deleting a post by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        const post = {
            id: 0,
            title: 'BTP400',
            description: 'Giga chad course',
            image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
        };
        // Call addPost with the post details
        yield db.addPost(post.title, post.description, post.image);
        // Check if title is defined before calling getPostByTitle
        if (typeof post.title === 'string') {
            const addedPost = yield db.getPostByTitle(post.title);
            post.id = addedPost.id;
            // Your expect statement here
            (0, globals_1.expect)(addedPost).toEqual(post);
        }
        else {
            // Handle the case where post.title is undefined
            // e.g., throw an error, fail the test, etc.
            throw new Error('Post title is undefined');
        }
        // Use rejects matcher for testing promise rejection
        yield db.deletePostByID(post.id);
        yield (0, globals_1.expect)(db.getPostByID(post.id)).rejects.toThrow(`Could not find post with id: [${post.id}]`);
    }));
    (0, globals_1.test)('Adding and deleting a post by title', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        const post = {
            id: 0,
            title: 'BTP400',
            description: 'Giga chad course',
            image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
        };
        // Call addPost with the post details
        yield db.addPost(post.title, post.description, post.image);
        // Check if title is defined before calling getPostByTitle
        if (typeof post.title === 'string') {
            const addedPost = yield db.getPostByTitle(post.title);
            post.id = addedPost.id;
            // Your expect statement here
            (0, globals_1.expect)(addedPost).toEqual(post);
        }
        else {
            // Handle the case where post.title is undefined
            // e.g., throw an error, fail the test, etc.
            throw new Error('Post title is undefined');
        }
        // Use rejects matcher for testing promise rejection
        yield db.deletePostByTitle(post.title);
        yield (0, globals_1.expect)(db.getPostByTitle(post.title)).rejects.toThrow(`Could not find post with title: [${post.title}]`);
    }));
    (0, globals_1.test)('Adding and deleting a post by the post itself', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        const post = {
            id: 0,
            title: 'BTP400',
            description: 'Giga chad course',
            image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
        };
        // Call addPost with the post details
        yield db.addPost(post.title, post.description, post.image);
        // Check if title is defined before calling getPostByTitle
        if (typeof post.title === 'string') {
            const addedPost = yield db.getPostByTitle(post.title);
            post.id = addedPost.id;
            // Your expect statement here
            (0, globals_1.expect)(addedPost).toEqual(post);
        }
        else {
            // Handle the case where post.title is undefined
            // e.g., throw an error, fail the test, etc.
            throw new Error('Post title is undefined');
        }
        // Use rejects matcher for testing promise rejection
        yield db.deletePost(post);
        yield (0, globals_1.expect)(db.getPostByTitle(post.title)).rejects.toThrow(`Could not find post with title: [${post.title}]`);
    }));
    (0, globals_1.test)('Deleting a post by id that doesnt exist ', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        yield (0, globals_1.expect)(db.deletePostByID(111)).rejects.toThrow('Could not find post with id: [111] to delete');
    }));
    (0, globals_1.test)('Deleting a post by title that doesnt exist ', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        yield (0, globals_1.expect)(db.deletePostByTitle('F')).rejects.toThrow('Could not find post with title: [F] to delete');
    }));
    (0, globals_1.test)('Deleting a post by a post that doesnt exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const db = new database_1.default();
        yield (0, globals_1.expect)(db.deletePost({ id: 126, title: 'F in chat' })).rejects.toThrow('Could not find post with id: [126] to delete');
    }));
});
//# sourceMappingURL=posts_in_memory.test.js.map