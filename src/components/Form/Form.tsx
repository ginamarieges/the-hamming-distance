import { useState } from "react";
import { HammingWordsStructure } from "../../types";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  let theHammingDistance = 0;

  const initialHammingWords: HammingWordsStructure = {
    firstWord: "",
    secondWord: "",
    hammingDistance: theHammingDistance,
  };

  const [hammingWords, setHammingWords] = useState(initialHammingWords);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHammingWords({
      ...hammingWords,
      [event.target.id]: event.target.value,
    });
  };

  const getHammingDistance = (firstWord: string, secondWord: string) => {
    const firstArray = firstWord.split("");
    const secondArray = secondWord.split("");

    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        theHammingDistance++;
      }
    }

    return theHammingDistance;
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHammingWords({
      ...hammingWords,
      hammingDistance: getHammingDistance(
        hammingWords.firstWord,
        hammingWords.secondWord
      ),
    });
  };

  const reset = () => {
    setHammingWords(initialHammingWords);
  };

  return (
    <FormStyled autoComplete="off" noValidate onSubmit={handleOnSubmit}>
      <label className="form__label" htmlFor="firstWord">
        First word
      </label>
      <input
        onChange={onChangeData}
        className="form__input"
        type="text"
        id="firstWord"
        value={hammingWords.firstWord}
      />
      <label className="form__label" htmlFor="secondWord">
        Second word
      </label>
      <input
        onChange={onChangeData}
        className="form__input"
        type="text"
        id="secondWord"
        value={hammingWords.secondWord}
      />
      <button onClick={() => handleOnSubmit} className="form__button">
        Calculate
      </button>
      <button onClick={reset} className="form__button">
        Reset
      </button>
      <div className="hamming-container">
        <h3>{hammingWords.hammingDistance}</h3>
      </div>
    </FormStyled>
  );
};

export default Form;
