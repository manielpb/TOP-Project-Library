class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
  }
}







const myLibrary = [];



function addBookToLibrary(){
   const newBook = {
    title: prompt('Enter Book Title'),
    author:prompt('Enter Book Author'),
    pages:prompt("Enter Book Pages"),
    read: prompt('Have You Read? (yes/no'),
  }
  
  myLibrary.push(newBook);
  console.log(newBook)


  function loopBooks(){
  myLibrary.forEach((book)=>{
    const newDiv = document.createElement('div');
    newDiv.textContent = `${newBook.title}, ${newBook.author}, ${newBook.pages}, ${newBook.read}`;
    newDiv.className = 'card'
    document.body.appendChild(newDiv)
  })

 
}
    loopBooks()
}


function createDialog(){
  const dialog = document.createElement('dialog');
  dialog.id = 'dialog';

  const dialogBody = document.createElement('div');
  dialogBody.className = 'dialog-body';

  const bookForm = document.createElement('form');
  bookForm.id = 'dialog-form';

  const bookNameDiv = document.createElement('div');
  const bookNameLabel = document.createElement('label');
  bookNameLabel.setAttribute('for','name');
  bookNameLabel.textContent = 'Name';
  const bookNameInput = document.createElement('input');
  bookNameInput.type = 'text';
  bookNameInput.id = 'name';
  bookNameInput.name = 'name';
  bookNameDiv.appendChild(bookNameLabel);
  bookNameDiv.appendChild(bookNameInput);

  const bookAuthorDiv = document.createElement('div');
  const bookAuthorLabel = document.createElement('label');
  bookAuthorLabel.setAttribute('for','title');
  bookAuthorLabel.textContent = 'Title';
  const bookAuthorInput = document.createElement('input');
  bookAuthorInput.type = 'text';
  bookAuthorInput.id = 'author';
  bookAuthorInput.name = 'author';
  bookAuthorDiv.appendChild(bookAuthorLabel);
  bookAuthorDiv.appendChild(bookAuthorInput);

  const bookPagesDiv = document.createElement('div');
  const bookPagesLabel = document.createElement('label');
  bookPagesLabel.setAttribute('for', 'pages');
  bookPagesLabel.textContent = 'Number of Pages';
  const bookPagesInput = document.createElement('input');
  bookPagesInput.type = 'number';
  bookPagesInput.id = 'pages';
  bookPagesInput.name = 'pages';
  bookPagesDiv.appendChild(bookPagesLabel);
  bookPagesDiv.appendChild(bookPagesInput)

  bookForm.appendChild(bookNameDiv);
  bookForm.appendChild(bookAuthorDiv);
  bookForm.appendChild(bookPagesDiv);

  dialogBody.appendChild(bookForm);


  const dialogFooter = document.createElement('div');
  dialogFooter.className = 'dialog-footer';

  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.id = 'closeDialog';
  cancelButton.textContent = 'Cancel';

  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.textContent = 'Submit';

  dialogFooter.appendChild(cancelButton);
  dialogFooter.appendChild(submitButton);

  dialog.appendChild(dialogBody);
  dialog.appendChild(dialogFooter);

  document.body.appendChild(dialog);

  cancelButton.addEventListener('click',()=>{
    dialog.close();
  });

 
  bookForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Form Submitted');
   console.log('Name', form.name.value);
   dialog.close();
});

return dialog;


}

const dialog = createDialog();

const openDialogButton = document.getElementById('dialogButton');
openDialogButton.addEventListener('click', ()=>{
  dialog.showModal();
})
  

// addBookToLibrary()



