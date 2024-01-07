import { IPost } from 'src/interfaces/TEAM_E';
/**
 * Represents the database for ssf
 * @class
 */
declare class Db {
    /**
     * The posts.
     * @private
     */
    private static posts;
    /**
     * ID for posts to keep track.
     * @private
     */
    private static posts_id;
    /**
     * Constructs the ssf in-memory database
     */
    constructor();
    /**
     * Adds a post to the database
     * Automatically assigns an id
     * @returns {Promise(void)}
     */
    addPost(title?: string, description?: string, image?: string): Promise<void>;
    /**
     * Retrieves a post by its title
     * @param {string} title title of the post
     * @returns {Promise(IPost)}
     */
    getPostByTitle(title: string): Promise<IPost>;
    /**
     * Retrieves a post by its id
     * @param {string} id id of the post
     * @returns {Promise(IPost)}
     */
    getPostByID(id: number): Promise<IPost>;
    /**
     * Updates a post with a new one
     * @param {IPost} edited_post the updated post
     * @returns {Promise(void)}
     */
    editPost(edited_post: IPost): Promise<void>;
    /**
     * Deletes a post by its ID.
     * @param {number} id - The ID of the post to be deleted.
     * @returns {Promise<void>}
     */
    deletePostByID(id: number): Promise<void>;
    /**
     * Deletes a post by its title.
     * @param {string} title - The title of the post to be deleted.
     * @returns {Promise<void>}
     */
    deletePostByTitle(title: string): Promise<void>;
    /**
     * Deletes a post by passing the post object.
     * @param {IPost} postToDelete - The post object to be deleted.
     * @returns {Promise<void>}
     */
    deletePost(postToDelete: IPost): Promise<void>;
}
export default Db;
//# sourceMappingURL=index.d.ts.map