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
  private posts: IPost[] = [];

  /**
   * ID for posts to keep track.
   * @private
   */
  static posts_id: number = 0;

  /**
   * Constructs the ssf in-memory database
   */
  constructor() {
    this.posts = [];
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

    this.posts.push({ id: Db.posts_id++, title: title, description: description, image: image });

    return Promise.resolve();
  }

  /**
   * Retrieves a post by its title
   * @param {string} title title of the post
   * @returns {Promise(IPost)}
   */
  getPostByTitle(title: string): Promise<IPost> {
    const post = this.posts.find((p) => p.title === title);

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
    const post = this.posts.find((p) => p.id === id);

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
    edited_post;

    // Post found, resolve the promise with the post
    return Promise.resolve();
  }

  /**
   * Deletes a post by its ID.
   * @param {number} id - The ID of the post to be deleted.
   * @returns {Promise<void>}
   */
  deletePostByID(id: number): Promise<void> {
    id;

    return Promise.resolve();
  }

  /**
   * Deletes a post by its title.
   * @param {string} title - The title of the post to be deleted.
   * @returns {Promise<void>}
   */
  deletePostByTitle(title: string): Promise<void> {
    title;
    return Promise.resolve();
  }

  /**
   * Deletes a post by passing the post object.
   * @param {IPost} postToDelete - The post object to be deleted.
   * @returns {Promise<void>}
   */
  deletePost(postToDelete: IPost): Promise<void> {
    postToDelete;

    return Promise.resolve();
  }
}

export default Db;
