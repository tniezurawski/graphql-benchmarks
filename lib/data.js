import { faker } from '@faker-js/faker';

// that way data is consistent
faker.seed(4321);

function genData() {
  const authors = [];
  for (let i = 0; i < 20; i++) {
    const books = [];

    for (let k = 0; k < 3; k++) {
      books.push({
        id: faker.string.uuid(),
        name: faker.book.title(),
        genre: faker.book.genre(),
        numPages: faker.number.int(),
      });
    }

    authors.push({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.buzzPhrase(),
      books,
    });
  }

  return authors;
}

export const data = genData();
