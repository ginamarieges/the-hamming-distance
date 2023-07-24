import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

describe("Given a Form component", () => {
  const firstWordLabel = "First word";
  const secondWordLabel = "Second word";
  const calculateButtonText = "Calculate";

  const firstWord = "hi";
  const secondWord = "pi";
  describe("When it is rendered", () => {
    test("Then it should show a fisrt word a second word field and a button", () => {
      render(<Form />);

      const firstInput = screen.getByLabelText(firstWordLabel);
      const secondInput = screen.getByLabelText(secondWordLabel);
      const calculateButton = screen.getByRole("button", {
        name: calculateButtonText,
      });

      expect(firstInput).toBeInTheDocument();
      expect(secondInput).toBeInTheDocument();
      expect(calculateButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user enter 'hi' and 'pi' and clicks the calculate button", () => {
    test("Then it should show a heading with the text '1'", async () => {
      render(<Form />);

      const firstInput = screen.getByLabelText(firstWordLabel);
      const secondInput = screen.getByLabelText(secondWordLabel);
      const button = screen.getByRole("button", { name: calculateButtonText });

      await userEvent.type(firstInput, firstWord);
      await userEvent.type(secondInput, secondWord);
      await userEvent.click(button);

      const expectedHammingDistance = 1;
      const hammingDistance = screen.getByText(expectedHammingDistance);

      expect(hammingDistance).toBeInTheDocument();
    });
  });
});
