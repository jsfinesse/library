let myLibrary = [];

function book() 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`${title} by ${author}, ${pages}, Read status ${read}`);
    }
}

