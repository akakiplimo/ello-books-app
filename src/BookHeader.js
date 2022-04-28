const BookHeader = ({ book }) => {
    return (
      <div className="text-center">
        <h1>Ello Technology Books</h1>
        <h4>Book Title: {book.title}</h4>
        <p>
          <em>Book Author: {book.author}</em>
        </p>
      </div>
    );
  };
  
  export default BookHeader;
  