import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a fisrt word a second word field and a button", () => {
      const firstWordLabel = "First word";
      const secondWordLabel = "Second word";
      const buttonText = "Calculate";

      render(<Form />);

      const firstInput = screen.getByLabelText(firstWordLabel);
      const secondInput = screen.getByLabelText(secondWordLabel);
      const button = screen.getByRole("button", { name: buttonText });

      expect(firstInput).toBeInTheDocument();
      expect(secondInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
