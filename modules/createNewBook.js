const booksDiv = document.querySelector('.books');

export default class CreateNewBook {
  static addNewBook(book) {
    const bookUnit = document.createElement('li');
    bookUnit.className = 'books-li';
    bookUnit.id = book.id;
    bookUnit.innerHTML = `
          <p class="book-name">${book.title}</p> 
          <p>By</p>
          <p class="the-auhtor">${book.author}</p>
          <button class='removeBook'>Remove</button>
          `;
    booksDiv.appendChild(bookUnit);
    booksDiv.style.border = '3px solid black';
  }
}
