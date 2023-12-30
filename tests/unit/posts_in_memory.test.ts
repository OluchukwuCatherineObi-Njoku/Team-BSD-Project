// Must import jest functions every time you want to use them
import { expect, test, describe } from '@jest/globals';

import { IPost } from 'src/interfaces/TEAM_E';
import Db from '../../src/TEAM_E/database';

describe('Testing adding', () => {
  test('Adding and retrieving a post', async () => {
    const db = new Db();

    const post: IPost = {
      id: 0,
      title: 'BTP305',
      description: 'Giga chad course',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    // Call addPost with the post details
    await db.addPost(post.title, post.description, post.image);

    // Check if title is defined before calling getPostByTitle
    if (typeof post.title === 'string') {
      const addedPost = await db.getPostByTitle(post.title);

      // Your expect statement here
      expect(addedPost).toEqual(post);
    } else {
      // Handle the case where post.title is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Post title is undefined');
    }
  });

  test('Adding a post with invalid parameters', async () => {
    const db = new Db();

    // Use rejects matcher for testing promise rejection
    await expect(db.addPost()).rejects.toThrow(
      'Must provide one of [title, description, image] at least for the post.'
    );
  });
});

describe('Testing retrieving', () => {
  test('Retrieving a post by Title that does not exist', async () => {
    const db = new Db();

    // Use rejects matcher for testing promise rejection
    await expect(db.getPostByTitle('lol')).rejects.toThrow('Could not find post with title: [lol]');
  });

  test('Retrieving a post by ID that does not exist', async () => {
    const db = new Db();

    // Use rejects matcher for testing promise rejection
    await expect(db.getPostByID(420)).rejects.toThrow('Could not find post with id: [420]');
  });
});

describe('Testing editing', () => {
  test('Adding, editing and retrieving a post', async () => {
    const db = new Db();

    let post: IPost = {
      id: 0,
      title: 'BTP305',
      description: 'Giga chad course',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    let addedPost: IPost;

    // Call addPost with the post details
    await db.addPost(post.title, post.description, post.image);

    // Check if title is defined before calling getPostByTitle
    if (typeof post.title === 'string') {
      addedPost = await db.getPostByTitle(post.title);

      post.id = addedPost.id;

      // Your expect statement here
      expect(addedPost).toEqual(post);
    } else {
      // Handle the case where post.title is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Post title is undefined');
    }

    post = addedPost;

    post.title += '!!!!';

    await db.editPost(post);

    // Check if title is defined before calling getPostByTitle
    if (typeof post.title === 'string') {
      // Your expect statement here
      expect(await db.getPostByTitle(post.title)).toEqual(post);
    } else {
      // Handle the case where post.title is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Post title is undefined');
    }
  });

  test('Editing a post that doesnt exist', async () => {
    const db = new Db();

    await expect(db.editPost({ id: 420, title: 'no one here' })).rejects.toThrow(
      'Could not find and edit post with id: [420]'
    );
  });
});

describe('Testing deleting', () => {
  test('Adding and deleting a post by id', async () => {
    const db = new Db();

    const post: IPost = {
      id: 0,
      title: 'BTP400',
      description: 'Giga chad course',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    // Call addPost with the post details
    await db.addPost(post.title, post.description, post.image);

    // Check if title is defined before calling getPostByTitle
    if (typeof post.title === 'string') {
      const addedPost = await db.getPostByTitle(post.title);

      post.id = addedPost.id;

      // Your expect statement here
      expect(addedPost).toEqual(post);
    } else {
      // Handle the case where post.title is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Post title is undefined');
    }

    // Use rejects matcher for testing promise rejection
    await db.deletePostByID(post.id);

    await expect(db.getPostByID(post.id)).rejects.toThrow(
      `Could not find post with id: [${post.id}]`
    );
  });

  test('Adding and deleting a post by title', async () => {
    const db = new Db();

    const post: IPost = {
      id: 0,
      title: 'BTP400',
      description: 'Giga chad course',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    // Call addPost with the post details
    await db.addPost(post.title, post.description, post.image);

    // Check if title is defined before calling getPostByTitle
    if (typeof post.title === 'string') {
      const addedPost = await db.getPostByTitle(post.title);

      post.id = addedPost.id;

      // Your expect statement here
      expect(addedPost).toEqual(post);
    } else {
      // Handle the case where post.title is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Post title is undefined');
    }

    // Use rejects matcher for testing promise rejection
    await db.deletePostByTitle(post.title);

    await expect(db.getPostByTitle(post.title)).rejects.toThrow(
      `Could not find post with title: [${post.title}]`
    );
  });

  test('Adding and deleting a post by the post itself', async () => {
    const db = new Db();

    const post: IPost = {
      id: 0,
      title: 'BTP400',
      description: 'Giga chad course',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    // Call addPost with the post details
    await db.addPost(post.title, post.description, post.image);

    // Check if title is defined before calling getPostByTitle
    if (typeof post.title === 'string') {
      const addedPost = await db.getPostByTitle(post.title);

      post.id = addedPost.id;

      // Your expect statement here
      expect(addedPost).toEqual(post);
    } else {
      // Handle the case where post.title is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Post title is undefined');
    }

    // Use rejects matcher for testing promise rejection
    await db.deletePost(post);

    await expect(db.getPostByTitle(post.title)).rejects.toThrow(
      `Could not find post with title: [${post.title}]`
    );
  });

  test('Deleting a post by id that doesnt exist ', async () => {
    const db = new Db();

    await expect(db.deletePostByID(111)).rejects.toThrow(
      'Could not find post with id: [111] to delete'
    );
  });

  test('Deleting a post by title that doesnt exist ', async () => {
    const db = new Db();

    await expect(db.deletePostByTitle('F')).rejects.toThrow(
      'Could not find post with title: [F] to delete'
    );
  });

  test('Deleting a post by a post that doesnt exist', async () => {
    const db = new Db();

    await expect(db.deletePost({ id: 126, title: 'F in chat' })).rejects.toThrow(
      'Could not find post with id: [126] to delete'
    );
  });
});
