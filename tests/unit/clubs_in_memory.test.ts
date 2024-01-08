// Must import jest functions every time you want to use them
import { expect, test, describe } from '@jest/globals';

import { ICLUB } from 'src/interfaces/TEAM_A';
import Db from '../../src/TEAM_A/database';

describe('Testing adding', () => {
  test('Adding and retrieving a club', async () => {
    const db = new Db();

    const club: ICLUB = {
      id: 0,
      name: 'The Penning Club',
      about_club: 'A club for writing',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    // Call addClub with the club details
    await db.addClub(club.name, club.about_club, club.image);

    // Check if name is defined before calling getClubByName
    if (typeof club.name === 'string') {
      const addedClub = await db.getClubByName(club.name);

      // Your expect statement here
      expect(addedClub).toEqual(club);
    } else {
      // Handle the case where club.name is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Club name is undefined');
    }
  });

  test('Adding a club with invalid parameters', async () => {
    const db = new Db();

    // Use rejects matcher for testing promise rejection
    await expect(db.addClub()).rejects.toThrow(
      'Must provide a club name at least.'
    );
  });

  test('Adding a club with incomplete parameters', async () => {
    const db = new Db();

    // Use rejects matcher for testing promise rejection
    await expect(db.addClub(undefined,"a club")).rejects.toThrow(
      'Must provide a club name at least.'
    );
  });
});

describe('Testing retrieving', () => {
  test('Retrieving a club by name that does not exist', async () => {
    const db = new Db();

    // Use rejects matcher for testing promise rejection
    await expect(db.getClubByName('lol')).rejects.toThrow('Could not find club with name: [lol]');
  });

  test('Retrieving a club by ID that does not exist', async () => {
    const db = new Db();

    // Use rejects matcher for testing promise rejection
    await expect(db.getClubByID(420)).rejects.toThrow('Could not find club with id: [420]');
  });

  test('Retrieving clubs by substring that exists', async () => {
    const db = new Db();
    const matchClubs = await db.getClubsByNameSubString("Penning");

      // Your expect statement here
      expect(matchClubs).not.toHaveLength(0);
  });

  test('Retrieving clubs by substring that does not exists', async () => {
    const db = new Db();

      // Your expect statement here
      await expect(db.getClubsByNameSubString("Lane")).rejects.toThrow('Could not find any clubs with name containing: [Lane]');
  });

  test('Retrieving all registered clubs', async () => {
    const db = new Db();
    const matchClubs = await db.getAllClubs();

      // Your expect statement here
      expect(matchClubs).not.toHaveLength(0);
  });

});

describe('Testing editing', () => {
  test('Adding, editing and retrieving a club', async () => {
    const db = new Db();

    let club: ICLUB = {
      id: 1,
      name: 'The Lenna Club',
      about_club: 'A club for writing',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    let addedClub: ICLUB;

    // Call addClub with the club details
    await db.addClub(club.name, club.about_club, club.image);

    // Check if name is defined before calling getClubByName
    if (typeof club.name === 'string') {
      addedClub = await db.getClubByName(club.name);

      club.id = addedClub.id;

      // Your expect statement here
      expect(addedClub).toEqual(club);
    } else {
      // Handle the case where club.name is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Club name is undefined');
    }

    club = addedClub;

    club.name += '!!!!';

    await db.editClubInfo(club);

    // Check if name is defined before calling getClubByName
    if (typeof club.name === 'string') {
      // Your expect statement here
      expect(await db.getClubByName(club.name)).toEqual(club);
    } else {
      // Handle the case where club.name is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Club name is undefined');
    }
  });

  test('Editing a club that doesnt exist', async () => {
    const db = new Db();

    await expect(db.editClubInfo({ id: 420, name: 'no one here' })).rejects.toThrow(
      'Could not find and edit club with id: [420]'
    );
  });
});

describe('Testing deleting', () => {
  test('Adding and deleting a club by id', async () => {
    const db = new Db();

    const club: ICLUB = {
      id: 2,
      name: 'The Frank Club',
      about_club: 'Cheering the truth tellers',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    // Call addClub with the club details
    await db.addClub(club.name, club.about_club, club.image);

    // Check if name is defined before calling getClubByName
    if (typeof club.name === 'string') {
      const addedClub = await db.getClubByName(club.name);

      club.id = addedClub.id;

      // Your expect statement here
      expect(addedClub).toEqual(club);
    } else {
      // Handle the case where club.name is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Club name is undefined');
    }

    // Use rejects matcher for testing promise rejection
    await db.deleteClubByID(club.id as number);

    await expect(db.getClubByID(club.id as number)).rejects.toThrow(
      `Could not find club with id: ${club.id}]`
    );
  });

  test('Adding and deleting a club by name', async () => {
    const db = new Db();

    const club: ICLUB = {
      id: 3,
      name: 'The Planking Club',
      about_club: 'Contemplating the essence of planks',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    // Call addClub with the club details
    await db.addClub(club.name, club.about_club, club.image);

    // Check if name is defined before calling getClubByName
    if (typeof club.name === 'string') {
      const addedClub = await db.getClubByName(club.name);

      club.id = addedClub.id;

      // Your expect statement here
      expect(addedClub).toEqual(club);
    } else {
      // Handle the case where club.name is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Club name is undefined');
    }

    // Use rejects matcher for testing promise rejection
    await db.deleteClubByName(club.name);

    await expect(db.getClubByName(club.name)).rejects.toThrow(
      `Could not find club with name: [${club.name}]`
    );
  });

  test('Adding and deleting a club by the club itself', async () => {
    const db = new Db();

    const club: ICLUB = {
      id: 4,
      name: 'The Thinking Club',
      about_club: 'Exploring odd questions',
      image: 'https://avatars.githubusercontent.com/u/1719487?s=200&v=4',
    };

    // Call addClub with the club details
    await db.addClub(club.name, club.about_club, club.image);

    // Check if name is defined before calling getClubByName
    if (typeof club.name === 'string') {
      const addedClub = await db.getClubByName(club.name);

      club.id = addedClub.id;

      // Your expect statement here
      expect(addedClub).toEqual(club);
    } else {
      // Handle the case where club.name is undefined
      // e.g., throw an error, fail the test, etc.
      throw new Error('Club name is undefined');
    }

    // Use rejects matcher for testing promise rejection
    await db.deleteClub(club);

    await expect(db.getClubByName(club.name)).rejects.toThrow(
      `Could not find club with name: [${club.name}]`
    );
  });
});
