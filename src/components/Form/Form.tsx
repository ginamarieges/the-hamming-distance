const Form = (): React.ReactElement => {
  return (
    <form>
      <h3>Enter here your words</h3>
      <div className="form__controls">
        <label htmlFor="firstWord">First word</label>
        <input type="text" name="" id="firstWord" />
      </div>
      <div className="form__controls">
        <label htmlFor="secondWord">Second word</label>
        <input type="text" name="" id="secondWord" />
      </div>
      <button>Calculate</button>
    </form>
  );
};

export default Form;
