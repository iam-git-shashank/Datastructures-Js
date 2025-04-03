let books = [];

// Get modal and buttons
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal when "Add Book" button is clicked
openModalBtn.onclick = function() {
  modal.style.display = 'block';
};

// Close modal when close button is clicked
closeModalBtn.onclick = function() {
  modal.style.display = 'none';
};

// Close modal if user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Handle the form submission
document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from submitting

  // Get input values
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const numPages = document.getElementById('numPages').value;
  const isRead = document.getElementById('read').checked;

  // Create a new book object
  const newBook = {
    bookName: bookName,
    authorName: authorName,
    numPages: numPages,
    isRead: isRead
  };

  // Add the new book object to the books array
  books.push(newBook);

  // Clear the form
  document.getElementById('bookForm').reset();

  // Close the modal
  modal.style.display = 'none';

  // Display the books
  displayBooks();
});

// Function to display all books in the array
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';  // Clear the current list

  // Loop through the books array and create list items
  books.forEach((book, index) => {
    const bookItem = document.createElement('li');
    bookItem.classList.add('book-item');
    bookItem.innerHTML = `
      <strong>Book name: ${book.bookName}</strong> <br>Author name: ${book.authorName} <br>no of pages ${book.numPages} pages
      <br>Read: ${book.isRead ? 'Yes' : 'No'}
    `;
    bookList.appendChild(bookItem);
  });
}