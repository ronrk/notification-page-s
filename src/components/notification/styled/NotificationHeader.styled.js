import styled from "styled-components";

const NotificationHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  & .title {
    display: flex;
    align-items: center;
    h3 {
      font-size: 2.3rem;
      margin-right: 0.5rem;
    }
    span {
      font-size: 1.5rem;
      padding: 0rem 1rem;
      border-radius: 5px;
      background-color: var(--very-dark-blue);
      color: var(--white);
    }
  }

  & .btn-mark {
    background: 0;
    border: 0;
    cursor: pointer;
    color: var(--dark-grayish-blue);
    font-family: inherit;
    font-size: 1.3rem;
    transition: all 0.2s;

    &:hover {
      color: blue;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export default NotificationHeaderStyled;
