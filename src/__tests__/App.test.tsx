import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../page/App";
import "@testing-library/jest-dom";

// Mock the useDecryptedAnswers hook
jest.mock("../lib/hooks/useDecryptedAnswers");

describe("App component", () => {
  it("renders UserInput when user name is empty", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("Inserisci un Nome")
    ).toBeInTheDocument();
  });

  it("renders Quiz component when gameStatus is Quiz", async () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Inserisci un Nome"), {
      target: { value: "Test User" },
    });
    fireEvent.click(screen.getByTestId("play-button")); // Use data-testid to target the button

    // Wait for the Quiz component to be rendered
    await waitFor(() => {
      expect(screen.getByText(/Qual|Quali|Quale.*\?/i)).toBeInTheDocument();
    });
  });
});
