function Notification(props) {
  // Write your code here.
  const { className, notificationText, iconSrc } = props;
  return (
    <div className={`notification-box ${className}`}>
      <img className="icon-image" src={iconSrc} />
      <p className="message">{notificationText}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div class="notifications-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="information"
      notificationText="Information Message"
      iconSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="success"
      notificationText="Success Message"
      iconSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="warning"
      notificationText="Warning Message"
      iconSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="error"
      notificationText="Error Message"
      iconSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
