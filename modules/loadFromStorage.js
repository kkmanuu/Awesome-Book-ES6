export default function loadFromStorage() {
  let books;

  if (localStorage.getItem('bookInfo')) {
    books = JSON.parse(localStorage.getItem('bookInfo'));
  } else {
    books = [];
  }

  return books;
}