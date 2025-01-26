import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

// Mock the useDecryptedAnswers hook
jest.mock("../lib/hooks/useDecryptedAnswers");

describe("App component", () => {
  it("renders UserInput when user name is empty", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
  });

  it("renders Quiz component when gameStatus is Quiz", async () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Nome"), {
      target: { value: "Test User" },
    });
    fireEvent.click(screen.getByTestId("play-button")); // Use data-testid to target the button

    // Wait for the Quiz component to be rendered
    await waitFor(() => {
      expect(screen.getByText(/Qual|Quali|Quale.*\?/i)).toBeInTheDocument();
    });
  });
});
// it("renders EndGame component when gameStatus is EndGame", () => {
//   render(<App />);
//   fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
//     target: { value: "Test User" },
//   });
//   fireEvent.click(screen.getByText("Submit"));
//   fireEvent.click(screen.getByText("End Game"));
//   expect(screen.getByText("EndGame Component")).toBeInTheDocument();
// });

// it("shows confirmation modal when handleRemoveUser is called", () => {
//   render(<App />);
//   fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
//     target: { value: "Test User" },
//   });
//   fireEvent.click(screen.getByText("Submit"));
//   fireEvent.click(screen.getByText("Remove User"));
//   expect(
//     screen.getByText("Are you sure you want to remove the user?")
//   ).toBeInTheDocument();
// });

// it("removes user and shows cover screen when confirmRemoveUser is called", () => {
//   render(<App />);
//   fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
//     target: { value: "Test User" },
//   });
//   fireEvent.click(screen.getByText("Submit"));
//   fireEvent.click(screen.getByText("Remove User"));
//   fireEvent.click(screen.getByText("Confirm"));
//   expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
// });
// });
