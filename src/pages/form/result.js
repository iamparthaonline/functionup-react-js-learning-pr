const RenderResult = (props) => {
  const { showResult, firstName, removeHandler } = props;
  const arrayOfCharacters = firstName.split("");

  if (showResult) {
    return (
      <div className="result">
        Name - {firstName.toUpperCase()}
        <br />
        Length - {firstName.length}
        <br />
        <button
          onClick={() => {
            removeHandler();
          }}
        >
          Remove Section
        </button>
        <div>
          <ul>
            {arrayOfCharacters.map((character, index) => (
              <li key={index}>{character}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default RenderResult;
