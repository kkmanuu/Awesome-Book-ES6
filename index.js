/* eslint-disable max-classes-per-file */
import Books from './modules/books.js';
import CreateNewBook from './modules/createNewBook.js';
import loadFromStorage from './modules/loadFromStorage.js';
import { RemoveBook, removeBookFromStorage } from './modules/removeBooks.js';
import { DateTime } from './modules/luxon.js';
import displayBooksFromStorage from './modules/displayBooksFromStorage.js';

const date = DateTime.fromObject({ }, { zone: 'system' }).toLocaleString(DateTime.DATE_FULL);
const time = DateTime.fromObject({ }, { zone: 'system' }).toLocaleString(DateTime.TIME_SIMPLE);
const form = document.querySelector('.form');
const addNew = document.querySelector('.add-book');
const booksDiv = document.querySelector('.books');
const viewList = document.querySelector('.my-grid');
const viewContact = document.querySelector('.contact-info');
const listLink = document.querySelectorAll('.link-1');
const AddLink = document.querySelectorAll('.link-2');
const contactLink = document.querySelectorAll('.link-3');
const dateContainer = document.querySelector('.date');

dateContainer.innerHTML = `${date} ${time}`;

listLink.forEach((link) => link.addEventListener('click', () => {
  viewList.style.display = 'flex';
  addNew.style.display = 'none';
  viewContact.style.display = 'none';
}));

AddLink.forEach((link) => link.addEventListener('click', () => {
  addNew.style.display = 'flex';
  viewList.style.display = 'none';
  viewContact.style.display = 'none';
}));

contactLink.forEach((link) => link.addEventListener('click', () => {
  viewContact.style.display = 'flex';
  viewList.style.display = 'none';
  addNew.style.display = 'none';
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('.book-title');
  const authorInput = document.querySelector('.book-author');
  const title = document.querySelector('.book-title').value;
  const author = document.querySelector('.book-author').value;
  const books = loadFromStorage();

  if (!title || !author) {
    addNew.style.display = 'flex';
  } else {
    const book = new Books(title, author, Date.now());
    books.push(book);
    CreateNewBook.addNewBook(book);
    loadFromStorage();

    localStorage.setItem('bookInfo', JSON.stringify(books));

    titleInput.value = '';
    authorInput.value = '';
  }
});

booksDiv.addEventListener('click', (e) => {
  RemoveBook.removeBookFromPage(e.target);
  removeBookFromStorage(e.target);
});

window.addEventListener('load', displayBooksFromStorage());
window.addEventListener('load', RemoveBook.displayOnLoad());