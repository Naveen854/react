const element = (
  //   Write your code here.
  <div className="container">
    <h1 className="heading">Super Over League</h1>
    <div className="image-container">
      <img
        className="team-image"
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        alt="RCB"
      />
      <img
        className="team-image"
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        alt="CSK"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
