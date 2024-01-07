"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the database for ssf
 * @class
 */
class Db {
    /**
     * Constructs the ssf in-memory database
     */
    constructor() {
        if (!Db.posts) {
            Db.posts = [];
        }
    }
    /**
     * Adds a post to the database
     * Automatically assigns an id
     * @returns {Promise(void)}
     */
    addPost(title, description, image) {
        if (!title && !description && !image) {
            return Promise.reject(new Error('Must provide one of [title, description, image] at least for the post.'));
        }
        Db.posts.push({ id: Db.posts_id++, title: title, description: description, image: image });
        return Promise.resolve();
    }
    /**
     * Retrieves a post by its title
     * @param {string} title title of the post
     * @returns {Promise(IPost)}
     */
    getPostByTitle(title) {
        const post = Db.posts.find((p) => p.title === title);
        if (post !== undefined) {
            // Post found, resolve the promise with the post
            return Promise.resolve(post);
        }
        else {
            // Post not found, reject the promise
            return Promise.reject(new Error(`Could not find post with title: [${title}]`));
        }
    }
    /**
     * Retrieves a post by its id
     * @param {string} id id of the post
     * @returns {Promise(IPost)}
     */
    getPostByID(id) {
        const post = Db.posts.find((p) => p.id === id);
        if (post !== undefined) {
            // Post found, resolve the promise with the post
            return Promise.resolve(post);
        }
        else {
            // Post not found, reject the promise
            return Promise.reject(new Error(`Could not find post with id: [${id}]`));
        }
    }
    /**
     * Updates a post with a new one
     * @param {IPost} edited_post the updated post
     * @returns {Promise(void)}
     */
    editPost(edited_post) {
        var _a;
        let check = false;
        for (let i = 0; i < Db.posts.length; ++i) {
            if (((_a = Db.posts[i]) === null || _a === void 0 ? void 0 : _a.id) == edited_post.id) {
                Db.posts[i] = edited_post;
                check = true;
                break;
            }
        }
        if (check) {
            // Post found, resolve the promise with the post
            return Promise.resolve();
        }
        else {
            // Post not found, reject the promise
            return Promise.reject(new Error(`Could not find and edit post with id: [${edited_post.id}]`));
        }
    }
    /**
     * Deletes a post by its ID.
     * @param {number} id - The ID of the post to be deleted.
     * @returns {Promise<void>}
     */
    deletePostByID(id) {
        const index = Db.posts.findIndex((p) => p.id === id);
        if (index !== -1) {
            Db.posts.splice(index, 1);
            return Promise.resolve();
        }
        else {
            return Promise.reject(new Error(`Could not find post with id: [${id}] to delete`));
        }
    }
    /**
     * Deletes a post by its title.
     * @param {string} title - The title of the post to be deleted.
     * @returns {Promise<void>}
     */
    deletePostByTitle(title) {
        const index = Db.posts.findIndex((p) => p.title === title);
        if (index !== -1) {
            Db.posts.splice(index, 1);
            return Promise.resolve();
        }
        else {
            return Promise.reject(new Error(`Could not find post with title: [${title}] to delete`));
        }
    }
    /**
     * Deletes a post by passing the post object.
     * @param {IPost} postToDelete - The post object to be deleted.
     * @returns {Promise<void>}
     */
    deletePost(postToDelete) {
        const index = Db.posts.findIndex((p) => p.id === postToDelete.id);
        if (index !== -1) {
            Db.posts.splice(index, 1);
            return Promise.resolve();
        }
        else {
            return Promise.reject(new Error(`Could not find post with id: [${postToDelete.id}] to delete`));
        }
    }
}
/**
 * The posts.
 * @private
 */
Db.posts = [];
/**
 * ID for posts to keep track.
 * @private
 */
Db.posts_id = 0;
exports.default = Db;
//# sourceMappingURL=index.js.map