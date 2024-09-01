const BookOperation = {
  BORROW: "borrow",
  RETURN: "return",
};

const library = {
  books: [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      available: true,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      available: true,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      available: true,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      available: true,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      available: true,
    },
  ],

  readers: [
    {
      id: 3001,
      name: "Олександр Петренко",
      email: "oleksandr.petrenko@example.com",
      //new Set() - перевіряє унікальність елементів, має власні методи для спрощення (has,delete,add)
      books: new Set(),
    },
    {
      id: 3002,
      name: "Марія Іваненко",
      email: "mariya.ivanenko@example.com",
      books: new Set(),
    },
    {
      id: 3003,
      name: "Андрій Ковальчук",
      email: "andriy.kovalchuk@example.com",
      books: new Set(),
    },
    {
      id: 3004,
      name: "Наталія Шевченко",
      email: "nataliya.shevchenko@example.com",
      books: new Set(),
    },
    {
      id: 3005,
      name: "Ігор Сидоренко",
      email: "ihor.sydorenko@example.com",
      books: new Set(),
    },
  ],

  operations: [],

  lastId: { book: 5, reader: 3005, operation: 0 },

  createOperation(type, bookId, readerId) {
    const operation = {
      id: ++this.lastId.operation,
      type,
      bookId,
      readerId,
      date: new Date().toISOString(),
    };
    this.operations.push(operation);
    return operation;
  },

  addBook({ title, author, year }) {
    const newBook = {
      id: ++this.lastId.book,
      title,
      author,
      year,
      available: true,
    };
    this.books.push(newBook);
    return newBook;
  },

  addReader({ name, email }) {
    const newReader = {
      id: ++this.lastId.reader,
      name,
      email,

      books: new Set(),
    };
    this.readers.push(newReader);
    return newReader;
  },

  findBook(bookId) {
    return this.books.find((book) => book.id === bookId);
  },

  findReader(readerId) {
    return this.readers.find((reader) => reader.id === readerId);
  },

  borrowBook(bookId, readerId) {
    const book = this.findBook(bookId);
    const reader = this.findReader(readerId);

    if (!book || !reader) {
      console.log("Книгу або читача не знайдено");
      return null;
    }

    if (!book.available) {
      console.log("Книга вже видана");
      return null;
    }

    book.available = false;
    reader.books.add(bookId);
    return this.createOperation(BookOperation.BORROW, bookId, readerId);
  },

  returnBook(bookId, readerId) {
    const book = this.findBook(bookId);
    const reader = this.findReader(readerId);

    if (!book || !reader) {
      console.log("Книгу або читача не знайдено");
      return null;
    }

    if (!reader.books.has(bookId)) {
      console.log("Ця книга не була видана цьому читачеві");
      return null;
    }

    book.available = true;
    reader.books.delete(bookId);
    return this.createOperation(BookOperation.RETURN, bookId, readerId);
  },

  getAvailableBooks() {
    return this.books.filter((book) => book.available);
  },

  getReaderBooks(readerId) {
    const reader = this.findReader(readerId);
    return reader ? this.books.filter((book) => reader.books.has(book.id)) : [];
  },

  getOperationDetails(id) {
    return this.operations.find((operation) => operation.id === id);
  },

  getOperationTotal(type) {
    return this.operations.filter((operation) => operation.type === type)
      .length;
  },
};

console.log("Доступні книги:", library.getAvailableBooks());

const borrowOp = library.borrowBook(1, 3001);
console.log("Операція видачі:", borrowOp);
console.log("Книги читача 3001:", library.getReaderBooks(3001));

const returnOp = library.returnBook(1, 3001);
console.log("Операція повернення:", returnOp);
console.log("Доступні книги після повернення:", library.getAvailableBooks());

console.log(
  "Загальна кількість операцій видачі:",
  library.getOperationTotal(BookOperation.BORROW)
);
console.log(
  "Загальна кількість операцій повернення:",
  library.getOperationTotal(BookOperation.RETURN)
);
