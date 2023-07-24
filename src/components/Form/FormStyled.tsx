import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  height: 500px;
  background-color: #7c9d96;
  padding: 20px;
  color: #f4f2de;

  .form {
    &__label {
      text-transform: uppercase;
      padding: 10px;
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
`;

export default FormStyled;
