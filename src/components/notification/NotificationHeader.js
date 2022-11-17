import React from "react";
import Wrapper from "./styled/NotificationHeader.styled";

const NotificationHeader = ({ markAllAsRead, newNotifications }) => {
  return (
    <Wrapper className="notification__header">
      <div className="title">
        <h3>Notifications</h3>
        {newNotifications > 0 ? <span>{newNotifications}</span> : null}
      </div>
      <button className="btn btn-mark" onClick={markAllAsRead}>
        Mark all as read
      </button>
    </Wrapper>
  );
};

export default NotificationHeader;
