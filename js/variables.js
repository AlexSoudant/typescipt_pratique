//ctrl + shift + P
// ctrl + shift + I
//https://www.typescriptlang.org/play/#
//faites des schémas draw.io
function getAllBooks() {
    var books = [
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
    var numberOfBooks = books.length;
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        var firstAvailable = '';
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('numberOfBooks :', numberOfBooks);
    console.log('firstAvailable: ', firstAvailable);
}
var allBooks = getAllBooks();
allBooks.push({
    title: 'Moby Dick',
    author: 'Herman Melville',
    available: true,
});
logFirstAvailable(allBooks);
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
})(Category || (Category = {})); // 0, 1, 2
var favoriteCategory = Category.Biography;
console.log(favoriteCategory);
var categoryString = Category[favoriteCategory];
console.log(categoryString);
var strArray1 = ['here', 'are', 'strings'];
var strArray2 = ['here', 'are', 'strings'];
var myTuple = [25, 'truck'];
var firstElement = myTuple[0]; //25
//myTuple[2] = 100;
//myTuple.push(100)
//myTuple.push(allBooks)
function getBookTitlesByCategory(categoryFilter) {
    var allBooks = getAllBooks();
    var filteredTitles;
    filteredTitles = allBooks
        .filter(function (currentBook) { return currentBook.title === 'categoryFilter'; })
        .map(function (book) { return book.title; });
    return filteredTitles;
}
// **************************** Functions ****************
/**
 *
 * @param name
 * @param id
 */
function createCustomerId(name, id) {
    return name + id;
}
var arr = allBooks.filter(function (book) {
    return book.author === 'Herman Melville';
});
// écrire en arrow
allBooks.forEach(function () { return console.log('plop'); });
allBooks.map(function () { return console.log('plop'); });
allBooks.reduce(function (acc, book) {
    acc.author = acc.author + book.author;
    return acc;
});
//opérateur this
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this
function book1() {
    var self = this;
    self.date = 2016;
    setInterval(function () {
        console.log(self.date);
    }, 1000);
}
function book2() {
    var _this = this;
    this.date = 2016;
    setInterval(function () {
        console.log(_this.date);
    }, 1000);
}
//optional + default param
// rest
function getBook(name) {
    var bookId = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookId[_i - 1] = arguments[_i];
    }
}
getBook('allo', 1, 2);
//generics
var historyBooks = new Array(5);
function log(thing) {
    return;
}
//# sourceMappingURL=variables.js.map