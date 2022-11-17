import React, { useState, useEffect } from "react";
import NotificationHeader from "./notification/NotificationHeader";
import NotificationBox from "./notification/NotificationBox";
import Wrapper from "./styled/Notification.styled";

import avatarAngela from "../assets/images/avatar-angela-gray.webp";
import avatarAnna from "../assets/images/avatar-anna-kim.webp";
import avatarJacob from "../assets/images/avatar-jacob-thompson.webp";
import avatarKimberly from "../assets/images/avatar-kimberly-smith.webp";
import avatarMark from "../assets/images/avatar-mark-webber.webp";
import avatarNathan from "../assets/images/avatar-nathan-peterson.webp";
import avatarRizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import imgChess from "../assets/images/image-chess.webp";

const notifications = [
  {
    userName: "Mark Webber",
    userImg: avatarMark,
    text: "reacted to your recent post",
    img: "",
    secHead: "My first tournament today!",
    read: false,
    date: "1m ago",
    msg: "",
  },
  {
    userName: "Angela Gray",
    userImg: avatarAngela,
    text: "followed you",
    img: "",
    secHead: "",
    read: false,
    date: "5m ago",
    msg: "",
  },
  {
    userName: "Jacob Thompson",
    userImg: avatarJacob,
    text: "has joined your group",
    img: "",
    secHead: "",
    link: "Chess Club",
    read: false,
    date: "1 day ago",
    msg: "",
  },
  {
    userName: "Rizky Hasanuddin",
    userImg: avatarRizky,
    text: "sent you a private message",
    img: "",
    secHead: "",
    read: true,
    date: "5 days ago",
    msg: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
    I'm already having lots of fun and improving my game.`,
  },
  {
    userName: "Kimberly Smith",
    userImg: avatarKimberly,
    text: "commented on your picture",
    img: imgChess,
    secHead: "",
    read: true,
    date: "1 week ago",
    msg: "",
  },
  {
    userName: "Nathan Peterson",
    userImg: avatarNathan,
    text: "reacted to your recent post",
    img: "",
    secHead: "5 end-game strategies to increase your win rate",
    read: true,
    date: "2 weeks ago",
    msg: "",
  },
  {
    userName: "Anna Kim",
    userImg: avatarAnna,
    text: "left the group",
    img: "",
    secHead: "",
    link: "Chess Club",
    read: true,
    date: "2 weeks ago",
    msg: "",
  },
];

const Notification = () => {
  const [notification, setNotifications] = useState(notifications);
  const [newNotifications, setNewNotifications] = useState(0);
  let notificationBoxes = notification.map((item, i) => {
    return <NotificationBox {...item} key={i} />;
  });

  const markAllAsRead = () => {
    const newNotificationBoxes = notification.map((item) => {
      console.log(item);
      return { ...item, read: true };
    });
    setNotifications(newNotificationBoxes);
  };

  useEffect(() => {
    setNewNotifications(
      notification.reduce((acc, item) => {
        if (!item.read) {
          acc++;
        }
        return acc;
      }, 0)
    );
  }, [notification]);
  return (
    <Wrapper>
      <NotificationHeader
        markAllAsRead={markAllAsRead}
        newNotifications={newNotifications}
      />
      {notificationBoxes}
    </Wrapper>
  );
};

export default Notification;
