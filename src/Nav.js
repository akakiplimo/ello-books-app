const Nav = ({ book, pageIndex, offset, setPageIndex }) => {
    return (
      <div className="Nav text-center">
        <button
          onClick={() => {
            setPageIndex(pageIndex - 1);
          }}
          disabled={pageIndex === 0}
        >
          PREVIOUS
        </button>
        <button
          onClick={() => {
            setPageIndex(pageIndex + 1);
          }}
          disabled={book.pages.length + 1 - offset === pageIndex ? true : false}
        >
          NEXT
        </button>
      </div>
    );
  };
  
  export default Nav;
  