const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-card">
      <img
        className="profile-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="Avatar"
      />
      <h2 className="profile-name">Kiran V</h2>
      <p className="profile-description">
        Vishnu Institute of Computer and Education Technology
        <br /> Bhimavaram
      </p>
      <img
        className="profile-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="Watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
