import { useEffect, useState } from "react";
import query from "./BookQuery";
import ello from "./elloUrl";
import BookHeader from "./BookHeader";
import Page from "./Page";
import Token from "./Token";
import Nav from "./Nav";

const Book = () => {
  const [book, setBook] = useState({});
  const [token, setToken] = useState("");
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    fetch(ello.baseUrl, {
      method: ello.method,
      headers: ello.headers,
      body: JSON.stringify(query)
    })
      .then((response) => response.json())
      .then((data) => {
        const book = data.data.book;
        setBook(book);
      })
      .catch((error) => console.log(error));
  }, []);

  const bookPresent = Object.keys(book).length > 0;

  let pageOffset = 1;
  if (bookPresent) {
    if (book.pages.length % 2 === 0) {
      pageOffset = 2;
    }
  }

  return bookPresent ? (
    token ? (
      <Token value={token} setToken={setToken} />
    ) : (
      <div className="Book">
        <BookHeader book={book} />

        <div className="flex-container">
          <Page page={book.pages[pageIndex]} setToken={setToken} />
          {/* {pageIndex + 1 < book.pages.length && (
            <Page page={book.pages[pageIndex + 1]} setToken={setToken} />
          )} */}
        </div>
        <Nav
          book={book}
          pageIndex={pageIndex}
          offset={pageOffset}
          setPageIndex={setPageIndex}
        />
      </div>
    )
  ) : (
    "loading content..."
  );
};

export default Book;
