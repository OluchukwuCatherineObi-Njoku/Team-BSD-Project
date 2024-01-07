import { ICLUB } from 'src/interfaces/TEAM_A';

/**
 * Represents the database for ssf
 * @class
 */
class Db {
  /**
   * The clubs.
   * @private
   */
  private clubs: ICLUB[] = [];

  /**
   * ID for clubs to keep track.
   * @private
   */
  static clubs_id: number = 0;

  /**
   * Constructs the ssf in-memory database
   */
  constructor() {
    this.clubs = [];
  }

  /**
   * Adds a club to the database
   * Automatically assigns an id
   * @returns {Promise(void)}
   */
  addClub(name?: string, about_club?: string, image?: string): Promise<void> {
    if (!name) {
      return Promise.reject(
        new Error('Must provide a club name at least.')
      );
    }
  
    this.clubs.push({ id: Db.clubs_id++, name: name, about_club: about_club, image: image });

    return Promise.resolve();
  }

  

  /**
   * Retrieves a club by its name
   * @param {string} name name of the club
   * @returns {Promise(ICLUB)}
   */
  getClubByName(name: string): Promise<ICLUB> {
    const club = this.clubs.find((c) => c.name === name);

    if (club !== undefined) {
      // Post found, resolve the promise with the post
      return Promise.resolve(club);
    } else {
      // Post not found, reject the promise
      return Promise.reject(new Error(`Could not find club with name: [${name}]`));
    }
  }

  /**
   * Retrieves clubs by their name substrings
   * @param {string} name substring of name of the club
   * @returns {Promise(ICLUB)}
   */
  getClubsByNameSubString(nameSubStr: string): Promise<ICLUB[]> {
    const clubs = this.clubs.filter((c) => c.name.includes(nameSubStr));

    if (clubs.length > 0) {
      // Club found, resolve the promise with the club
      return Promise.resolve(clubs);
    } else {
      // Post not found, reject the promise
      return Promise.reject(new Error(`Could not find any clubs with name containing: [${nameSubStr}]`));
    }
  }
  
  /**
   * Retrieves all clubs
   * @returns {Promise(ICLUB)}
   */
  getAllClubs(): Promise<ICLUB[]> {

    if (this.clubs.length > 0) {
      // Clubs found, resolve the promise with the clubs
      return Promise.resolve(this.clubs);
    } else {
      // Post not found, reject the promise
      return Promise.reject(new Error(`No clubs found`));
    }
  }

  /**
   * Retrieves a club by its id
   * @param {string} id id of the club
   * @returns {Promise(ICLUB)}
   */
  getClubByID(id: number): Promise<ICLUB> {
    const club = this.clubs.find((c) => c.id === id);

    if (club !== undefined) {
      // Post found, resolve the promise with the post
      return Promise.resolve(club);
    } else {
      // Post not found, reject the promise
      return Promise.reject(new Error(`Could not find club with id: [${id}]`));
    }
  }


  /**
   * Updates a club with a new one
   * @param {ICLUB} edited_club the updated club
   * @returns {Promise(void)}
   */
  editClubInfo(edited_club: ICLUB): Promise<void> {
    edited_club;

    // Post found, resolve the promise with the post
    return Promise.resolve();
  }

  
 /**
   * Deletes a club by its ID.
   * @param {number} id - The ID of the club to be deleted.
   * @returns {Promise<void>}
   */
 deleteClubByID(id: number): Promise<void> {
    id;

    return Promise.resolve();
  }


  /**
   * Deletes a club by its name.
   * @param {string} name - The name of the club to be deleted.
   * @returns {Promise<void>}
   */
  deleteClubByName(name: string): Promise<void> {
    name;
    return Promise.resolve();
  }

/**
   * Deletes a post by passing the post object.
   * @param {IPost} postToDelete - The post object to be deleted.
   * @returns {Promise<void>}
   */
  deleteClub(clubToDelete: ICLUB): Promise<void> {
    clubToDelete;

      return Promise.resolve();
    }
  }

export default Db;
