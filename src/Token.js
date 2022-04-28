const Token = ({ value, setToken }) => {
    return (
      <div className="Token">
        <button
          onClick={() => {
            setToken();
          }}
        >
          &#8592;
        </button>
        <h1>{value}</h1>
      </div>
    );
  };
  
  export default Token;
  