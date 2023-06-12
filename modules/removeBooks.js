import loadFromStorage from './loadFromStorage.js';

const booksDiv = document.querySelector('.books');
const viewList = document.querySelector('.my-grid');

export class RemoveBook {
  static removeBookFromPage(target) {
    if (target.classList.contains('removeBook')) {
      target.parentElement.remove();
    }

    if (!booksDiv.firstElementChild) {
      booksDiv.style.border = '3px solid white';
    }
  }

  static displayOnLoad() {
    viewList.style.display = 'flex';
  }
}

export const removeBookFromStorage = (element) => {
  const books = loadFromStorage();
  const { id } = element.parentElement;
  const index = books.findIndex((book) => book.id === id);
  books.splice(index, 1);
  localStorage.setItem('bookInfo', JSON.stringify(books));
};
