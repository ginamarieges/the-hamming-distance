import Form from "../Form/Form";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <h1 className="title">The Hamming distance</h1>
      <Form />
    </AppStyled>
  );
};

export default App;
