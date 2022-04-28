const bookQuery = {
    query: `
    {
      book {
        title
        author
        pages {
          pageIndex
          content
          tokens {
            position
            value
          }
        }
      }
    }
    `
  };
  
  export default bookQuery;
  