import styled from "styled-components";

const NotificationStyled = styled.div`
  padding: 2rem 4rem;
  background-color: var(--white);

  & .unread {
    /* background-color: hsla(219, 12%, 42%, 0.2); */
    background-color: hsla(219, 14%, 63%, 0.7);
  }
`;

export default NotificationStyled;
