# Book Management API Documentation

ALL API ROUTES REQUIRE AUTHENTICATION & AUTHORIZATION

## General APIs

```typescript
/**
 * POST route to add a new book.
 * Takes a book object in req.body.
 * /api/books/add
 */
router.post('/books/add', addBook);
```

```typescript
/**
 * GET route to fetch all books.
 * /api/books/all
 */
router.get('/books/all', getAllBooks);
```

## MongoDB

### BOOK

All API functionality for the Book (MongoDB) class:

```typescript
/**
 * POST route to add a book.
 * Takes a book object in req.body.
 * /api/mongo/books
 */
router.post('/mongo/books', addMongoBook);
```

```typescript
/**
 * GET route to get a book by ID.
 * Takes a bookID string query parameter.
 * /api/mongo/books
 */
router.get('/mongo/books/:id', getMongoBookById);
```

```typescript
/**
 * PUT route to update a book.
 * Takes a book object in req.body.
 * /api/mongo/books
 */
router.put('/mongo/books/:id', updateMongoBook);
```

```typescript
/**
 * DELETE route to delete a book.
 * Takes a bookID string query parameter.
 * /api/mongo/books
 */
router.delete('/mongo/books/:id', deleteMongoBook);
```

### AUTHOR

All API functionality for the Author (MongoDB) class:

```typescript
/**
 * POST route to add an author.
 * Takes an author object in req.body.
 * /api/mongo/authors
 */
router.post('/mongo/authors', addMongoAuthor);
```

```typescript
/**
 * GET route to get an author by ID.
 * Takes an authorID string query parameter.
 * /api/mongo/authors
 */
router.get('/mongo/authors/:id', getMongoAuthorById);
```

```typescript
/**
 * PUT route to update an author.
 * Takes an author object in req.body.
 * /api/mongo/authors
 */
router.put('/mongo/authors/:id', updateMongoAuthor);
```

```typescript
/**
 * DELETE route to delete an author.
 * Takes an authorID string query parameter.
 * /api/mongo/authors
 */
router.delete('/mongo/authors/:id', deleteMongoAuthor);
```

## PostgreSQL

### GENRE

All available APIs for the Genre (PostgreSQL) class:

```typescript
/**
 * GET route to retrieve all genres.
 * /api/pg/genres
 */
router.get('/pg/genres', getAllGenres);
```

```typescript
/**
 * POST route to add a genre.
 * /api/pg/genres
 */
router.post('/pg/genres', addGenre);
```

```typescript
/**
 * PUT route to update a genre by ID.
 * /api/pg/genres/:id
 */
router.put('/pg/genres/:id', updateGenre);
```

```typescript
/**
 * DELETE route to remove a genre by ID.
 * /api/pg/genres/:id
 */
router.delete('/pg/genres/:id', deleteGenre);
```

### USER

All API functionality for the User (PostgreSQL) class:

```typescript
/**
 * GET route to retrieve user information by ID.
 * /api/pg/users/:id
 */
router.get('/pg/users/:id', getUserById);
```

```typescript
/**
 * POST route to add a user.
 * /api/pg/users
 */
router.post('/pg/users', addUser);
```

```typescript
/**
 * PUT route to update user information by ID.
 * /api/pg/users/:id
 */
router.put('/pg/users/:id', updateUser);
```

```typescript
/**
 * DELETE route to remove a user by ID.
 * /api/pg/users/:id
 */
router.delete('/pg/users/:id', deleteUser);
```
