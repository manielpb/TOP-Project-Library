const myLibrary=[];



class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

Book.prototype.toggleReadStatus = function(){
    this.read = !this.read;
}

function addBookToLibrary(book){
   myLibrary.push(book);
  renderBook();
}

let bookButton = document.querySelector('#book-button');
let bookForm = document.querySelector('#bookForm');
let closeForm = document.querySelector('#close-form');

bookButton.addEventListener('click', ()=>{
    bookForm.style.display = 'block';
    bookButton.style.display = 'none';
})

closeForm.addEventListener( 'click', ()=>{
    bookForm.style.display='none';
    bookButton.style.display='block';
})

bookForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    const newBook = new Book(title,author,pages,read);
    addBookToLibrary(newBook);

    bookForm.reset();
})

function renderBook(){
    const libShelf = document.querySelector('#libraryShelf');
    libShelf.innerHTML='';

    myLibrary.forEach((book,index)=>{
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-card'); //Add the 'book-card' class to the div
    
        bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        <button class='toggle-ReadStatus' data-index="${index}">${book.read ? 'Mark as Unread': 'Mark as Read'}</button>
        <button class='remove-book' data-index="${index}">Delete</button>
        `;
    
        libShelf.appendChild(bookDiv);
  

    const toggleButton = bookDiv.querySelector('.toggle-ReadStatus');
    toggleButton.addEventListener('click',()=>{
        book.toggleReadStatus();
        renderBook()
    });

   const removeButtons = bookDiv.querySelector('.remove-book');
   removeButtons.addEventListener('click',(e)=>{
    const index = e.target.dataset.index;
    removeBook(index);
     });
    });
}

function removeBook(index){
    myLibrary.splice(index,1);
    renderBook();
}

renderBook()