import styled from "styled-components";

const NotificationBoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2px;
  margin: 2rem 0;
  padding: 1rem;

  & .user-img {
    display: block;
    width: 5rem;
    margin-right: 1.5rem;
  }
  & .content {
    display: flex;
    align-items: center;
    width: 100%;
    & .text {
      font-size: 1.2rem;
      word-spacing: 1.5px;
      color: var(--dark-grayish-blue);
      p {
        display: flex;
        flex-wrap: wrap;
      }
      & .user-name {
        font-weight: 800;
        color: var(--very-dark-blue);
        margin-right: 0.5rem;
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
      & .sec-head {
        font-weight: 800;
        margin-left: 0.5rem;
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
      & .link {
        text-decoration: none;
        margin-left: 0.5rem;
        color: blue;

        &:hover {
          font-weight: 800;
        }
      }
      & .notif-new {
        color: red;
        font-size: 1.6rem;
        margin-left: 0.3rem;
      }

      & .date {
        margin-bottom: 2rem;
      }

      & .msg {
        border: 1px solid var(--grayish-blue);
        width: 60%;
        padding: 0.7rem;
        transform: translateY(10px);
        cursor: pointer;
        &:hover {
          background-color: var(--grayish-blue);
        }
      }
    }
    & .notif-img {
      display: block;
      margin-left: auto;
      width: 4rem;
    }
  }
`;

export default NotificationBoxStyled;
