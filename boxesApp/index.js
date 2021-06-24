function Box(props) {
  // Write your code here.
  const { className, children } = props;
  return <div className={`box ${className}`}>{children}</div>;
}

const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" children="Small" />
      <Box className="medium-box" children="Medium" />
      <Box className="large-box" children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
