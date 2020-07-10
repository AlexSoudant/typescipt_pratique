//ctrl + shift + P
// ctrl + shift + I
//https://www.typescriptlang.org/play/#
//faites des schémas draw.io

function getAllBooks() {
  let books = [
    { title: 'Ulysses', author: 'james Joyce', available: true },
    {
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      available: false,
    },
    {
      title: 'I know why the caged bird sings',
      author: 'Maya Angelou',
      available: true,
    },
  ];

  return books;
}

function logFirstAvailable(books) {
  let numberOfBooks = books.length;

  for (let currentBook of books) {
    let firstAvailable = '';

    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }
  console.log('numberOfBooks :', numberOfBooks);
  console.log('firstAvailable: ', firstAvailable);
}

const allBooks = getAllBooks();
allBooks.push({
  title: 'Moby Dick',
  author: 'Herman Melville',
  available: true,
});
logFirstAvailable(allBooks);

enum Category {
  Biography,
  Poetry,
  Fiction,
} // 0, 1, 2

let favoriteCategory: Category = Category.Biography;
console.log(favoriteCategory);

let categoryString = Category[favoriteCategory];
console.log(categoryString);

let strArray1: string[] = ['here', 'are', 'strings'];
let strArray2: Array<string> = ['here', 'are', 'strings'];

let myTuple: [number, string] = [25, 'truck'];
let firstElement = myTuple[0]; //25
//myTuple[2] = 100;
//myTuple.push(100)
//myTuple.push(allBooks)

function getBookTitlesByCategory(categoryFilter: Category): Array<string> {
  const allBooks = getAllBooks();
  let filteredTitles: string[];

  filteredTitles = allBooks
    .filter((currentBook) => currentBook.title === 'categoryFilter')
    .map((book) => book.title);

  return filteredTitles;
}

// **************************** Functions ****************

/**
 *
 * @param name
 * @param id
 */
function createCustomerId(name: string, id: number): string {
  return name + id;
}

let arr = allBooks.filter(function (book) {
  return book.author === 'Herman Melville';
});
// écrire en arrow

allBooks.forEach(() => console.log('plop'));
allBooks.map(() => console.log('plop'));
allBooks.reduce((acc, book) => {
  acc.author = acc.author + book.author;
  return acc;
});

//opérateur this
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this
function book1() {
  let self = this;
  self.date = 2016;
  setInterval(function () {
    console.log(self.date);
  }, 1000);
}

function book2() {
  this.date = 2016;
  setInterval(() => {
    console.log(this.date);
  }, 1000);
}

//optional + default param

// rest
function getBook(name: string, ...bookId: number[]) {}
getBook('allo', 1, 2);

//*************** Interface */

interface Book {
  id?: number;
  //method
  damaged: (reason: string) => void;
}

//generics
let historyBooks = new Array<Book>(5);

function log<T>(thing: T): T {
  return;
}

// return null / programmation impérative vs déclarative

function makeCakeImperative(...ingredients) {
  let cake = [];
  // ajouter farine
  cake.push(ingredients[0]);

  // ajouter sucre
  cake.push(ingredients[1]);

  //etc...

  if (ingredients[5]) {
    console.log('pas besoin de café pour faire un gateau');
    return;
  }

  return cake;
}

function makeCakeDeclarative(...ingredients) {
  let cake = [];
  // mélanger les ingrédients pour faire la pate

  // cuire le gateau

  return cake;
}

// init variables dans service

// init variables class

// directives pourquoi validators

// fichiers de configuration

// archi angular

// form react / template

// less / intégration css

//angular interceptors
