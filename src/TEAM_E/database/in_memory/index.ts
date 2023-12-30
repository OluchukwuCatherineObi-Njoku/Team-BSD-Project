import { IPost } from 'src/interfaces/TEAM_E';

/**
 * Represents the database for ssf
 * @class
 */
class Db {
  /**
   * The posts.
   * @private
   */
  private static posts: IPost[] = [];

  /**
   * ID for posts to keep track.
   * @private
   */
  private static posts_id: number = 0;

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
  addPost(title?: string, description?: string, image?: string): Promise<void> {
    if (!title && !description && !image) {
      return Promise.reject(
        new Error('Must provide one of [title, description, image] at least for the post.')
      );
    }

    Db.posts.push({ id: Db.posts_id++, title: title, description: description, image: image });

    return Promise.resolve();
  }

  /**
   * Retrieves a post by its title
   * @param {string} title title of the post
   * @returns {Promise(IPost)}
   */
  getPostByTitle(title: string): Promise<IPost> {
    const post = Db.posts.find((p) => p.title === title);

    if (post !== undefined) {
      // Post found, resolve the promise with the post
      return Promise.resolve(post);
    } else {
      // Post not found, reject the promise
      return Promise.reject(new Error(`Could not find post with title: [${title}]`));
    }
  }

  /**
   * Retrieves a post by its id
   * @param {string} id id of the post
   * @returns {Promise(IPost)}
   */
  getPostByID(id: number): Promise<IPost> {
    const post = Db.posts.find((p) => p.id === id);

    if (post !== undefined) {
      // Post found, resolve the promise with the post
      return Promise.resolve(post);
    } else {
      // Post not found, reject the promise
      return Promise.reject(new Error(`Could not find post with id: [${id}]`));
    }
  }

  /**
   * Updates a post with a new one
   * @param {IPost} edited_post the updated post
   * @returns {Promise(void)}
   */
  editPost(edited_post: IPost): Promise<void> {
    let check = false;

    for (let i = 0; i < Db.posts.length; ++i) {
      if (Db.posts[i]?.id == edited_post.id) {
        Db.posts[i] = edited_post;
        check = true;
        break;
      }
    }

    if (check) {
      // Post found, resolve the promise with the post
      return Promise.resolve();
    } else {
      // Post not found, reject the promise
      return Promise.reject(new Error(`Could not find and edit post with id: [${edited_post.id}]`));
    }
  }

  /**
   * Deletes a post by its ID.
   * @param {number} id - The ID of the post to be deleted.
   * @returns {Promise<void>}
   */
  deletePostByID(id: number): Promise<void> {
    const index = Db.posts.findIndex((p) => p.id === id);

    if (index !== -1) {
      Db.posts.splice(index, 1);

      return Promise.resolve();
    } else {
      return Promise.reject(new Error(`Could not find post with id: [${id}] to delete`));
    }
  }

  /**
   * Deletes a post by its title.
   * @param {string} title - The title of the post to be deleted.
   * @returns {Promise<void>}
   */
  deletePostByTitle(title: string): Promise<void> {
    const index = Db.posts.findIndex((p) => p.title === title);

    if (index !== -1) {
      Db.posts.splice(index, 1);

      return Promise.resolve();
    } else {
      return Promise.reject(new Error(`Could not find post with title: [${title}] to delete`));
    }
  }

  /**
   * Deletes a post by passing the post object.
   * @param {IPost} postToDelete - The post object to be deleted.
   * @returns {Promise<void>}
   */
  deletePost(postToDelete: IPost): Promise<void> {
    const index = Db.posts.findIndex((p) => p.id === postToDelete.id);

    if (index !== -1) {
      Db.posts.splice(index, 1);

      return Promise.resolve();
    } else {
      return Promise.reject(
        new Error(`Could not find post with id: [${postToDelete.id}] to delete`)
      );
    }
  }
}

export default Db;
