// Must import jest functions every time you want to use them
import { expect, test, describe } from '@jest/globals';
import { IPost } from 'src/interfaces/TEAM_E';
import request from 'supertest';
import { app } from '../../src/server';

describe('Testing post api: creating a post', () => {
  test('Adding  a post', async () => {
    const a_post: IPost = {
      title: 'Hello World!',
      description: 'testing api post',
      image: 'an_image',
    };

    const res = await request(app).post('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(201);
  });

  test('Adding  a post with INVALID PARAMETERS', async () => {
    const a_post: IPost = {};

    const res = await request(app).post('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(400);
  });
});

describe('Testing post api: retrieving a post', () => {
  test('Retrieving a post by id', async () => {
    const a_post: IPost = {
      title: 'Hello World!',
      description: 'testing api post',
      image: 'an_image',
    };

    const res = await request(app).post('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(201);

    const post = await request(app).get('/team_e/post/id?id=0');

    expect(post.statusCode).toBe(200);
    expect(post.body.id).toBe(0);
    expect(post.body.title).toBe('Hello World!');
  });

  test('Retrieving a post by id THAT DOESNT EXIST', async () => {
    const a_post: IPost = {
      id: 14289389432,
      title: 'Hello World!',
      description: 'testing api post',
      image: 'an_image',
    };

    const post = await request(app).get(`/team_e/post/id?id=${a_post.id}`);

    expect(post.statusCode).toBe(404);
  });

  test('Retrieving a post by title', async () => {
    const a_post: IPost = {
      title: 'Hello World!',
      description: 'testing api post',
      image: 'an_image',
    };

    const res = await request(app).post('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(201);

    const post = await request(app).get('/team_e/post/title?title=Hello World!');

    expect(post.statusCode).toBe(200);
    expect(post.body.id).toBe(0);
    expect(post.body.title).toBe('Hello World!');
  });

  test('Retrieving a post by title THAT DOESNT EXIST', async () => {
    const a_post: IPost = {
      title: 'Hello World321312321321!',
      description: 'testing api post',
      image: 'an_image',
    };

    const post = await request(app).get(`/team_e/post/title?title=${a_post.title}`);

    expect(post.statusCode).toBe(404);
  });
});

describe('Testing post api: editing a post', () => {
  test('Editing a post by a new post', async () => {
    const a_post: IPost = {
      title: 'Hello World!',
      description: 'testing api post',
      image: 'an_image',
    };

    let res = await request(app).post('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(201);

    let post = await request(app).get('/team_e/post/id?id=0');

    expect(post.statusCode).toBe(200);
    expect(post.body.id).toBe(0);
    expect(post.body.title).toBe('Hello World!');

    a_post.id = post.body.id;
    a_post.title = 'Goodbye World!';

    res = await request(app).put('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(200);

    post = await request(app).get('/team_e/post/id?id=0');

    expect(post.body.title).toBe('Goodbye World!');
  });

  test('Editing a post by a new post THAT DOESNT EXIST', async () => {
    const a_post: IPost = {
      id: 1241241241212,
      title: 'Hello World!!!!!!!!!!!',
      description: 'testing api post',
      image: 'an_image',
    };

    const res = await request(app).put('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(404);
  });
});

describe('Testing post api: deleting a post', () => {
  test('Deleting a post by the post to be deleted', async () => {
    const a_post: IPost = {
      title: 'Hello World!',
      description: 'testing api post',
      image: 'an_image',
    };

    let res = await request(app).post('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(201);

    let post = await request(app).get('/team_e/post/title?title=Hello World!');

    expect(post.statusCode).toBe(200);
    expect(post.body.title).toBe('Hello World!');

    a_post.id = post.body.id;

    res = await request(app).delete('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(200);

    post = await request(app).get('/team_e/post/id?id=1');

    expect(post.statusCode).toBe(404);
  });

  test('Deleting a post by the id of the post to be deleted', async () => {
    const a_post: IPost = {
      title: 'Hello World!!',
      description: 'testing api post',
      image: 'an_image',
    };

    let res = await request(app).post('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(201);

    let post = await request(app).get('/team_e/post/title?title=Hello World!!');

    expect(post.statusCode).toBe(200);
    expect(post.body.title).toBe('Hello World!!');

    a_post.id = post.body.id;

    res = await request(app).delete(`/team_e/post/id?id=${a_post.id}`);

    expect(res.statusCode).toBe(200);

    post = await request(app).get(`/team_e/post/id?id=${a_post.id}`);

    expect(post.statusCode).toBe(404);
  });

  test('Deleting a post by the title of the post to be deleted', async () => {
    const a_post: IPost = {
      title: 'Hello World!!!',
      description: 'testing api post',
      image: 'an_image',
    };

    let res = await request(app).post('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(201);

    let post = await request(app).get('/team_e/post/title?title=Hello World!!!');

    expect(post.statusCode).toBe(200);
    expect(post.body.title).toBe('Hello World!!!');

    a_post.id = post.body.id;

    res = await request(app).delete(`/team_e/post/title?title=${a_post.title}`);

    expect(res.statusCode).toBe(200);

    post = await request(app).get(`/team_e/post/id?id=${a_post.id}`);

    expect(post.statusCode).toBe(404);
  });

  test('Deleting a post by the title of the post to be deleted THAT DOESNT EXIST', async () => {
    const res = await request(app).get('/team_e/post/title?title=Hello World!!!!!!!!!');

    expect(res.statusCode).toBe(404);
  });

  test('Deleting a post by the id of the post to be deleted THAT DOESNT EXIST', async () => {
    const res = await request(app).get('/team_e/post/id?id=651');

    expect(res.statusCode).toBe(404);
  });

  test('Deleting a post by the the post to be deleted THAT DOESNT EXIST', async () => {
    const a_post: IPost = {
      id: 12333,
      title: 'I do not exist',
      description: 'How can you be sure that you exist',
      image: 'Image of nothing',
    };

    const res = await request(app).get('/team_e/post').send(a_post);

    expect(res.statusCode).toBe(404);
  });
});
