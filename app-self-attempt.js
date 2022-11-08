const title = document.querySelector('#title')
const author = document.querySelector('#author')
const isbn = document.querySelector('#isbn')
const bookList = document.querySelector('#bookList')

const bookForm = document.querySelector('#book-form')
bookForm.addEventListener('submit', Book.addBook)

const books = []

function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn  
}

Book.prototype.addBook = function(title, author, isbn) {
  console.log('test1234')
  const book = new Book(title, author, isbn)
  books.push(book)
  books.forEach((book) => {
    const row = document.createElement('tr')
    const textNode = document.createTextNode(book)
    row.appendChild(textNode)
    bookList.appendChild(row)
  })
}

const bookOne = new Book(title.value, author.value, isbn.value)

console.log(bookOne)