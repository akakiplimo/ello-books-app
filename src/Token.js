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
        <p>{value}</p>
      </div>
    );
  };
  
  export default Token;
  