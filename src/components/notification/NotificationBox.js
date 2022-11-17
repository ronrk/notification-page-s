import React from "react";
import Wrapper from "./styled/NotificationBox.styled";

const NotificationBox = ({
  userName,
  userImg,
  text,
  read,
  secHead,
  img,
  date,
  msg,
  link,
}) => {
  return (
    <Wrapper className={read ? "" : "unread"}>
      <img src={userImg} alt="user" className="user-img" />
      <div className="content">
        <div className="text">
          <p>
            <span className="user-name">{userName} </span> {text}{" "}
            {secHead ? <span className="sec-head">{secHead}</span> : null}
            {link ? (
              <a href="#" className="link">
                {link}
              </a>
            ) : null}{" "}
            {read ? null : <span className="notif-new">*</span>}
          </p>
          <span className="date">{date}</span>
          {msg ? <div className="msg">{msg}</div> : null}
        </div>
        {img ? (
          <img src={img} className="notif-img" alt="notification" />
        ) : null}
      </div>
    </Wrapper>
  );
};

export default NotificationBox;
