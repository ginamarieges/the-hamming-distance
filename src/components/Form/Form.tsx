import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  return (
    <FormStyled>
      <h3>Enter here your words</h3>
      <label className="form__label" htmlFor="firstWord">
        First word
      </label>
      <input className="form__input" type="text" name="" id="firstWord" />
      <label className="form__label" htmlFor="secondWord">
        Second word
      </label>
      <input className="form__input" type="text" name="" id="secondWord" />
      <button className="form__button">Calculate</button>
    </FormStyled>
  );
};

export default Form;
