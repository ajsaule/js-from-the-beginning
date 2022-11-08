// Query selectors 
const title = document.getElementById('title')
const author = document.getElementById('author')
const isbn = document.getElementById('isbn')
const bookForm = document.getElementById('book-form')

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author; 
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.querySelector('#book-list')
    const row = document.createElement('tr')

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `

    list.appendChild(row)
  }

  showAlert(message, className) {
    const div = document.createElement('div')

    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')

    container.insertBefore(div, form)

    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 3000)
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  clearFields() {
    title.value = ''
    author.value = ''
    isbn.value = ''
  }
}

bookForm.addEventListener('submit', (e) => {
  const book = new Book(title.value, author.value, isbn.value)

  const ui = new UI()

  if (title.value === '' || author.value === '' || isbn.value === '') {
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    ui.addBookToList(book)
    ui.showAlert('Book added!', 'success')
    ui.clearFields()
  }

  e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', (e) => {
  const ui = new UI()

  ui.deleteBook(e.target)
  ui.showAlert('Book Removed!', 'success')

  e.preventDefault()
})