import { styled } from "styled-components";

const AppStyled = styled.main`
  background-color: #e9b384;
  color: #f4f2de;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;

  .title {
    text-transform: uppercase;
    padding: 20px;
  }
`;

export default AppStyled;
