import loadFromStorage from './loadFromStorage.js';
import CreateNewBook from './createNewBook.js';

export default function displayBooksFromStorage() {
  const books = loadFromStorage();

  books.forEach((book) => {
    CreateNewBook.addNewBook(book);
  });
}