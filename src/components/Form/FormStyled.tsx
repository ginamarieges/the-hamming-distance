import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  height: 400px;
  background-color: #7c9d96;
  padding: 20px;
  color: #f4f2de;

  .form {
    &__label {
      text-transform: uppercase;
      padding-left: 0;
    }

    &__input {
      padding: 10px;
    }

    &__button {
      padding: 10px;
      text-transform: uppercase;
      background-color: #f4f2de;
      color: #7c9d96;
    }
  }

  .hamming-container {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    padding: 20px;
  }
`;

export default FormStyled;
