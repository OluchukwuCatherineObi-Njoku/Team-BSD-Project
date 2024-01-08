// Must import jest functions every time you want to use them
import { expect, test, describe } from '@jest/globals';
import { ICLUB } from 'src/interfaces/TEAM_A';
import request from 'supertest';
import { app } from '../../src/server';

describe('Testing club api: creating a club', () => {
  test('Adding  a club', async () => {
    const a_club: ICLUB = {
      name: 'The Coming of the White Worm',
      about_club: 'The wormiest of all worms comes to earth',
      image: 'https://static.wikia.nocookie.net/villains/images/b/ba/D8m0Z.png/revision/latest?cb=20140425131427',
    };

    const res = await request(app).post('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(201);
  });

  test('Adding  a club with INVALID PARAMETERS', async () => {
    const a_club: ICLUB = {};

    const res = await request(app).post('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(400);
  });
});

describe('Testing club api: retrieving a club', () => {
  test('Retrieving a club by id', async () => {
    const a_club: ICLUB = {
        name: 'The Fall of the Lemurs',
        about_club: 'The King Julian disgrace',
        image: 'https://static.wikia.nocookie.net/villains/images/b/ba/D8m0Z.png/revision/latest?cb=20140425131427',
      };

    const res = await request(app).post('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(201);

    const club = await request(app).get('/team_a/club/id?id=1');

    expect(club.statusCode).toBe(200);
    expect(club.body.id).toBe(1);
    expect(club.body.name).toBe('The Fall of the Lemurs');
  });

  test('Retrieving a club by id THAT DOESNT EXIST', async () => {
    const a_club: ICLUB = {
      id: 14289389432,
      name: 'Hello World!',
      about_club: 'testing api post',
      image: 'an_image',
    };

    const club = await request(app).get(`/team_a/club/id?id=${a_club.id}`);

    expect(club.statusCode).toBe(404);
  });

  test('Retrieving a club by name', async () => {
    const a_club: ICLUB = {
        name: 'The Fall of the Lemurs',
        about_club: 'The King Julian disgrace',
        image: 'https://static.wikia.nocookie.net/villains/images/b/ba/D8m0Z.png/revision/latest?cb=20140425131427',
      };

    const res = await request(app).post('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(201);

    const club = await request(app).get('/team_a/club/name?name=The Fall of the Lemurs');

    expect(club.statusCode).toBe(200);
    expect(club.body.name).toBe('The Fall of the Lemurs');
  });

  test('Retrieving a club by name THAT DOESNT EXIST', async () => {
    const a_club: ICLUB = {
      name: 'Hello World321312321321!',
      about_club: 'testing api post',
      image: 'an_image',
    };

    const club = await request(app).get(`/team_a/club/name?name=${a_club.name}`);

    expect(club.statusCode).toBe(404);
  });

  test('Retrieving clubs by substring that exists', async () => {
    const a_club: ICLUB = {
        name: 'The Filanderers',
        about_club: 'The King Julian disgrace',
        image: 'https://static.wikia.nocookie.net/villains/images/b/ba/D8m0Z.png/revision/latest?cb=20140425131427',
      };

      const res = await request(app).post('/team_a/club').send(a_club);

      expect(res.statusCode).toBe(201);

      const club = await request(app).get(`/team_a/club/nameSubStr?nameSubStr=Filander`);

    expect(club.statusCode).toBe(200);
    expect(club.body).not.toHaveLength(0);
  });

  test('Retrieving clubs by substring that does not exist', async () => {
    const club = await request(app).get(`/team_a/club/nameSubStr?nameSubStr=Paddy`);
    expect(club.statusCode).toBe(404);
});

  test('Retrieving all registered clubs', async () => {
    const club = await request(app).get('/team_a/club');

      // Your expect statement here
      expect(club.statusCode).toBe(200);
      expect(club.body).not.toHaveLength(0);
  });

});

describe('Testing club api: editing a club', () => {
  test('Editing a club by a new club', async () => {
    
    const a_club: ICLUB = {
        name: 'The Flinstones',
        about_club: 'Cavey, but modern representation',
        image: 'https://static.wikia.nocookie.net/villains/images/b/ba/D8m0Z.png/revision/latest?cb=20140425131427',
      };

    let res = await request(app).post('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(201);

    let club = await request(app).get('/team_a/club/name?name=The Flinstones');

    expect(club.statusCode).toBe(200);
    expect(club.body.name).toBe('The Flinstones');

    a_club.id = club.body.id;
    a_club.name = 'Goodbye World!';

    res = await request(app).put('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(200);

    club = await request(app).get(`/team_a/club/id?id=${a_club.id}`);

    expect(club.body.name).toBe('Goodbye World!');
  });

  test('Editing a post by a new post THAT DOESNT EXIST', async () => {
    const a_club: ICLUB = {
      id: 1241241241212,
      name: 'Hello World!!!!!!!!!!!',
      about_club: 'testing api post',
      image: 'an_image',
    };

    const res = await request(app).put('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(404);
  });
});

describe('Testing club api: deleting a club', () => {
  test('Deleting a club by the club to be deleted', async () => {
    const a_club: ICLUB = {
        name: 'The Filanderersss',
        about_club: 'The King Julian disgrace',
        image: 'https://static.wikia.nocookie.net/villains/images/b/ba/D8m0Z.png/revision/latest?cb=20140425131427',
      };

    let res = await request(app).post('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(201);

    let club = await request(app).get('/team_a/club/name?name=The Filanderersss');

    expect(club.statusCode).toBe(200);
    expect(club.body.name).toBe('The Filanderersss');

    a_club.id = club.body.id;

    res = await request(app).delete('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(200);

    club = await request(app).get(`/team_a/club/id?id=${a_club.id}`);

    expect(club.statusCode).toBe(404);
  });

  test('Deleting a club by the id of the club to be deleted', async () => {
    const a_club: ICLUB = {
        name: 'The Filanderers',
        about_club: 'The King Julian disgrace',
        image: 'https://static.wikia.nocookie.net/villains/images/b/ba/D8m0Z.png/revision/latest?cb=20140425131427',
      };

      let res = await request(app).post('/team_a/club').send(a_club);

      //expect(res.statusCode).toBe(201);
  
      let club = await request(app).get('/team_a/club/name?name=The Filanderers');

      expect(club.statusCode).toBe(200);
      expect(club.body.name).toBe('The Filanderers');
  
      a_club.id = club.body.id;
  
     res = await request(app).delete(`/team_a/post/id?id=${a_club.id}`);

    expect(res.statusCode).toBe(200);

    club = await request(app).get(`/team_a/club/id?id=${a_club.id}`);

    expect(club.statusCode).toBe(404);
  });

  test('Deleting a club by the name of the club to be deleted', async () => {
    const a_club: ICLUB = {
        name: 'The Filanderers',
        about_club: 'The King Julian disgrace',
        image: 'https://static.wikia.nocookie.net/villains/images/b/ba/D8m0Z.png/revision/latest?cb=20140425131427',
      };

    let res = await request(app).post('/team_a/club').send(a_club);

    expect(res.statusCode).toBe(201);

    let club = await request(app).get('/team_a/club/name?name=The Filanderers');

    expect(club.statusCode).toBe(200);
    expect(club.body.name).toBe('The Filanderers');

    a_club.id = club.body.id;

    res = await request(app).delete(`/team_a/club/name?name=${a_club.name}`);

    expect(res.statusCode).toBe(200);

    club = await request(app).get(`/team_a/club/id?id=${a_club.id}`);

    expect(club.statusCode).toBe(404);
  });

  test('Deleting a club by the name of the club to be deleted THAT DOESNT EXIST', async () => {
    const res = await request(app).get('/team_a/club/name?name=The Filanderers');

    expect(res.statusCode).toBe(404);
  });

  test('Deleting a club by the id of the club to be deleted THAT DOESNT EXIST', async () => {
    const res = await request(app).get('/team_a/club/id?id=651');

    expect(res.statusCode).toBe(404);
  });

  test('Deleting a club by the the club to be deleted THAT DOESNT EXIST', async () => {
    const a_club: ICLUB = {
      id: 12333,
      name: 'I do not exist',
      about_club: 'How can you be sure that you exist',
      image: 'Image of nothing',
    };

    const res = await request(app).get('/team_a/club/name?name=I do not exist').send(a_club);

    expect(res.statusCode).toBe(404);
  });
});
