// Query selectors 
const title = document.getElementById('title')
const author = document.getElementById('author')
const isbn = document.getElementById('isbn')
const bookForm = document.getElementById('book-form')

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor 
function UI() { }

// Add book to list 
UI.prototype.addBookToList = function(book) {
  const list = document.querySelector('#book-list')
  // Create tr element 
  const row = document.createElement('tr')
  // Insert cols 
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `

  list.appendChild(row)
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div 
  const div = document.createElement('div')
  // add classes
  div.className = `alert ${className}`
  // add text 
  div.appendChild(document.createTextNode(message))
  // get parent 
  const container = document.querySelector('.container')
  const form = document.querySelector('#book-form')
  // Insert alert
  container.insertBefore(div, form)

  // Timeout after 3 sec
  setTimeout(() => {
    document.querySelector('.alert').remove()
  }, 3000)
}

// Delete book 
UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove()
  }
}

// Clear fields of UI
UI.prototype.clearFields = function() {
  title.value = ''
  author.value = ''
  isbn.value = ''
}

// Event listener
bookForm.addEventListener('submit', (e) => {
  // Instantiating a book 
  const book = new Book(title.value, author.value, isbn.value)

  // Instantiate UI object
  const ui = new UI()

  // Validate 
  if (title.value === '' || author.value === '' || isbn.value === '') {
    // Error alert 
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add book to list 
    ui.addBookToList(book)

    // show success 
    ui.showAlert('Book added!', 'success')

    // Clear fields 
    ui.clearFields()
  }

  e.preventDefault();
})

// Event listener 
document.getElementById('book-list').addEventListener('click', (e) => {
  // Instantiate UI object
  const ui = new UI()
  
  // Delete item from DOM
  ui.deleteBook(e.target)

  // Show message once deleted 
  ui.showAlert('Book Removed!', 'success')

  e.preventDefault()
})